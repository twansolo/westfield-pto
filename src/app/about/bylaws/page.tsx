import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bylaws | Westfield PTO",
  description: "View the bylaws and standing rules of the Westfield PTO.",
};

export default function BylawsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Bylaws & Standing Rules
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            The governing documents that guide our organization.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-10">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                About Our Bylaws
              </h2>
              <p className="text-muted leading-relaxed">
                The Westfield PTO operates under a set of bylaws that define our purpose, 
                membership, officers, meetings, and other organizational matters. These 
                bylaws ensure that our organization runs smoothly and serves our school 
                community effectively.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4 font-[family-name:var(--font-playfair)]">
                Download Documents
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">PTO Bylaws</h4>
                    <p className="text-sm text-muted">Official bylaws document</p>
                  </div>
                  <a
                    href="/resources/documents"
                    className="px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    View →
                  </a>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Standing Rules</h4>
                    <p className="text-sm text-muted">Operational procedures and guidelines</p>
                  </div>
                  <a
                    href="/resources/documents"
                    className="px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    View →
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4 font-[family-name:var(--font-playfair)]">
                Key Information
              </h3>
              <ul className="text-muted space-y-2">
                <li>• Membership is open to all parents and guardians of students at Westfield</li>
                <li>• Regular meetings are held monthly during the school year</li>
                <li>• Officers are elected annually at the spring meeting</li>
                <li>• Amendments to bylaws require advance notice and a two-thirds vote</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

