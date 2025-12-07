import type { PortableTextBlock, Image } from 'sanity'

export interface SiteSettings {
  schoolName: string
  logo?: Image
  primaryColor?: string
  homeHeroTitle?: string
  homeHeroSubtitle?: string
  homeHeroCtaText?: string
  homeHeroCtaLink?: string
  schoolWebsiteUrl?: string
  googleCalendarUrl?: string
  facebookPageUrl?: string
  contactEmail?: string
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  date: string
  location?: string
  summary?: string
  details?: PortableTextBlock[]
  isFeatured: boolean
}

export interface Announcement {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  body?: PortableTextBlock[]
  pinToTop: boolean
}

export interface BoardMember {
  _id: string
  name: string
  role: string
  email?: string
  photo?: Image
  bio?: string
  sortOrder: number
}

export interface MeetingMinutes {
  _id: string
  title: string
  schoolYear: string
  meetingDate: string
  fileUrl: string
  fileSize?: string
}

