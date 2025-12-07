import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    schoolName,
    logo,
    primaryColor,
    homeHeroTitle,
    homeHeroSubtitle,
    homeHeroCtaText,
    homeHeroCtaLink,
    schoolWebsiteUrl,
    googleCalendarUrl,
    facebookPageUrl,
    contactEmail
  }
`

// Events
export const eventsQuery = groq`
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    slug,
    date,
    location,
    summary,
    details,
    isFeatured
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    slug,
    date,
    location,
    summary,
    isFeatured
  }
`

export const featuredEventsQuery = groq`
  *[_type == "event" && isFeatured == true && date >= now()] | order(date asc) [0...3] {
    _id,
    title,
    slug,
    date,
    location,
    summary
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    location,
    summary,
    details,
    isFeatured
  }
`

// Announcements
export const announcementsQuery = groq`
  *[_type == "announcement"] | order(pinToTop desc, publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    body,
    pinToTop
  }
`

export const recentAnnouncementsQuery = groq`
  *[_type == "announcement"] | order(pinToTop desc, publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    publishedAt,
    pinToTop
  }
`

export const announcementBySlugQuery = groq`
  *[_type == "announcement" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body,
    pinToTop
  }
`

// Board Members
export const boardMembersQuery = groq`
  *[_type == "boardMember"] | order(sortOrder asc) {
    _id,
    name,
    role,
    email,
    photo,
    bio,
    sortOrder
  }
`

// Meeting Minutes
export const meetingMinutesQuery = groq`
  *[_type == "meetingMinutes"] | order(meetingDate desc) {
    _id,
    title,
    schoolYear,
    meetingDate,
    "fileUrl": file.asset->url,
    fileSize
  }
`

export const meetingMinutesByYearQuery = groq`
  *[_type == "meetingMinutes" && schoolYear == $schoolYear] | order(meetingDate desc) {
    _id,
    title,
    schoolYear,
    meetingDate,
    "fileUrl": file.asset->url,
    fileSize
  }
`

// Committee Chairs
export const committeeChairsQuery = groq`
  *[_type == "committeeChair"] | order(sortOrder asc, committeeName asc) {
    _id,
    committeeName,
    chairs,
    note,
    sortOrder
  }
`

// Consumer Fundraisers
export const fundraisersQuery = groq`
  *[_type == "fundraiser" && isActive == true] | order(sortOrder asc) {
    _id,
    name,
    icon,
    highlight,
    description,
    extraInfo,
    link,
    linkText,
    sortOrder
  }
`

// Downloadable Forms
export const ptoFormsQuery = groq`
  *[_type == "ptoForm" && isActive == true] | order(category asc, sortOrder asc) {
    _id,
    name,
    description,
    category,
    "fileUrl": file.asset->url,
    fileSize,
    fileType,
    sortOrder
  }
`

