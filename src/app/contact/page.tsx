import { client, siteSettingsQuery } from "@/sanity";
import type { SiteSettings } from "@/sanity";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Westfield PTO",
  description: "Get in touch with the Westfield PTO. Send us a message or sign up for our newsletter!",
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
            Have a question or want to get involved? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Two Forms Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Form - Mailchimp */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="bg-primary/5 border-b border-border p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                      Contact the PTO
                    </h2>
                    <p className="text-muted text-sm mt-1">Send us a message and we&apos;ll get back to you</p>
                  </div>
                </div>
              </div>
              
              <form 
                action="https://app.us6.list-manage.com/subscribe/post?u=ed104c15e663a6829fb6ed0c0&amp;id=0f8a0b27a3&amp;f_id=000fc4e1f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                target="_self"
                className="p-6 lg:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mce-FNAME" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="mce-FNAME"
                      name="FNAME"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="mce-LNAME" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="mce-LNAME"
                      name="LNAME"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="mce-EMAIL"
                    name="EMAIL"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="mce-MSG" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mce-MSG"
                    name="MSG"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    placeholder="How can we help you? Questions, volunteer interest, suggestions..."
                  />
                </div>

                {/* Honeypot field - anti-spam */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text" name="b_ed104c15e663a6829fb6ed0c0_0f8a0b27a3" tabIndex={-1} defaultValue="" />
                </div>

                <button
                  type="submit"
                  name="subscribe"
                  className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>

                <p className="text-xs text-muted text-center">
                  We typically respond within 1-2 business days.
                </p>
              </form>
            </div>

            {/* Newsletter Form - Mailchimp */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="bg-primary/5 border-b border-border p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                      Newsletter & Updates
                    </h2>
                    <p className="text-muted text-sm mt-1">Stay updated on PTO events and news</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <form 
                  action="https://app.us6.list-manage.com/subscribe/post?u=ed104c15e663a6829fb6ed0c0&amp;id=0f8a0b27a3&amp;f_id=0008c4e1f0" 
                  method="post" 
                  id="mc-embedded-subscribe-form-newsletter" 
                  name="mc-embedded-subscribe-form" 
                  target="_self"
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="mce-EMAIL-newsletter" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="mce-EMAIL-newsletter"
                      name="EMAIL"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mce-FNAME-newsletter" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="mce-FNAME-newsletter"
                        name="FNAME"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-LNAME-newsletter" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="mce-LNAME-newsletter"
                        name="LNAME"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      I am a:
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="MMERGE3" 
                          id="mce-MMERGE30" 
                          value="Parent"
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <span className="text-sm text-muted group-hover:text-foreground transition-colors">Parent</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="MMERGE3" 
                          id="mce-MMERGE31" 
                          value="Teacher/Staff"
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <span className="text-sm text-muted group-hover:text-foreground transition-colors">Teacher/Staff</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="MMERGE3" 
                          id="mce-MMERGE32" 
                          value="Community Member"
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <span className="text-sm text-muted group-hover:text-foreground transition-colors">Community Member</span>
                      </label>
                    </div>
                  </div>

                  {/* Hidden tags field */}
                  <input type="hidden" name="tags" value="20993,20992" />

                  {/* Honeypot field - anti-spam */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_ed104c15e663a6829fb6ed0c0_0f8a0b27a3" tabIndex={-1} defaultValue="" />
                  </div>

                  <button
                    type="submit"
                    name="subscribe"
                    className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    Subscribe to Newsletter
                  </button>

                  <p className="text-xs text-muted text-center">
                    We&apos;ll never spam you. Unsubscribe anytime.
                  </p>
                </form>

                {/* What You'll Receive */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">What You&apos;ll Receive:</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: "📅", text: "Upcoming event reminders" },
                      { icon: "📢", text: "Important announcements" },
                      { icon: "🎉", text: "Volunteer opportunities" },
                      { icon: "📊", text: "PTO meeting summaries" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted">
                        <span className="text-lg">{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              Other Ways to <span className="text-primary">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href={`mailto:${settings?.contactEmail || "westfieldpto@gmail.com"}`}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="text-sm text-primary">{settings?.contactEmail || "westfieldpto@gmail.com"}</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Westfield-PTO-100064283547071/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1877F2]/20 transition-colors">
                <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Facebook</h3>
                <p className="text-sm text-[#1877F2]">Westfield PTO</p>
              </div>
            </a>

            {/* Events */}
            <Link
              href="/events"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">PTO Meetings</h3>
                <p className="text-sm text-primary">View Calendar →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
