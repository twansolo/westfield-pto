import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Sign-Up",
  description: "Subscribe to the Westfield Elementary PTO newsletter for updates on events, volunteer opportunities, and school news.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Stay Connected
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss an update from Westfield PTO.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10">
            {/* Intro */}
            <div className="mb-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                Newsletter Sign-Up
              </h2>
              <p className="mt-2 text-muted">
                Get the latest PTO news, event announcements, and important updates delivered to your inbox.
              </p>
            </div>

            {/* What You'll Receive */}
            <div className="mb-8 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3 text-sm">What you&apos;ll receive:</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Upcoming event announcements
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Volunteer opportunities
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fundraising updates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Important school & PTO news
                </li>
              </ul>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Child's Grade (Optional) */}
              <div>
                <label htmlFor="childGrade" className="block text-sm font-medium text-foreground mb-2">
                  Child&apos;s Grade(s) <span className="text-muted font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="childGrade"
                  name="childGrade"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="e.g., Kindergarten, 3rd grade"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="consent" className="text-sm text-muted">
                  I agree to receive email communications from Westfield PTO. I understand I can unsubscribe at any time.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                Subscribe to Newsletter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              <p className="text-xs text-muted text-center">
                We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>

          {/* Also Follow Us */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-border text-center">
            <p className="text-sm text-muted mb-4">Also follow us on social media:</p>
            <a
              href="https://www.facebook.com/p/Westfield-PTO-100064283547071/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] text-white font-medium rounded-lg hover:bg-[#1877F2]/90 transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

