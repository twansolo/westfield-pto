import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Opportunities",
  description: "Volunteer with Westfield Elementary PTO! Discover ways to help in classrooms, at events, and support our school community.",
  openGraph: {
    title: "Volunteer Opportunities | Westfield Elementary PTO",
    description: "Volunteer with Westfield Elementary PTO! Discover ways to help in classrooms, at events, and support our school community.",
  },
  twitter: {
    title: "Volunteer Opportunities | Westfield Elementary PTO",
    description: "Volunteer with Westfield Elementary PTO! Discover ways to help in classrooms, at events, and support our school community.",
  },
};

const volunteerAreas = [
  { value: "classroom", label: "Classroom Helper" },
  { value: "events", label: "Event Planning & Setup" },
  { value: "fundraising", label: "Fundraising" },
  { value: "hospitality", label: "Hospitality (Meals, Refreshments)" },
  { value: "communications", label: "Communications (Newsletter, Social Media)" },
  { value: "teacher-support", label: "Teacher Support" },
  { value: "committee-chair", label: "Committee Chair" },
  { value: "board", label: "Board Position" },
  { value: "other", label: "Other / Anywhere Needed" },
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Volunteer With Us
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Join our community of dedicated parents and volunteers making a difference at Westfield Elementary.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10">
            {/* Intro */}
            <div className="mb-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                Volunteer Sign-Up Form
              </h2>
              <p className="mt-2 text-muted">
                Whether you can help once a year or once a week, we appreciate your support!
              </p>
            </div>

            <form className="space-y-6">
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

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Child Info */}
              <div>
                <label htmlFor="childGrade" className="block text-sm font-medium text-foreground mb-2">
                  Child&apos;s Grade(s) at Westfield
                </label>
                <input
                  type="text"
                  id="childGrade"
                  name="childGrade"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="e.g., 2nd and 4th grade"
                />
              </div>

              {/* Volunteer Areas */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Areas of Interest <span className="text-primary">*</span>
                </label>
                <p className="text-sm text-muted mb-3">Select all that apply:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {volunteerAreas.map((area) => (
                    <label
                      key={area.value}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="volunteerAreas"
                        value={area.value}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{area.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                >
                  <option value="">Select your availability...</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="events-only">Special Events Only</option>
                  <option value="as-needed">As Needed</option>
                </select>
              </div>

              {/* Additional Info */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Information or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Tell us about any special skills, scheduling preferences, or questions you have..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                Submit Volunteer Form
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <p className="text-xs text-muted text-center">
                Thank you for your interest in volunteering! A PTO representative will contact you soon.
              </p>
            </form>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

