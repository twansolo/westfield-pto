import { client, siteSettingsQuery } from "@/sanity";
import type { SiteSettings } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Westfield PTO",
  description: "Get in touch with the Westfield PTO. We'd love to hear from you!",
};

export const revalidate = 60;

async function getSettings() {
  return client.fetch<SiteSettings>(siteSettingsQuery);
}

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Have questions or want to get involved? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href={`mailto:${settings?.contactEmail || "pto@westfieldschool.org"}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {settings?.contactEmail || "pto@westfieldschool.org"}
                    </a>
                    <p className="text-sm text-muted mt-1">We typically respond within 24-48 hours.</p>
                  </div>
                </div>

                {/* School Website */}
                {settings?.schoolWebsiteUrl && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">School Website</h3>
                      <a 
                        href={settings.schoolWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        Visit School Website →
                      </a>
                    </div>
                  </div>
                )}

                {/* Facebook */}
                {settings?.facebookPageUrl && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Facebook</h3>
                      <a 
                        href={settings.facebookPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        Follow us on Facebook →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* PTO Meetings */}
              <div className="mt-10 p-6 bg-white rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">PTO Meetings</h3>
                <p className="text-muted text-sm">
                  PTO meetings are held monthly and are open to all parents and guardians. 
                  Check our <a href="/events" className="text-primary hover:text-primary-dark">events calendar</a> for 
                  upcoming meeting dates and times.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
                Send a Message
              </h2>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select a subject...</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="question">General Question</option>
                    <option value="event">Event Inquiry</option>
                    <option value="feedback">Feedback/Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-muted text-center">
                  By submitting this form, you agree to be contacted by the Westfield PTO.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

