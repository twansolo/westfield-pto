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

export const metadata: Metadata = {
  title: "Linn-Mar Westfield Elementary PTO | Building Tomorrow's Leaders Today",
  description:
    "The Westfield Elementary PTO partners with families and educators to create exceptional learning experiences that inspire, challenge, and prepare our children for a bright future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ed104c15e663a6829fb6ed0c0/f0e9ec84c00093fa4332c4f86.js");`,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased font-[family-name:var(--font-source-sans)]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
