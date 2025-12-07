import Link from "next/link";
import { client, ptoFormsQuery } from "@/sanity";
import type { PtoForm } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms | Westfield PTO",
  description: "Download important forms for Westfield staff and parents, including reimbursement and payment request forms.",
};

export const revalidate = 60;

async function getForms() {
  return client.fetch<PtoForm[]>(ptoFormsQuery);
}

export default async function FormsPage() {
  const allForms = await getForms();

  // Group forms by category
  const ptoForms = allForms.filter((form) => form.category === "pto");
  const aaaForms = allForms.filter((form) => form.category === "aaa");
  const otherForms = allForms.filter((form) => form.category === "other");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Forms
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Find important forms for Westfield staff and parents, including reimbursement for school and PTO items.
          </p>
        </div>
      </section>

      {/* PTO Forms */}
      {ptoForms.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              PTO Forms
            </h2>
            <div className="space-y-4">
              {ptoForms.map((form) => (
                <FormCard key={form._id} form={form} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AAA Forms */}
      {aaaForms.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                AAA Fund Forms
              </h2>
              <p className="mt-2 text-muted text-sm">
                The AAA (Academic Achievement Assistance) Fund through the Linn-Mar Foundation helps students with extracurricular expenses.
              </p>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-muted">
                  <p className="font-medium text-foreground">How it works:</p>
                  <p className="mt-1">Staff members fill out the AAA Fund Request Form, and a guardian fills out the AAA Parent Waiver. Both forms are submitted together to help cover costs for athletic clothes, musical instruments, activity fees, and other extracurricular expenses.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {aaaForms.map((form) => (
                <FormCard key={form._id} form={form} variant="gray" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Forms */}
      {otherForms.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Other Forms
            </h2>
            <div className="space-y-4">
              {otherForms.map((form) => (
                <FormCard key={form._id} form={form} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {allForms.length === 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-12 text-center border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Forms Coming Soon</h3>
              <p className="text-muted">
                Downloadable forms will be available here soon.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Submit Forms Info */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl border border-border p-6 lg:p-8">
            <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-4">
              Where to Submit Forms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:westfieldpto@gmail.com" className="text-primary hover:text-primary-dark transition-colors">
                    westfieldpto@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">PTO Mailbox</h3>
                  <p className="text-sm text-muted">Located in the Westfield Elementary office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links CTA */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
            Looking for Educational Resources?
          </h2>
          <p className="mt-2 text-white/80">
            Find helpful links for reading, math, school supplies, and more.
          </p>
          <Link
            href="/resources/links"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Useful Links
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FormCard({ form, variant = "white" }: { form: PtoForm; variant?: "white" | "gray" }) {
  const bgClass = variant === "gray" ? "bg-gray-50" : "bg-white";
  const badgeBgClass = variant === "gray" ? "bg-white" : "bg-gray-100";

  return (
    <div
      className={`${bgClass} rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow`}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{form.name}</h3>
            <p className="mt-1 text-sm text-muted">{form.description}</p>
            <div className="mt-3 flex items-center gap-4">
              {(form.fileType || form.fileSize) && (
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md ${badgeBgClass} text-xs font-medium text-muted`}>
                  {form.fileType}{form.fileType && form.fileSize && " • "}{form.fileSize}
                </span>
              )}
              <a
                href={form.fileUrl}
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
          </div>
        </div>
      </div>
    </div>
  );
}
