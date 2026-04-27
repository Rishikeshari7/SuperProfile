"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * MonetizationTools — White section "Drive more revenue with tools for monetization".
 *
 * Layout:
 *   - Heading block: "Drive more revenue" (Instrument Serif italic 80px) + "with tools
 *     for monetization" (Hind Madurai 600 48px) — both lines centered.
 *   - Tab navigation: 5 horizontally spaced labels (Digital Products / Community /
 *     Courses / Events / 1:1 Coaching). Active tab = 24px bold black, inactive = 22px
 *     gray. Click switches the active tab. Inactive labels show no hover style.
 *   - Tab panel carousel: 5 colored cards stacked horizontally, each border-radius 20px.
 *     Active card opacity 1, inactive opacity 0.2. The whole stack translates so the
 *     active card is centered. Each card: text/CTA on left half, image / phone mockup
 *     on right half.
 *
 * Interactions:
 *   - Click tab → activeTab state updates → translate the carousel rail.
 *   - Hover Digital Products' "Try it Free" CTA → button tilts ~-4deg + 6 sparkle
 *     stars fade in around it (other tabs use a plain outline pill, no animation).
 *   - Respects prefers-reduced-motion.
 *
 * Responsiveness:
 *   - 1440 / 1024: cards displayed in a horizontal carousel with neighbouring cards
 *     peeking in.
 *   - <= 768: single card visible at a time, full-width.
 */

const HIND_FONT =
  'var(--font-hind-madurai), "Hind Madurai", "Hind Madurai Placeholder", sans-serif';
const SERIF_FONT =
  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif';

type CtaStyle = "white-pill-with-border" | "outline-pill";

type Tab = {
  id: string;
  label: string;
  cardBg: string;
  headingColor: string;
  bodyColor: string;
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  ctaStyle: CtaStyle;
};

const TAB_HREF =
  "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=Monetize+Section";

const TABS: Tab[] = [
  {
    id: "digital-products",
    label: "Digital Products",
    cardBg: "var(--monetize-card-digital-bg)",
    headingColor: "var(--monetize-card-digital-heading)",
    bodyColor: "var(--monetize-card-digital-body)",
    heading: "Sell Digital Products with ease",
    body: "Upload a PDF, a Video, a MP3 or any other digital file and set a price - a great looking high-converting landing page is ready for you to start selling.",
    ctaText: "Try it Free",
    ctaHref: TAB_HREF,
    ctaStyle: "white-pill-with-border",
  },
  {
    id: "community",
    label: "Community",
    cardBg: "var(--monetize-card-community-bg)",
    headingColor: "var(--monetize-card-community-heading)",
    bodyColor: "var(--monetize-card-community-body)",
    heading: "Launch your Community Business",
    body: "Create and launch paid subscription based business on Telegram and Discord via SuperProfile in less than 10 minutes.",
    ctaText: "Try it Free",
    ctaHref: TAB_HREF,
    ctaStyle: "outline-pill",
  },
  {
    id: "courses",
    label: "Courses",
    cardBg: "var(--monetize-card-courses-bg)",
    headingColor: "var(--monetize-card-courses-heading)",
    bodyColor: "var(--monetize-card-courses-body)",
    heading: "Build and launch your courses",
    body: "Everything you need to launch a course and go from 0 to 100,000 students. Offer a end-to-end course experience that looks and works great.",
    ctaText: "Try it Free",
    ctaHref: TAB_HREF,
    ctaStyle: "outline-pill",
  },
  {
    id: "events",
    label: "Events",
    cardBg: "var(--monetize-card-events-bg)",
    headingColor: "var(--monetize-card-events-heading)",
    bodyColor: "var(--monetize-card-events-body)",
    heading: "Host Events & Webinars",
    body: "Manage ticketing, payments, registrations, and communication with ease - for both online and offline events.",
    ctaText: "Try it Free",
    ctaHref: TAB_HREF,
    ctaStyle: "outline-pill",
  },
  {
    id: "coaching",
    label: "1:1 Coaching",
    cardBg: "var(--monetize-card-coaching-bg)",
    headingColor: "var(--monetize-card-coaching-heading)",
    bodyColor: "var(--monetize-card-coaching-body)",
    heading: "Offer 1-on-1 coaching sessions",
    body: "Streamline your availability, scheduling, communication, and payments. You get to focus on delivering expertise, while we handle the rest.",
    ctaText: "Try it Free",
    ctaHref: TAB_HREF,
    ctaStyle: "outline-pill",
  },
];

// --- Inline SVGs ----------------------------------------------------------

function SparkleStar({
  size,
  className,
  style,
}: {
  size: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"
        fill="rgb(5, 5, 5)"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block shrink-0"
    >
      <path
        d="M2.25 5.25024C2.25 4.85242 2.40804 4.47089 2.68934 4.18958C2.97064 3.90828 3.35218 3.75024 3.75 3.75024H14.25C14.6478 3.75024 15.0294 3.90828 15.3107 4.18958C15.592 4.47089 15.75 4.85242 15.75 5.25024V12.7502C15.75 13.1481 15.592 13.5296 15.3107 13.8109C15.0294 14.0922 14.6478 14.2502 14.25 14.2502H3.75C3.35218 14.2502 2.97064 14.0922 2.68934 13.8109C2.40804 13.5296 2.25 13.1481 2.25 12.7502V5.25024Z"
        stroke="#7F6F79"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 5.24976L9 9.74976L15.75 5.24976"
        stroke="#7F6F79"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// --- Sparkle stars cluster (Digital Products CTA hover) ------------------

const STAR_POSITIONS: Array<{
  size: number;
  top: string;
  left: string;
}> = [
  { size: 16, top: "-22px", left: "8px" },
  { size: 10, top: "-12px", left: "-18px" },
  { size: 6, top: "10px", left: "-26px" },
  { size: 14, top: "8px", left: "calc(100% + 12px)" },
  { size: 6, top: "-18px", left: "calc(100% - 24px)" },
  { size: 10, top: "calc(100% + 4px)", left: "30px" },
];

function CtaButton({ tab }: { tab: Tab }) {
  if (tab.ctaStyle === "white-pill-with-border") {
    return (
      <Link
        href={tab.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="monetize-cta-tilt relative inline-flex items-center justify-center"
        style={{
          backgroundColor: "var(--monetize-cta-white-bg)",
          color: "var(--monetize-cta-white-text)",
          border: "1px solid var(--monetize-cta-white-border)",
          borderRadius: "395px",
          padding: "10px 24px",
          fontFamily: HIND_FONT,
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <span className="monetize-cta-stars absolute inset-0 pointer-events-none">
          {STAR_POSITIONS.map((s, i) => (
            <SparkleStar
              key={i}
              size={s.size}
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
              }}
            />
          ))}
        </span>
        <span className="relative">{tab.ctaText}</span>
      </Link>
    );
  }

  // outline-pill (Community / Courses / Events / 1:1 Coaching)
  return (
    <Link
      href={tab.ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
      style={{
        color: "var(--monetize-cta-outline-text)",
        border: "1px solid var(--monetize-cta-outline-border)",
        borderRadius: "48px",
        padding: "10px 24px",
        fontFamily: HIND_FONT,
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        textDecoration: "none",
        width: "fit-content",
        backgroundColor: "transparent",
      }}
    >
      {tab.ctaText}
    </Link>
  );
}

// --- Right-side visuals per tab ------------------------------------------

function DigitalProductsVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ borderRadius: "16px" }}
    >
      <Image
        src="/MonetizationTools/images/digital-products.png"
        alt="Digital products dashboard preview"
        width={1040}
        height={786}
        sizes="(max-width: 768px) 90vw, 520px"
        className="h-full w-full"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}

function CommunityVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Image
        src="/MonetizationTools/images/community.png"
        alt="Community subscription business dashboard"
        width={2080}
        height={1572}
        sizes="(max-width: 768px) 90vw, 520px"
        className="h-full w-full"
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </div>
  );
}

function CoursesVisual() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--monetize-card-courses-inset-bg)",
        borderRadius: "16px",
      }}
    >
      <div className="relative">
        <Image
          src="/MonetizationTools/images/courses-phone-shell.png"
          alt="Phone mockup shell"
          width={232}
          height={464}
          sizes="232px"
          className="block"
          style={{ objectFit: "contain" }}
        />
        {/* Course thumbnail card overlay */}
        <div
          className="absolute"
          style={{
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "190px",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "12px",
            padding: "8px",
            boxShadow: "rgba(0, 0, 0, 0.13) 0px 4px 20px 0px",
          }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: "8px",
              aspectRatio: "190 / 118",
              border: "3px solid #ffffff",
            }}
          >
            <Image
              src="/MonetizationTools/images/courses-content.jpg"
              alt="Course content thumbnail"
              fill
              sizes="190px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Students badge */}
        <div
          className="absolute"
          style={{
            top: "82%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "9999px",
            padding: "8px 16px",
            boxShadow: "rgba(0, 0, 0, 0.13) 0px 4px 20px 0px",
            fontFamily: HIND_FONT,
            fontWeight: 600,
            fontSize: "14px",
            color: "rgb(15, 15, 15)",
            whiteSpace: "nowrap",
          }}
        >
          3,982 students
        </div>
      </div>
    </div>
  );
}

function EventsVisual() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--monetize-card-events-inset-bg)",
        borderRadius: "16px",
      }}
    >
      {/* Decorative stripes (4 horizontal stripes across the panel) */}
      <div className="pointer-events-none absolute inset-0">
        {[20, 38, 56, 74].map((topPct) => (
          <div
            key={topPct}
            className="absolute left-0 right-0"
            style={{
              top: `${topPct}%`,
              height: "1px",
              backgroundColor: "var(--monetize-card-events-stripe)",
            }}
          />
        ))}
      </div>

      {/* Phone mockup */}
      <div
        className="relative"
        style={{ width: "236px", height: "468px" }}
      >
        {/* Outer device border (gray) */}
        <svg
          width="236"
          height="468"
          viewBox="-2 -2 236 468"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="absolute inset-0"
        >
          <path
            d="M197.324 0.00292969C216.242 0.00292969 231.578 15.3389 231.578 34.2568V428.906C231.578 447.824 216.242 463.16 197.324 463.16H35.219C16.3012 463.16 0.965326 447.824 0.965088 428.906V34.2568C0.965322 15.339 16.3012 0.00316406 35.219 0.00292969H197.324Z"
            fill="#A8A8A8"
          />
        </svg>
        {/* Inner screen border */}
        <svg
          width="224"
          height="457"
          viewBox="0 0 224 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="absolute"
          style={{ top: "3px", left: "6px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M223.72 31.7392C223.72 14.6862 209.895 0.862061 192.842 0.862061H31.7023C14.6494 0.862061 0.825195 14.6862 0.825195 31.7392V425.423C0.825195 442.476 14.6494 456.3 31.7023 456.3H192.842C209.895 456.3 223.72 442.476 223.72 425.423V31.7392ZM67.829 12.441C61.4341 12.441 59.1363 12.441 56.79 12.441L31.7023 12.441C21.0442 12.441 12.4041 21.0811 12.4041 31.7392V425.423C12.4041 436.081 21.0442 444.721 31.7023 444.721H192.842C203.501 444.721 212.141 436.081 212.141 425.423V31.7392C212.141 21.0811 203.501 12.441 192.842 12.441H167.755C162.99 12.441 162.571 12.441 156.176 12.441H67.829Z"
            fill="#1F1F1F"
          />
        </svg>
        {/* App screenshot inside phone */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: "16px",
            left: "18px",
            width: "200px",
            height: "432px",
            borderRadius: "20px",
          }}
        >
          <Image
            src="/MonetizationTools/images/events-screen.png"
            alt="Events app screen"
            width={199}
            height={433}
            sizes="200px"
            className="h-full w-full"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>

      {/* "Email attendees" notification badge - top-right */}
      <div
        className="absolute flex items-center gap-[6px]"
        style={{
          top: "12%",
          right: "8%",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "9999px",
          padding: "8px 14px",
          boxShadow: "rgba(0, 0, 0, 0.13) 0px 4px 20px 0px",
          fontFamily: HIND_FONT,
          fontWeight: 500,
          fontSize: "13px",
          color: "var(--monetize-card-events-notif-text)",
          whiteSpace: "nowrap",
        }}
      >
        <EmailIcon />
        <span>Email attendees</span>
      </div>

      {/* "Total Registrations: 853" stats card - bottom-left */}
      <div
        className="absolute"
        style={{
          bottom: "10%",
          left: "6%",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "12px",
          padding: "12px 16px",
          boxShadow: "rgba(0, 0, 0, 0.13) 0px 4px 20px 0px",
          fontFamily: HIND_FONT,
        }}
      >
        <div
          style={{
            fontWeight: 500,
            fontSize: "12px",
            color: "rgb(102, 102, 102)",
            lineHeight: "1.2",
          }}
        >
          Total Registrations
        </div>
        <div
          style={{
            fontFamily: SERIF_FONT,
            fontStyle: "italic",
            fontSize: "46px",
            lineHeight: "1.05",
            color: "var(--monetize-card-events-stat-value)",
          }}
        >
          853
        </div>
      </div>
    </div>
  );
}

function CoachingVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Image
        src="/MonetizationTools/images/coaching.png"
        alt="Coaching session dashboard"
        width={2080}
        height={1572}
        sizes="(max-width: 768px) 90vw, 520px"
        className="h-full w-full"
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </div>
  );
}

function TabVisual({ tabId }: { tabId: string }) {
  switch (tabId) {
    case "digital-products":
      return <DigitalProductsVisual />;
    case "community":
      return <CommunityVisual />;
    case "courses":
      return <CoursesVisual />;
    case "events":
      return <EventsVisual />;
    case "coaching":
      return <CoachingVisual />;
    default:
      return null;
  }
}

// --- Component ------------------------------------------------------------

export default function MonetizationTools() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);

  return (
    <section
      className="relative w-full overflow-hidden px-[24px] pb-[80px] pt-[80px] md:px-[48px] md:pt-[100px]"
      style={{ backgroundColor: "var(--monetize-bg)" }}
    >
      <div className="relative mx-auto flex w-full max-w-[1340px] flex-col items-center gap-[42px]">
        {/* Heading block */}
        <div className="flex w-full flex-col items-center gap-[8px]">
          <h2 className="m-0 flex flex-col items-center text-center">
            <span
              className="block"
              style={{
                fontFamily: SERIF_FONT,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(48px, 8vw, 80px)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
                color: "var(--monetize-heading)",
              }}
            >
              Drive more revenue
            </span>
            <span
              className="block"
              style={{
                fontFamily: HIND_FONT,
                fontWeight: 600,
                fontSize: "clamp(28px, 5vw, 48px)",
                lineHeight: "1.3",
                letterSpacing: "-0.04em",
                color: "var(--monetize-heading)",
              }}
            >
              with tools for monetization
            </span>
          </h2>
        </div>

        {/* Tab navigation */}
        <div
          role="tablist"
          aria-label="Monetization tools"
          className="flex w-full max-w-full flex-wrap items-center justify-center gap-x-[24px] gap-y-[12px] md:gap-x-[42px]"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`monetize-panel-${tab.id}`}
                id={`monetize-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="cursor-pointer border-0 bg-transparent p-0 transition-colors duration-200"
                style={{
                  fontFamily: HIND_FONT,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: isActive ? "24px" : "22px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.02em",
                  color: isActive
                    ? "var(--monetize-tab-active)"
                    : "var(--monetize-tab-inactive)",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab panel carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-full flex-col gap-[24px] md:hidden">
            {/* Mobile: stack the active panel only */}
            {TABS.filter((t) => t.id === activeTab).map((tab) => (
              <article
                key={tab.id}
                role="tabpanel"
                id={`monetize-panel-${tab.id}`}
                aria-labelledby={`monetize-tab-${tab.id}`}
                className="monetize-panel flex w-full flex-col overflow-hidden"
                style={{
                  backgroundColor: tab.cardBg,
                  borderRadius: "20px",
                  minHeight: "560px",
                }}
              >
                {/* Text + CTA */}
                <div className="flex flex-col gap-[16px] p-[28px]">
                  <h3
                    className="m-0"
                    style={{
                      fontFamily: HIND_FONT,
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "1.15",
                      letterSpacing: "-0.04em",
                      color: tab.headingColor,
                    }}
                  >
                    {tab.heading}
                  </h3>
                  <p
                    className="m-0"
                    style={{
                      fontFamily: HIND_FONT,
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.4",
                      color: tab.bodyColor,
                    }}
                  >
                    {tab.body}
                  </p>
                  <CtaButton tab={tab} />
                </div>
                {/* Visual */}
                <div className="relative w-full px-[16px] pb-[16px]">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "520 / 393" }}
                  >
                    <TabVisual tabId={tab.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop / tablet carousel — all panels stacked horizontally */}
          <div className="relative hidden w-full md:block">
            <div
              className="relative flex w-full"
              style={{ minHeight: "440px" }}
            >
              {TABS.map((tab, idx) => {
                const activeIndex = TABS.findIndex((t) => t.id === activeTab);
                const offset = idx - activeIndex;
                const isActive = idx === activeIndex;
                return (
                  <article
                    key={tab.id}
                    role="tabpanel"
                    id={`monetize-panel-${tab.id}`}
                    aria-labelledby={`monetize-tab-${tab.id}`}
                    aria-hidden={!isActive}
                    className="monetize-panel absolute top-1/2 left-1/2 grid w-[min(1100px,90vw)] grid-cols-2 items-stretch gap-[24px] overflow-hidden p-[40px]"
                    style={{
                      backgroundColor: tab.cardBg,
                      borderRadius: "20px",
                      transform: `translate(calc(-50% + ${offset * 105}%), -50%)`,
                      opacity: isActive ? 1 : 0.2,
                      pointerEvents: isActive ? "auto" : "none",
                      minHeight: "440px",
                    }}
                  >
                    {/* Text + CTA */}
                    <div className="flex flex-col justify-center gap-[20px] p-[12px]">
                      <h3
                        className="m-0"
                        style={{
                          fontFamily: HIND_FONT,
                          fontWeight: 600,
                          fontSize: "clamp(32px, 4vw, 48px)",
                          lineHeight: "1.15",
                          letterSpacing: "-0.04em",
                          color: tab.headingColor,
                        }}
                      >
                        {tab.heading}
                      </h3>
                      <p
                        className="m-0 max-w-[440px]"
                        style={{
                          fontFamily: HIND_FONT,
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "1.4",
                          color: tab.bodyColor,
                        }}
                      >
                        {tab.body}
                      </p>
                      <div className="mt-[8px]">
                        <CtaButton tab={tab} />
                      </div>
                    </div>
                    {/* Visual */}
                    <div className="relative h-full w-full">
                      <TabVisual tabId={tab.id} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
