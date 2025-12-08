import { client, siteSettingsQuery } from "@/sanity";
import type { SiteSettings } from "@/sanity";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved & Contact Us",
  description: "Contact Westfield Elementary PTO or sign up to volunteer. Join our community and help support students and teachers.",
  openGraph: {
    title: "Get Involved & Contact Us | Westfield Elementary PTO",
    description: "Contact Westfield Elementary PTO or sign up to volunteer. Join our community and help support students and teachers.",
  },
  twitter: {
    title: "Get Involved & Contact Us | Westfield Elementary PTO",
    description: "Contact Westfield Elementary PTO or sign up to volunteer. Join our community and help support students and teachers.",
  },
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
            Get Involved
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Join our community! Volunteer to help or subscribe to stay updated on PTO events and news.
          </p>
        </div>
      </section>

      {/* Two Forms Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Volunteer Interest Form - Mailchimp */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="bg-primary/5 border-b border-border p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                      Volunteer Interest
                    </h2>
                    <p className="text-muted text-sm mt-1">Help make a difference in our school community</p>
                  </div>
                </div>
              </div>
              
              <form 
                action="https://app.us6.list-manage.com/subscribe/post?u=ed104c15e663a6829fb6ed0c0&amp;id=0f8a0b27a3&amp;f_id=0009c4e1f0" 
                method="post" 
                id="mc-embedded-subscribe-form-volunteer" 
                name="mc-embedded-subscribe-form" 
                target="_self"
                className="p-6 lg:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mce-FNAME-vol" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="mce-FNAME-vol"
                      name="FNAME"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="mce-LNAME-vol" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="mce-LNAME-vol"
                      name="LNAME"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mce-EMAIL-vol" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="mce-EMAIL-vol"
                    name="EMAIL"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="mce-MGRADE" className="block text-sm font-medium text-foreground mb-2">
                    Student&apos;s Grade(s)
                  </label>
                  <input
                    type="text"
                    id="mce-MGRADE"
                    name="MGRADE"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="e.g., 2nd, K & 3rd"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Volunteer Interests
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "mce-MMERGE60", value: "Events", label: "Events" },
                      { id: "mce-MMERGE61", value: "Book Fair", label: "Book Fair" },
                      { id: "mce-MMERGE62", value: "Field Day", label: "Field Day" },
                      { id: "mce-MMERGE63", value: "Classroom", label: "Classroom" },
                      { id: "mce-MMERGE64", value: "Teacher Appreciation", label: "Teacher Appreciation" },
                      { id: "mce-MMERGE65", value: "Wherever needed", label: "Wherever needed" },
                    ].map((option) => (
                      <label 
                        key={option.id} 
                        className="flex items-center gap-2 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <input 
                          type="radio" 
                          name="MMERGE6" 
                          id={option.id} 
                          value={option.value}
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <span className="text-sm text-muted group-hover:text-foreground transition-colors">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Hidden tags field */}
                <input type="hidden" name="tags" value="20996" />

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  Sign Up to Volunteer
                </button>

                <p className="text-xs text-muted text-center">
                  We&apos;ll reach out with volunteer opportunities matching your interests!
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
