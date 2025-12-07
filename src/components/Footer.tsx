"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const quickLinks = [
  { name: "Events Calendar", href: "/events" },
  { name: "News & Announcements", href: "/news" },
  { name: "Board Members", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { name: "Meeting Minutes", href: "/resources/documents" },
  { name: "Bylaws", href: "/about/bylaws" },
  { name: "Forms", href: "/resources/forms" },
  { name: "Budgets", href: "/resources/budgets" },
];

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-lm-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              {!logoError ? (
                <Image
                  src="/logo.png"
                  alt="Linn-Mar Westfield Elementary PTO"
                  width={50}
                  height={50}
                  className="h-12 w-auto brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black">
                    <span className="text-primary">L</span>
                    <span className="text-white">M</span>
                    <span className="text-primary">.</span>
                  </span>
                </div>
              )}
              <div>
                <span className="text-lg font-bold text-white leading-tight block">
                  Westfield
                </span>
                <span className="text-sm font-semibold text-primary leading-tight">
                  Elementary PTO
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Building tomorrow&apos;s leaders today through community partnership
              and educational excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <a
                  href="mailto:westfieldpto@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  westfieldpto@gmail.com
                </a>
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Linn-Mar Westfield Elementary PTO. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Part of the <span className="text-primary font-semibold">Linn-Mar</span> Community School District
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
