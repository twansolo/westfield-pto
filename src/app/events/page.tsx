import Link from "next/link";
import { client, eventsQuery } from "@/sanity";
import type { Event } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Calendar",
  description: "View upcoming Westfield Elementary PTO events, meetings, and activities. Stay connected with our school community calendar.",
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

      {/* Google Calendar Embed */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
              PTO <span className="text-primary">Calendar</span>
            </h2>
            <p className="mt-2 text-muted">
              View all PTO events on our Google Calendar
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4 border border-border overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=westfieldpto%40gmail.com&ctz=America%2FChicago&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
              style={{ border: 0 }}
              width="100%"
              height="600"
              className="rounded-xl"
              title="Westfield PTO Google Calendar"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=d2VzdGZpZWxkcHRvQGdtYWlsLmNvbQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
              Add to Google Calendar
            </a>
            <a
              href="https://calendar.google.com/calendar/ical/westfieldpto%40gmail.com/public/basic.ics"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download iCal (.ics)
            </a>
          </div>
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
              <p className="text-sm text-muted mt-2">Check the calendar above or check back soon for new events!</p>
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
