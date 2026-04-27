"use client";

/**
 * Footer — Bottom of the page.
 *
 * Layout:
 *   - Desktop: nav links (left, horizontal row) + social icons (right, horizontal row),
 *     followed by full-width divider, then copyright text.
 *   - Mobile/Tablet: nav links stack vertically, social icons in a row beneath, then
 *     divider and copyright.
 *
 * Visuals:
 *   - Footer has rounded bottom corners (60px) — matches the source Framer site.
 *   - All nav link wrappers have opacity 0.7 at rest, fade to 1.0 on hover.
 *   - Social icon links have opacity 0.6 at rest, fade to 1.0 on hover.
 *   - Divider is a 1px horizontal rule in a translucent slate color.
 *   - Typography: Hind Madurai, 16px nav links, 14px copyright.
 *
 * Source: Framer site (footer.framer-T7QN5). All transitions use Framer's default
 *         "transition: all" — we approximate with a 200ms ease-out on opacity.
 */

import type { ReactNode } from "react";

type NavLink = {
  text: string;
  href: string;
  rel?: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const NAV_LINKS: NavLink[] = [
  { text: "Pricing", href: "/in/pricing" },
  {
    text: "Terms & Conditions",
    href: "https://superprofile.bio/about/terms-and-conditions.html",
    rel: "noopener",
  },
  {
    text: "Privacy Policy",
    href: "https://superprofile.bio/about/privacy-policy.html",
    rel: "noopener",
  },
  {
    text: "Help",
    href: "https://support.superprofile.bio/",
    rel: "noopener",
  },
  {
    text: "Partner Program",
    href: "https://www.superprofile.bio/partner-program",
    rel: "noopener",
  },
  { text: "Changelog", href: "/in/changelog" },
];

const InstagramIcon = () => (
  <svg
    viewBox="0 0 256 256"
    focusable="false"
    aria-hidden="true"
    className="block h-[24px] w-[24px] flex-shrink-0 fill-[var(--footer-icon)]"
  >
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 256 256"
    focusable="false"
    aria-hidden="true"
    className="block h-[24px] w-[24px] flex-shrink-0 fill-[var(--footer-icon)]"
  >
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 256 256"
    focusable="false"
    aria-hidden="true"
    className="block h-[24px] w-[24px] flex-shrink-0 fill-[var(--footer-icon)]"
  >
    <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
  </svg>
);

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/superprofile.bio/",
    icon: <InstagramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/showcase/superprofile-for-creators/posts/?feedView=all",
    icon: <LinkedInIcon />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@superprofile4creators/featured",
    icon: <YouTubeIcon />,
  },
];

const COPYRIGHT_TEXT =
  "© 2025 SuperProfile by Cosmofeed Technologies Pvt. Ltd. (formerly Stella Shared Spaces Pvt. Ltd.)";

export default function Footer() {
  return (
    <footer
      className="w-full rounded-b-[60px] bg-[var(--footer-bg)] px-[20px] pb-[40px] pt-[40px] md:px-[40px] md:pb-[60px] md:pt-[60px] lg:px-[80px] lg:pt-[80px]"
      aria-label="Site footer"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[32px]">
        {/* Links + Socials row */}
        <div className="flex flex-col items-start justify-between gap-[32px] md:flex-row md:items-center">
          {/* Nav links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col flex-wrap items-start gap-y-[24px] gap-x-[32px] md:flex-row md:items-center"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.text}
                href={link.href}
                rel={link.rel}
                className="footer-nav-link font-hind text-[16px] font-normal leading-[1.5] text-[var(--footer-text)] no-underline"
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex flex-row items-center gap-[16px]">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener"
                className="footer-social-link inline-flex h-[24px] w-[24px] items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          aria-label="Divider line"
          role="separator"
          className="h-[1px] w-full bg-[var(--footer-divider)]"
        />

        {/* Copyright */}
        <div className="flex w-full items-start">
          <p className="m-0 font-hind text-[14px] font-normal leading-[1.6] text-[var(--footer-text)]">
            {COPYRIGHT_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
}
