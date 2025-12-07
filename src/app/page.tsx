import Link from "next/link";
import { client } from "@/sanity";
import {
  siteSettingsQuery,
  featuredEventsQuery,
  recentAnnouncementsQuery,
} from "@/sanity";
import type { SiteSettings, Event, Announcement } from "@/sanity";

export const revalidate = 60; // Revalidate every 60 seconds

async function getData() {
  const [settings, events, announcements] = await Promise.all([
    client.fetch<SiteSettings>(siteSettingsQuery),
    client.fetch<Event[]>(featuredEventsQuery),
    client.fetch<Announcement[]>(recentAnnouncementsQuery),
  ]);
  return { settings, events, announcements };
}

export default async function HomePage() {
  const { settings, events, announcements } = await getData();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-playfair)]">
            <span className="text-foreground">Building</span>
            <br />
            <span className="text-foreground">Tomorrow&apos;s</span>
            <br />
            <span className="text-primary">Leaders Today</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {settings?.homeHeroSubtitle ||
              "The Westfield PTO Foundation partners with families and educators to create exceptional learning experiences that inspire, challenge, and prepare our children for a bright future."}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={settings?.homeHeroCtaLink || "/contact"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              {settings?.homeHeroCtaText || "Get Involved"}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Join us at our upcoming events and be part of the Westfield
              community.
            </p>
          </div>

          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-muted">No upcoming events at the moment.</p>
              <p className="text-sm text-muted mt-2">Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Events
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Announcements Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              News & <span className="text-primary">Announcements</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Stay up to date with the latest news from the Westfield PTO.
            </p>
          </div>

          {announcements && announcements.length > 0 ? (
            <div className="space-y-4 max-w-3xl mx-auto">
              {announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement._id}
                  announcement={announcement}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-muted">No announcements at the moment.</p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All News
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)]">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Join our community of parents, teachers, and volunteers working
            together to enhance the educational experience at Westfield.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Meet the Board
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString("en-US", { month: "short" });
  const day = eventDate.getDate();

  return (
    <Link
      href={`/events/${event.slug?.current}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border"
    >
      <div className="flex">
        {/* Date badge */}
        <div className="flex-shrink-0 w-20 bg-primary text-white flex flex-col items-center justify-center py-4">
          <span className="text-sm font-medium uppercase">{month}</span>
          <span className="text-2xl font-bold">{day}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {event.title}
          </h3>
          {event.location && (
            <p className="mt-1 text-sm text-muted flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {event.location}
            </p>
          )}
          {event.summary && (
            <p className="mt-2 text-sm text-muted line-clamp-2">
              {event.summary}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const publishedDate = new Date(announcement.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Link
      href={`/news/${announcement.slug?.current}`}
      className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {announcement.pinToTop && (
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                📌 Pinned
              </span>
            )}
            <span className="text-sm text-muted">{publishedDate}</span>
          </div>
          <h3 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors">
            {announcement.title}
          </h3>
        </div>
        <svg
          className="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
