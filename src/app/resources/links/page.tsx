import { client, siteSettingsQuery } from "@/sanity";
import type { SiteSettings } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Useful Links | Westfield PTO",
  description: "Helpful links for Westfield families.",
};

export const revalidate = 60;

async function getSettings() {
  return client.fetch<SiteSettings>(siteSettingsQuery);
}

const additionalLinks = [
  {
    category: "School Resources",
    links: [
      { name: "School District Website", url: "#", description: "Official school district homepage" },
      { name: "Student Portal", url: "#", description: "Access grades and assignments" },
      { name: "School Lunch Menu", url: "#", description: "Monthly lunch menus and nutrition info" },
    ],
  },
  {
    category: "Parent Resources",
    links: [
      { name: "Volunteer Sign-Up", url: "/resources/forms", description: "Sign up to volunteer for events" },
      { name: "PTO Events Calendar", url: "/events", description: "View upcoming PTO events" },
      { name: "School Supply Lists", url: "#", description: "Grade-level supply lists" },
    ],
  },
  {
    category: "Community",
    links: [
      { name: "After School Programs", url: "#", description: "Enrichment and childcare options" },
      { name: "Local Library", url: "#", description: "Library programs and resources" },
      { name: "Parks & Recreation", url: "#", description: "Youth sports and activities" },
    ],
  },
];

export default async function LinksPage() {
  const settings = await getSettings();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Useful Links & Resources
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Helpful links for Westfield families, students, and staff.
          </p>
        </div>
      </section>

      {/* Quick Links from Settings */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Links */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {settings?.schoolWebsiteUrl && (
                <a
                  href={settings.schoolWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">School Website</h3>
                    <p className="text-sm text-muted">Official school homepage</p>
                  </div>
                </a>
              )}

              {settings?.googleCalendarUrl && (
                <a
                  href={settings.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">School Calendar</h3>
                    <p className="text-sm text-muted">View the school calendar</p>
                  </div>
                </a>
              )}

              {settings?.facebookPageUrl && (
                <a
                  href={settings.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Facebook</h3>
                    <p className="text-sm text-muted">Follow us for updates</p>
                  </div>
                </a>
              )}

              <a
                href="/contact"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact PTO</h3>
                  <p className="text-sm text-muted">Get in touch with us</p>
                </div>
              </a>
            </div>
          </div>

          {/* Additional Links by Category */}
          {additionalLinks.map((section) => (
            <div key={section.category} className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-4">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted">{link.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

