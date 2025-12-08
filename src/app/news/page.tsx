import Link from "next/link";
import { client, announcementsQuery } from "@/sanity";
import type { Announcement } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Announcements",
  description: "Latest news, updates, and announcements from Westfield Elementary PTO. Stay informed about what's happening at our school.",
  openGraph: {
    title: "News & Announcements | Westfield Elementary PTO",
    description: "Latest news, updates, and announcements from Westfield Elementary PTO. Stay informed about what's happening at our school.",
  },
  twitter: {
    title: "News & Announcements | Westfield Elementary PTO",
    description: "Latest news, updates, and announcements from Westfield Elementary PTO. Stay informed about what's happening at our school.",
  },
};

export const revalidate = 60;

async function getAnnouncements() {
  return client.fetch<Announcement[]>(announcementsQuery);
}

export default async function NewsPage() {
  const announcements = await getAnnouncements();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            News & Announcements
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Stay informed about the latest updates, news, and important announcements from the Westfield PTO.
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {announcements && announcements.length > 0 ? (
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <AnnouncementCard key={announcement._id} announcement={announcement} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <p className="text-muted">No announcements at the moment.</p>
              <p className="text-sm text-muted mt-2">Check back soon for updates!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const publishedDate = new Date(announcement.publishedAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/news/${announcement.slug?.current}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border"
    >
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {announcement.pinToTop && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
                  📌 Pinned
                </span>
              )}
              <span className="text-sm text-muted">{publishedDate}</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors font-[family-name:var(--font-playfair)]">
              {announcement.title}
            </h2>
          </div>
          <svg
            className="w-6 h-6 text-muted group-hover:text-primary transition-colors flex-shrink-0 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

