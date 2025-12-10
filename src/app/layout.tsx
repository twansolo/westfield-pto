import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://westfieldpto.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Westfield Elementary PTO | Building Tomorrow's Leaders Today",
    template: "%s | Westfield Elementary PTO",
  },
  description:
    "Westfield Elementary PTO in Robins, Iowa partners with families and educators to support students through events, fundraisers, and community building.",
  keywords: ["Westfield Elementary", "PTO", "Robins Iowa", "Linn-Mar", "parent teacher organization", "school volunteer"],
  openGraph: {
    title: "Westfield Elementary PTO",
    description: "Supporting Westfield Elementary students and families in Robins, Iowa through events, fundraisers, and community building.",
    type: "website",
    locale: "en_US",
    siteName: "Westfield Elementary PTO",
    url: siteUrl,
    images: [
      {
        url: "/WF_School_Picture_22.jpg",
        width: 1200,
        height: 630,
        alt: "Westfield Elementary School students and staff gathered in front of the school building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westfield Elementary PTO",
    description: "Supporting Westfield Elementary students and families in Robins, Iowa through events, fundraisers, and community building.",
    images: ["/WF_School_Picture_22.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q68B6RJL7L"
          strategy="beforeInteractive"
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q68B6RJL7L');
            `,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased font-[family-name:var(--font-source-sans)]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Mailchimp - placed before closing body tag */}
        <Script
          id="mcjs"
          strategy="beforeInteractive"
          src="https://chimpstatic.com/mcjs-connected/js/users/ed104c15e663a6829fb6ed0c0/f0e9ec84c00093fa4332c4f86.js"
        />
      </body>
    </html>
  );
}
