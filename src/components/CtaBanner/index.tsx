"use client";

/**
 * CtaBanner — Final call-to-action section before the footer.
 *
 * Layout (white background, centered, 60px vertical padding on desktop):
 *   - H1 "Try SuperProfile today" (Hind Madurai, 80px, weight 700, color black)
 *   - H2 "Free to start . No commitments." (Hind Madurai, 24px, weight 500, grey)
 *   - "Start for Free" CTA button (black pill with rolling-text hover animation)
 *
 * Interactions:
 *   - On hover/focus of the CTA button, each letter span translates Y by -24px.
 *     A duplicate row of text rendered via text-shadow at 0 24px scrolls in
 *     from below, producing a tumbling/rolling letter effect.
 *
 * Source: Framer site (.framer-sohn8i). Animation is JS-driven via CSS
 *         transforms on individual letter spans; we re-implement it with
 *         pure CSS so it runs without JavaScript.
 */

const CTA_HREF =
  "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=Footer";
const CTA_TEXT = "Start for Free";

const RollingText = ({ text }: { text: string }) => (
  <p className="cta-banner-rolling-text font-hind text-[20px] font-medium leading-[1.2em]">
    {text.split("").map((char, idx) => (
      <span key={idx}>{char === " " ? " " : char}</span>
    ))}
  </p>
);

export default function CtaBanner() {
  return (
    <header className="w-full bg-[var(--cta-banner-bg)] px-[20px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[20px] text-center">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="m-0 font-hind text-[40px] font-bold leading-[1em] tracking-[0em] text-[var(--cta-banner-heading)] sm:text-[56px] md:text-[72px] lg:text-[80px]">
            Try SuperProfile today
          </h1>
          <h2 className="m-0 font-hind text-[18px] font-medium leading-[1.5em] tracking-[-0.5px] text-[var(--cta-banner-subheading)] sm:text-[20px] md:text-[24px]">
            Free to start . No commitments.
          </h2>
        </div>

        <a
          href={CTA_HREF}
          rel="noopener"
          aria-label={CTA_TEXT}
          className="cta-banner-button inline-flex items-center justify-center rounded-[48px] bg-[var(--cta-banner-button-bg)] px-[18px] py-[10px] text-[var(--cta-banner-button-text)] no-underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-banner-button-bg)] focus-visible:ring-offset-2"
        >
          <span className="flex h-full w-full items-center justify-center overflow-hidden">
            <RollingText text={CTA_TEXT} />
          </span>
        </a>
      </div>
    </header>
  );
}
