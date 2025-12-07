import { client, siteSettingsQuery, budgetDocumentsQuery } from "@/sanity";
import type { SiteSettings, BudgetDocument } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets & PTO Purchases | Westfield PTO",
  description: "View PTO budgets and purchase information.",
};

export const revalidate = 60;

async function getData() {
  const [settings, documents] = await Promise.all([
    client.fetch<SiteSettings>(siteSettingsQuery),
    client.fetch<BudgetDocument[]>(budgetDocumentsQuery),
  ]);
  return { settings, documents };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function BudgetsPage() {
  const { settings, documents } = await getData();

  const totalBudget = settings?.totalBudget || 0;
  const spentToDate = settings?.spentToDate || 0;
  const remaining = totalBudget - spentToDate;
  const budgetYear = settings?.budgetYear || "Current Year";
  const recentPurchases = settings?.recentPurchases || [];

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
          {totalBudget > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
                {budgetYear} Budget
              </h2>
              <p className="text-muted mb-6">
                Our annual budget is approved by the PTO membership and guides our spending throughout the school year.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted">Total Budget</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(totalBudget)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted">Spent to Date</p>
                  <p className="text-2xl font-bold text-foreground">{formatCurrency(spentToDate)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted">Remaining</p>
                  <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(remaining)}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              {totalBudget > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-muted mb-2">
                    <span>Budget Used</span>
                    <span>{Math.round((spentToDate / totalBudget) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((spentToDate / totalBudget) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Budget Documents */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Budget Documents
            </h2>
            {documents && documents.length > 0 ? (
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc._id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-foreground">{doc.title}</span>
                      {doc.fileSize && (
                        <span className="ml-2 text-xs text-muted">({doc.fileSize})</span>
                      )}
                    </div>
                    <a 
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-muted">Budget documents will be available soon.</p>
              </div>
            )}
          </div>

          {/* Recent Purchases */}
          {recentPurchases.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
                Recent PTO Purchases
              </h2>
              <p className="text-muted mb-4">
                Here&apos;s how your PTO funds have been put to work recently:
              </p>
              <ul className="space-y-3 text-muted">
                {recentPurchases.map((purchase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {purchase.description}
                      {purchase.amount && (
                        <span className="font-medium text-foreground ml-1">
                          ({formatCurrency(purchase.amount)})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Empty State for No Budget Info */}
          {totalBudget === 0 && documents.length === 0 && recentPurchases.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-border p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Budget Information Coming Soon</h3>
              <p className="text-muted">
                Budget details and documents will be available here once they are added.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
