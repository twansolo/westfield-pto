import Image from "next/image";
import Link from "next/link";
import { client, boardMembersQuery } from "@/sanity";
import { urlFor } from "@/sanity";
import type { BoardMember } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board & Officers",
  description: "Meet the dedicated parent volunteers who lead Westfield Elementary PTO. Learn about our officers and how to get involved.",
};

export const revalidate = 60;

async function getBoardMembers() {
  return client.fetch<BoardMember[]>(boardMembersQuery);
}

export default async function AboutPage() {
  const boardMembers = await getBoardMembers();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Board & Officers
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Meet the dedicated volunteers who lead our PTO and work tirelessly to support our school community.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {boardMembers && boardMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <BoardMemberCard key={member._id} member={member} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <p className="text-muted">Board member information coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Committee Chairs Link */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              Looking for Committee Chairs?
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">
              View the complete list of committee chairs who organize our events and activities throughout the school year.
            </p>
            <Link
              href="/about/committees"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              View Committee Chairs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
            About the <span className="text-primary">Westfield PTO</span>
          </h2>
          <div className="prose max-w-none text-muted">
            <p className="text-lg leading-relaxed">
              The Westfield Parent Teacher Organization (PTO) is a volunteer organization 
              dedicated to supporting our school, students, teachers, and families. We work 
              to enhance the educational experience through fundraising, community events, 
              and volunteer activities.
            </p>
            <p className="mt-4 leading-relaxed">
              Our mission is to foster a strong partnership between home and school, 
              creating an environment where every child can thrive. We believe that when 
              parents, teachers, and the community work together, we can provide the best 
              possible education for our children.
            </p>
            <p className="mt-4 leading-relaxed">
              We welcome all parents and guardians to get involved! Whether you can spare 
              an hour a month or several hours a week, there&apos;s a place for you in the 
              Westfield PTO.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-playfair)]">
            Want to Get Involved?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We&apos;re always looking for volunteers to help with events, committees, and more. 
            Contact us to learn about opportunities to support our school community.
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

function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
      {/* Photo */}
      <div className="aspect-square bg-gray-100 relative">
        {member.photo ? (
          <Image
            src={urlFor(member.photo).width(400).height(400).url()}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
            <svg className="w-20 h-20 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-playfair)]">
          {member.name}
        </h3>
        <p className="text-primary font-medium mt-1">{member.role}</p>
        
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 mt-3 text-sm text-muted hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {member.email}
          </a>
        )}

        {member.bio && (
          <p className="mt-3 text-sm text-muted line-clamp-3">{member.bio}</p>
        )}
      </div>
    </div>
  );
}
