import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Admin redirect
      {
        source: '/admin',
        destination: 'https://westfield-pto.sanity.studio',
        permanent: true,
      },
      // Legacy .html redirects (from old westfieldpto.com site)
      {
        source: '/events.html',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/documents.html',
        destination: '/resources/documents',
        permanent: true,
      },
      {
        source: '/about-us.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/committeechairs.html',
        destination: '/about/committees',
        permanent: true,
      },
      {
        source: '/pto-meetings.html',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/ongoing-fundraisers.html',
        destination: '/resources/fundraisers',
        permanent: true,
      },
      {
        source: '/other-projects.html',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/bylaws-stadndingrules.html',
        destination: '/about/bylaws',
        permanent: true,
      },
      {
        source: '/standing-rules.html',
        destination: '/about/bylaws',
        permanent: true,
      },
      {
        source: '/staff-page.html',
        destination: '/resources/forms',
        permanent: true,
      },
      {
        source: '/budgets.html',
        destination: '/resources/budgets',
        permanent: true,
      },
      {
        source: '/links-for-parents.html',
        destination: '/resources/links',
        permanent: true,
      },
      {
        source: '/contact-us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/sitemap.html',
        destination: '/sitemap.xml',
        permanent: true,
      },
      // Handle index.html
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
