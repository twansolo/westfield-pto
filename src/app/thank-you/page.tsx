import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for subscribing to Westfield Elementary PTO updates.",
  robots: {
    index: false, // Don't index this page
  },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Google tag (gtag.js) event - Email Captured */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof gtag === 'function') {
              gtag('event', 'mcforms_email_captured', {});
            }
          `,
        }}
      />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-4">
              Thank You!
            </h1>

            <p className="text-muted mb-6">
              You&apos;ve been successfully added to our mailing list. We&apos;ll keep you 
              updated on PTO events, volunteer opportunities, and important announcements.
            </p>

            <div className="space-y-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Back to Home
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                View Upcoming Events
              </Link>
            </div>

            {/* Social */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted mb-3">Also follow us on:</p>
              <a
                href="https://www.facebook.com/p/Westfield-PTO-100064283547071/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white text-sm font-medium rounded-lg hover:bg-[#1877F2]/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

