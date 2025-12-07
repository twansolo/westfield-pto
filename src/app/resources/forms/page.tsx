import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms | Westfield PTO",
  description: "Download forms for PTO activities, reimbursements, and more.",
};

const forms = [
  {
    name: "Volunteer Sign-Up Form",
    description: "Sign up to volunteer for PTO events and activities.",
    icon: "🙋",
  },
  {
    name: "Reimbursement Request Form",
    description: "Request reimbursement for approved PTO expenses.",
    icon: "💵",
  },
  {
    name: "Event Proposal Form",
    description: "Submit a proposal for a new event or activity.",
    icon: "📝",
  },
  {
    name: "Donation Form",
    description: "Make a tax-deductible donation to the PTO.",
    icon: "❤️",
  },
];

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Forms
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Download forms for PTO activities, reimbursements, and volunteer opportunities.
          </p>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forms.map((form) => (
              <div
                key={form.name}
                className="bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{form.icon}</div>
                <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-playfair)]">
                  {form.name}
                </h3>
                <p className="mt-2 text-muted text-sm">{form.description}</p>
                <button className="mt-4 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

