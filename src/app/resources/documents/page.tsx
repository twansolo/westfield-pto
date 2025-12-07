import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents | Westfield PTO",
  description: "Access PTO meeting minutes, bylaws, and other important documents.",
};

const documents = [
  {
    category: "Meeting Minutes",
    items: [
      { name: "October 2024 Meeting Minutes", date: "October 15, 2024" },
      { name: "September 2024 Meeting Minutes", date: "September 17, 2024" },
      { name: "August 2024 Meeting Minutes", date: "August 20, 2024" },
    ],
  },
  {
    category: "Governing Documents",
    items: [
      { name: "PTO Bylaws", date: "Updated 2024" },
      { name: "Standing Rules", date: "Updated 2024" },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            PTO Documents
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Access meeting minutes, bylaws, and other important PTO documents.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {documents.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
                {section.category}
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                <div className="divide-y divide-border">
                  {section.items.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">{doc.name}</h3>
                        <p className="text-sm text-muted">{doc.date}</p>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <p className="text-muted text-sm">
              <strong className="text-foreground">Note:</strong> Documents are managed through our Sanity CMS. 
              Contact the PTO if you need access to specific documents not listed here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

