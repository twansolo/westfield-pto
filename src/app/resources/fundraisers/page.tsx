import { client, fundraisersQuery } from "@/sanity";
import type { Fundraiser } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Fundraisers",
  description: "Support Westfield Elementary PTO through everyday purchases. Earn money for our school with Box Tops, Hy-Vee receipts, and more.",
};

export const revalidate = 60;

async function getFundraisers() {
  return client.fetch<Fundraiser[]>(fundraisersQuery);
}

export default async function FundraisersPage() {
  const fundraisers = await getFundraisers();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Consumer Fundraisers
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Support Westfield PTO through your everyday purchases. Every little bit helps!
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <p className="text-lg text-muted leading-relaxed">
              The following programs provide funding opportunities to local schools throughout the school year. 
              Click on their links for more information. It is possible for friends and relatives to collect 
              these items and donate them as well.
            </p>
            <p className="mt-4 text-primary font-semibold text-lg">
              We appreciate your support! 💚
            </p>
          </div>
        </div>
      </section>

      {/* Fundraiser Programs */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-8">
            Fundraiser Links & <span className="text-primary">Information</span>
          </h2>
          
          {fundraisers && fundraisers.length > 0 ? (
            <div className="space-y-6">
              {fundraisers.map((fundraiser) => (
                <div
                  key={fundraiser._id}
                  className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{fundraiser.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                        {fundraiser.name}
                      </h3>
                      
                      {fundraiser.highlight && (
                        <div className="mt-2 inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                          {fundraiser.highlight}
                        </div>
                      )}
                      
                      <p className="mt-3 text-muted leading-relaxed">
                        {fundraiser.description}
                      </p>
                      
                      {fundraiser.extraInfo && (
                        <p className="mt-3 text-muted leading-relaxed">
                          {fundraiser.extraInfo}
                        </p>
                      )}
                      
                      {fundraiser.link && (
                        <a
                          href={fundraiser.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                        >
                          {fundraiser.linkText || "Learn More"}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fundraiser Information Coming Soon</h3>
              <p className="text-muted">
                Check back soon for information about our consumer fundraiser programs.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How to Help */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Shop as Usual</h3>
              <p className="mt-2 text-sm text-muted">Make your regular purchases through participating retailers</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Save Receipts</h3>
              <p className="mt-2 text-sm text-muted">Keep your Hy-Vee receipts and Box Tops to turn in</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Tell Friends & Family</h3>
              <p className="mt-2 text-sm text-muted">Anyone can participate and donate on our behalf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-playfair)]">
            Questions About Fundraisers?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            If you have questions about any of our fundraising programs or want to learn more about how you can help, 
            please don&apos;t hesitate to reach out!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
