import Link from "next/link";
import { client, eventsQuery } from "@/sanity";
import type { Event } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Westfield PTO",
  description: "View upcoming events and activities organized by the Westfield PTO.",
};

export const revalidate = 60;

async function getEvents() {
  return client.fetch<Event[]>(eventsQuery);
}

export default async function EventsPage() {
  const events = await getEvents();
  
  const now = new Date();
  const upcomingEvents = events.filter((e) => new Date(e.date) >= now);
  const pastEvents = events.filter((e) => new Date(e.date) < now).reverse();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Calendar of Events
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Join us at our upcoming events and activities. We look forward to seeing you there!
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-8">
            Upcoming Events
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <p className="text-muted">No upcoming events at the moment.</p>
              <p className="text-sm text-muted mt-2">Check back soon for new events!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-8">
              Past Events
            </h2>
            <div className="space-y-4 opacity-75">
              {pastEvents.slice(0, 10).map((event) => (
                <EventCard key={event._id} event={event} isPast />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function EventCard({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString("en-US", { month: "short" });
  const day = eventDate.getDate();
  const time = eventDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const fullDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/events/${event.slug?.current}`}
      className={`group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border ${
        isPast ? "opacity-60 hover:opacity-80" : ""
      }`}
    >
      <div className="flex">
        {/* Date badge */}
        <div className={`flex-shrink-0 w-24 ${isPast ? "bg-gray-400" : "bg-primary"} text-white flex flex-col items-center justify-center py-6`}>
          <span className="text-sm font-medium uppercase">{month}</span>
          <span className="text-3xl font-bold">{day}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {time}
                </span>
                {event.location && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                )}
              </div>
              {event.summary && (
                <p className="mt-3 text-muted line-clamp-2">{event.summary}</p>
              )}
              <p className="mt-2 text-xs text-muted/70">{fullDate}</p>
            </div>
            <svg
              className="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

