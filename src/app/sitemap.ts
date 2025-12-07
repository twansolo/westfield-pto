import { MetadataRoute } from 'next'
import { client } from '@/sanity'
import { groq } from 'next-sanity'

const baseUrl = 'https://westfieldpto.com'

// Fetch all events with slugs
async function getEvents() {
  return client.fetch<{ slug: string; _updatedAt: string }[]>(
    groq`*[_type == "event" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }`
  )
}

// Fetch all announcements/news with slugs
async function getAnnouncements() {
  return client.fetch<{ slug: string; _updatedAt: string }[]>(
    groq`*[_type == "announcement" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }`
  )
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content
  const [events, announcements] = await Promise.all([
    getEvents(),
    getAnnouncements(),
  ])

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/committees`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/bylaws`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/start-here`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/volunteer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/documents`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/forms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/budgets`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/links`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/fundraisers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic event pages
  const eventPages: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  // Dynamic news/announcement pages
  const newsPages: MetadataRoute.Sitemap = announcements.map((announcement) => ({
    url: `${baseUrl}/news/${announcement.slug}`,
    lastModified: new Date(announcement._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticPages, ...eventPages, ...newsPages]
}

