import { client, meetingMinutesQuery } from "@/sanity";
import type { MeetingMinutes } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTO Meeting Minutes | Westfield PTO",
  description: "Access PTO meeting minutes organized by school year.",
};

export const revalidate = 60;

async function getMeetingMinutes() {
  return client.fetch<MeetingMinutes[]>(meetingMinutesQuery);
}

// Group minutes by school year
function groupBySchoolYear(minutes: MeetingMinutes[]) {
  const grouped: Record<string, MeetingMinutes[]> = {};
  
  minutes.forEach((minute) => {
    const year = minute.schoolYear;
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(minute);
  });
  
  // Sort years in descending order
  const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
  
  return { grouped, sortedYears };
}

export default async function DocumentsPage() {
  const minutes = await getMeetingMinutes();
  const { grouped, sortedYears } = groupBySchoolYear(minutes);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            PTO Meeting Minutes
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Documents are listed from newest to oldest, organized by school year.
          </p>
        </div>
      </section>

      {/* Meeting Structure Info */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Meeting Details */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-4">
                  About PTO <span className="text-primary">Meetings</span>
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  PTO meetings take place from <strong className="text-foreground">5:30–6:30 PM</strong> in the <strong className="text-foreground">Westfield Media Center (Library)</strong>. All parents, teachers, and staff are invited to attend.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Topics of discussion include school news, district news, upcoming events, budget updates, ad-hoc teacher funding requests, and a variety of other topics.
                </p>
                <p className="text-primary font-medium">
                  Get involved, let your voice be heard, and stay on top of school happenings!
                </p>
              </div>
              
              {/* Quick Info Cards */}
              <div className="lg:w-64 space-y-3">
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Time</p>
                      <p className="font-semibold text-foreground">5:30–6:30 PM</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="font-semibold text-foreground">Media Center</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://docs.google.com/document/d/1bleXmxN74wWN6Wf_XglGVQS0kM9emJvA0uECtgB7C74/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors text-sm"
                >
                  View Sample Agenda
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      {sortedYears.length > 0 && (
        <section className="py-8 bg-white border-b border-border sticky top-16 z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <span className="text-sm font-medium text-muted flex-shrink-0">Jump to:</span>
              {sortedYears.map((year) => (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-foreground rounded-lg hover:bg-primary hover:text-white transition-colors flex-shrink-0"
                >
                  {year}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Meeting Minutes by Year */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedYears.length > 0 ? (
            <div className="space-y-12">
              {sortedYears.map((year) => (
                <div key={year} id={`year-${year}`} className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    {year} Minutes
                  </h2>
                  <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                    <div className="divide-y divide-border">
                      {grouped[year].map((minute) => {
                        const formattedDate = new Date(minute.meetingDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        });
                        
                        return (
                          <a
                            key={minute._id}
                            href={minute.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {minute.title || formattedDate}
                              </h3>
                              <p className="text-sm text-muted">{formattedDate}</p>
                            </div>
                            {minute.fileSize && (
                              <span className="text-xs text-muted bg-gray-100 px-2 py-1 rounded flex-shrink-0">
                                {minute.fileSize}
                              </span>
                            )}
                            <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No Meeting Minutes Yet</h3>
              <p className="text-muted">
                Meeting minutes will appear here once they are uploaded to the system.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">PTO Meetings</h3>
                <p className="text-sm text-muted">
                  PTO meetings are held monthly during the school year and are open to all parents and guardians. 
                  Check our <a href="/events" className="text-primary hover:text-primary-dark underline">events calendar</a> for 
                  upcoming meeting dates. Meeting minutes are typically posted within a week after each meeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
