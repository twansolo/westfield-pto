import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Here for New Families",
  description: "New to Westfield Elementary? Start here! Learn how to join the PTO, volunteer, donate, and stay connected with our school community.",
};

export default function StartHerePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Welcome to Westfield PTO! 👋
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            New to Westfield Elementary? This page has everything you need to get connected with our school community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a href="#email-list" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center">
                <span className="text-2xl mb-2">📧</span>
                <span className="text-sm font-medium text-foreground">Join Email List</span>
              </a>
              <a href="#donate" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center">
                <span className="text-2xl mb-2">💝</span>
                <span className="text-sm font-medium text-foreground">Donate</span>
              </a>
              <a href="#volunteer" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center">
                <span className="text-2xl mb-2">🙋</span>
                <span className="text-sm font-medium text-foreground">Volunteer</span>
              </a>
              <a href="#meetings" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center">
                <span className="text-2xl mb-2">📅</span>
                <span className="text-sm font-medium text-foreground">PTO Meetings</span>
              </a>
            </div>
          </div>

          {/* 1. Join Email List */}
          <div id="email-list" className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 mb-8 scroll-mt-24">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-playfair)]">
                  1. Join Our Email List
                </h2>
                <p className="text-muted mb-4">
                  The best way to stay informed! We send <strong>1–2 emails per month</strong> with:
                </p>
                <ul className="space-y-2 text-muted mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Upcoming event reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Volunteer opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Important announcements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    PTO meeting summaries
                  </li>
                </ul>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Sign Up for Newsletter
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Donate */}
          <div id="donate" className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 mb-8 scroll-mt-24">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-playfair)]">
                  2. Support the PTO
                </h2>
                <p className="text-muted mb-4">
                  Your donations directly fund classroom supplies, educational programs, field trips, and special events for Westfield students. <strong>Every contribution makes a difference!</strong>
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted">
                    <strong className="text-foreground">Our main fundraiser:</strong> Write One for Westfield helps us meet our annual budget goals. You can also support us through everyday purchases with our consumer fundraisers.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linnmarfoundation.networkforgood.com/projects/256751-write-one-for-westfield-2025-26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Donate Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link
                    href="/resources/fundraisers"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    Consumer Fundraisers
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Volunteer */}
          <div id="volunteer" className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 mb-8 scroll-mt-24">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-playfair)]">
                  3. Volunteer With Us
                </h2>
                <p className="text-muted mb-4">
                  We have volunteer opportunities for every schedule—from one-time events to ongoing roles. <strong>No experience necessary!</strong> Here are some ways to help:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { emoji: "📚", name: "Book Fair", desc: "Help during our Scholastic book sales" },
                    { emoji: "🏃", name: "Field Day", desc: "Assist with outdoor activities" },
                    { emoji: "🎉", name: "Events", desc: "Set up, run, or clean up school events" },
                    { emoji: "👩‍🏫", name: "Classroom Helper", desc: "Support teachers in the classroom" },
                    { emoji: "🍎", name: "Teacher Appreciation", desc: "Help celebrate our amazing staff" },
                    { emoji: "🤝", name: "Wherever Needed", desc: "Flexible help as opportunities arise" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">{item.emoji}</span>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.name}</p>
                        <p className="text-xs text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Volunteer Interest Form
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* 4. PTO Meetings */}
          <div id="meetings" className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 mb-8 scroll-mt-24">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-playfair)]">
                  4. Attend PTO Meetings
                </h2>
                <p className="text-muted mb-4">
                  PTO meetings are a great way to meet other parents, learn what&apos;s happening at school, and have your voice heard. <strong>All parents, teachers, and staff are welcome!</strong>
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">📅 When</p>
                      <p className="text-muted">Monthly meetings<br/>5:30 – 6:30 PM</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">📍 Where</p>
                      <p className="text-muted">Westfield Media Center<br/>(School Library)</p>
                    </div>
                  </div>
                  <hr className="my-4 border-primary/20" />
                  <p className="text-sm text-muted">
                    <strong>What we discuss:</strong> School news, district updates, upcoming events, budget updates, teacher funding requests, and more.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    View Calendar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="https://docs.google.com/document/d/1bleXmxN74wWN6Wf_XglGVQS0kM9emJvA0uECtgB7C74/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    Sample Agenda
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Important Documents */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-playfair)]">
                  5. Review PTO Documents
                </h2>
                <p className="text-muted mb-4">
                  Want to know more about how we operate? Check out our meeting minutes to see what we&apos;ve discussed, and our budget to see how funds are used.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/resources/documents"
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Meeting Minutes</p>
                      <p className="text-xs text-muted">Past meeting notes by year</p>
                    </div>
                  </Link>
                  <Link
                    href="/resources/budgets"
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Budget & Spending</p>
                      <p className="text-xs text-muted">See how funds are used</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-playfair)]">
              Have Questions?
            </h2>
            <p className="text-muted mb-4">
              We&apos;re here to help! Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:westfieldpto@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Meet the Board
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

