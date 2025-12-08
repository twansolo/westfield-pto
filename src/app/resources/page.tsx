import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTO Resources & Documents",
  description: "Access Westfield Elementary PTO resources including meeting minutes, forms, budgets, and helpful links for parents.",
  openGraph: {
    title: "PTO Resources & Documents | Westfield Elementary PTO",
    description: "Access Westfield Elementary PTO resources including meeting minutes, forms, budgets, and helpful links for parents.",
  },
  twitter: {
    title: "PTO Resources & Documents | Westfield Elementary PTO",
    description: "Access Westfield Elementary PTO resources including meeting minutes, forms, budgets, and helpful links for parents.",
  },
};

const resources = [
  {
    title: "Documents",
    description: "Meeting minutes, bylaws, and other important PTO documents.",
    href: "/resources/documents",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Forms",
    description: "Download forms for volunteer sign-ups, reimbursements, and more.",
    href: "/resources/forms",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Budgets",
    description: "View PTO budgets and see how funds are being used.",
    href: "/resources/budgets",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Useful Links",
    description: "Helpful links for families, including school resources and community programs.",
    href: "/resources/links",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Resources
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Access documents, forms, and helpful information for Westfield families.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground font-[family-name:var(--font-playfair)] group-hover:text-primary transition-colors">
                  {resource.title}
                </h2>
                <p className="mt-2 text-muted">{resource.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium">
                  View {resource.title}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

