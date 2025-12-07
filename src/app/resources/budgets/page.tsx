import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets & PTO Purchases | Westfield PTO",
  description: "View PTO budgets and purchase information.",
};

export default function BudgetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Budgets & PTO Purchases
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Transparency in how we manage and spend PTO funds for our school community.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Budget Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Current Year Budget
            </h2>
            <p className="text-muted mb-6">
              Our annual budget is approved by the PTO membership and guides our spending throughout the school year.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted">Total Budget</p>
                <p className="text-2xl font-bold text-primary">$15,000</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted">Spent to Date</p>
                <p className="text-2xl font-bold text-foreground">$8,450</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted">Remaining</p>
                <p className="text-2xl font-bold text-green-600">$6,550</p>
              </div>
            </div>
          </div>

          {/* Budget Documents */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Budget Documents
            </h2>
            <div className="space-y-3">
              {["2024-2025 Approved Budget", "2023-2024 Year-End Report", "2023-2024 Approved Budget"].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="flex-1 text-foreground">{doc}</span>
                  <button className="text-sm text-primary hover:text-primary-dark">Download</button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Purchases */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Recent PTO Purchases
            </h2>
            <p className="text-muted mb-4">
              Here&apos;s how your PTO funds have been put to work recently:
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Classroom supplies for teachers ($1,200)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>New playground equipment ($3,500)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Technology upgrades for library ($2,000)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Field trip subsidies ($1,750)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

