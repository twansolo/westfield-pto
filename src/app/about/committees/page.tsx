import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committees | Westfield PTO",
  description: "Learn about the various committees that make up the Westfield PTO.",
};

const committees = [
  {
    name: "Hospitality Committee",
    description: "Organizes meals and refreshments for staff appreciation events, new family welcome events, and PTO meetings.",
    icon: "🍽️",
  },
  {
    name: "Fundraising Committee",
    description: "Plans and executes fundraising initiatives to support school programs, equipment, and special events.",
    icon: "💰",
  },
  {
    name: "Events Committee",
    description: "Coordinates family-friendly events throughout the school year including movie nights, carnivals, and seasonal celebrations.",
    icon: "🎉",
  },
  {
    name: "Communications Committee",
    description: "Manages PTO communications including newsletters, social media, and website updates.",
    icon: "📢",
  },
  {
    name: "Volunteer Coordination",
    description: "Recruits and organizes volunteers for various school and PTO activities throughout the year.",
    icon: "🤝",
  },
  {
    name: "Teacher Support Committee",
    description: "Works to support teachers through classroom volunteers, supply donations, and appreciation initiatives.",
    icon: "📚",
  },
];

export default function CommitteesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            About Committees
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Our committees are the backbone of the PTO, bringing together volunteers who share a passion for supporting our school.
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee) => (
              <div
                key={committee.name}
                className="bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{committee.icon}</div>
                <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-playfair)]">
                  {committee.name}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {committee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
            Join a Committee
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Interested in joining one of our committees? We&apos;re always looking for enthusiastic volunteers 
            to help make a difference in our school community.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Contact Us to Volunteer
          </a>
        </div>
      </section>
    </div>
  );
}

