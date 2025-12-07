import Link from "next/link";
import { notFound } from "next/navigation";
import { client, announcementBySlugQuery } from "@/sanity";
import type { Announcement } from "@/sanity";
import { PortableText } from "@/components/PortableText";
import type { Metadata } from "next";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getAnnouncement(slug: string) {
  return client.fetch<Announcement>(announcementBySlugQuery, { slug });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const announcement = await getAnnouncement(slug);
  
  if (!announcement) {
    return { title: "Announcement Not Found | Westfield PTO" };
  }

  return {
    title: `${announcement.title} | Westfield PTO`,
    description: `News and announcement: ${announcement.title}`,
  };
}

export default async function AnnouncementPage({ params }: PageProps) {
  const { slug } = await params;
  const announcement = await getAnnouncement(slug);

  if (!announcement) {
    notFound();
  }

  const publishedDate = new Date(announcement.publishedAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {announcement.pinToTop && (
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-full">
                📌 Pinned
              </span>
            )}
            <span className="text-white/80">{publishedDate}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)]">
            {announcement.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-10">
            {announcement.body && announcement.body.length > 0 ? (
              <div className="prose max-w-none">
                <PortableText value={announcement.body} />
              </div>
            ) : (
              <p className="text-muted">No content available for this announcement.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

