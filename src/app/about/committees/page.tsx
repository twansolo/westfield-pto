import { client, committeeChairsQuery } from "@/sanity";
import type { CommitteeChair } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Committees",
  description: "Explore Westfield Elementary PTO committees and volunteer opportunities. Find ways to contribute to our school community.",
};

export const revalidate = 60;

async function getCommitteeChairs() {
  return client.fetch<CommitteeChair[]>(committeeChairsQuery);
}

const officerPositions = [
  {
    title: "President",
    description: "Leads monthly meetings of general membership at the school and schedules monthly executive committee meetings, attends three meetings with the superintendent each school year, updates website and answers non-financial related emails.",
  },
  {
    title: "Vice-President",
    description: "Assists president with as-needed tasks and must be prepared to lead the monthly PTO general membership meeting in the president's absence.",
  },
  {
    title: "Treasurer",
    description: "Responsible for all financial transactions and maintaining/updating the PTO budget as well as an end of the fiscal year audit.",
  },
  {
    title: "Secretary",
    description: "Takes notes during monthly meetings and writes meeting minutes, prepares PTO information and submits it to the school secretary for the monthly Westfield e-newsletter.",
  },
];

export default async function CommitteesPage() {
  const committeeChairs = await getCommitteeChairs();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Committee Chairs
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Our committees are the backbone of the PTO, bringing together volunteers who share a passion for supporting our school.
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-4">
              Welcome from the <span className="text-primary">Westfield PTO!</span>
            </h2>
            <div className="prose max-w-none text-muted">
              <p className="leading-relaxed">
                As we start back to school, we would love to see new faces at our meetings, assisting 
                with or even leading the many projects the PTO does for our students and staff throughout 
                the year. Some of the projects can be done at home or a one-time-only commitment of an 
                hour or two!
              </p>
              <p className="mt-4 leading-relaxed">
                Please read the list below and contact us if you are interested in any of these committees. 
                A PTO officer or committee chairperson will contact you with more details.
              </p>
              <p className="mt-4 font-semibold text-primary">
                Dads/Grandpas: we need you too!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Officer Positions */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">
            PTO Officer <span className="text-primary">Positions</span>
          </h2>
          <p className="text-muted mb-8">Each position may be filled by up to two individuals.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officerPositions.map((position) => (
              <div
                key={position.title}
                className="bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-playfair)]">
                  {position.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Chairs List */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-8">
            Committee <span className="text-primary">Chairs</span>
          </h2>
          
          {committeeChairs && committeeChairs.length > 0 ? (
            <div className="bg-gray-50 rounded-2xl border border-border overflow-hidden">
              <div className="divide-y divide-border">
                {committeeChairs.map((chair) => (
                  <div key={chair._id} className="p-5 hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-lg">{chair.committeeName}</h3>
                        {chair.note && (
                          <p className="text-sm text-muted mt-0.5">({chair.note})</p>
                        )}
                      </div>
                      <p className="text-primary font-medium">{chair.chairs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-12 text-center border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Committee Information Coming Soon</h3>
              <p className="text-muted">
                Committee chair information will appear here once it is added to the system.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-playfair)]">
            Want to Join a Committee?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Interested in helping out? We&apos;re always looking for enthusiastic volunteers 
            to help make a difference in our school community. All committees welcome extra help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us to Volunteer
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
