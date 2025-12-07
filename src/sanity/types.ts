import type { PortableTextBlock, Image } from 'sanity'

export interface RecentPurchase {
  description: string
  amount?: number
}

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
  budgetYear?: string
  totalBudget?: number
  spentToDate?: number
  recentPurchases?: RecentPurchase[]
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

export interface CommitteeChair {
  _id: string
  committeeName: string
  chairs: string
  note?: string
  sortOrder: number
}

export interface Fundraiser {
  _id: string
  name: string
  icon: string
  highlight?: string
  description: string
  extraInfo?: string
  link?: string
  linkText?: string
  sortOrder: number
}

export interface PtoForm {
  _id: string
  name: string
  description: string
  category: 'pto' | 'aaa' | 'other'
  fileUrl: string
  fileSize?: string
  fileType?: string
  sortOrder: number
}

export interface BudgetDocument {
  _id: string
  title: string
  schoolYear: string
  documentType: 'approved' | 'yearend' | 'midyear' | 'other'
  fileUrl: string
  fileSize?: string
  sortOrder: number
}

export interface ResourceLink {
  _id: string
  name: string
  description: string
  category: 'quick' | 'school' | 'educational'
  url: string
  isInternal?: boolean
  icon?: string
  isHighlighted?: boolean
  accountNumber?: string
  sortOrder: number
}

