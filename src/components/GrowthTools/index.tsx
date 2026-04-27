import Image from "next/image";
import Link from "next/link";

/**
 * GrowthTools — Dark section "Reach more people with tools built for growth".
 *
 * Layout:
 *   - Section background rgb(30,30,30), 100px top / 50px bottom padding.
 *   - Decorative SVG grid background absolutely positioned behind content.
 *   - Two-line heading: line 1 Instrument Serif italic 80px, line 2 Hind Madurai 600 48px.
 *   - Subtext (Hind Madurai 400 20px) below heading.
 *   - 3 white cards in a row at >= 1024px (each 334x500), border-radius 20px.
 *   - At <= 768px cards stack vertically full-width with image on top.
 *
 * Each card:
 *   - 294x294 (or wider) image with border-radius 16px, object-fit:cover.
 *   - Card title (30px / 700) + body (16px / 500) text-stack.
 *   - CTA link at the bottom: blue text + 24x24 right-arrow icon.
 */

const HIND_FONT =
  'var(--font-hind-madurai), "Hind Madurai", "Hind Madurai Placeholder", sans-serif';
const SERIF_FONT =
  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif';

type Card = {
  title: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

const CARDS: Card[] = [
  {
    title: "AutoDM",
    body: "Attract quality leads, drive more sales, and reply to conversations with Instagram DM Automation.",
    ctaText: "Set up AutoDM",
    ctaHref:
      "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=AutoDM+Section",
    imageSrc: "/GrowthTools/images/autodm.png",
    imageAlt: "AutoDM Instagram automation preview",
    imageWidth: 1867,
    imageHeight: 1867,
  },
  {
    title: "Link-in-bio store",
    body: "Your storefront as a creator to showcase links, products, socials, and more. The only link-in-bio site you need!",
    ctaText: "Set up your Store",
    ctaHref:
      "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=Store+Section",
    imageSrc: "/GrowthTools/images/link-in-bio.png",
    imageAlt: "Link-in-bio store preview",
    imageWidth: 2042,
    imageHeight: 1316,
  },
  {
    title: "Lead Magnets",
    body: "Offer giveaways or build forms to generate leads while capturing crucial information about your audience.",
    ctaText: "Launch Lead Magnet",
    ctaHref:
      "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=LeadMagnet+Section",
    imageSrc: "/GrowthTools/images/lead-magnets.png",
    imageAlt: "Lead Magnets form preview",
    imageWidth: 1867,
    imageHeight: 1867,
  },
];

// --- Inline SVGs ----------------------------------------------------------

function CtaArrowIcon() {
  // 24x24 right-arrow icon used in each card CTA.
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      className="block shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackgroundGrid() {
  // Decorative grid background — radial gradient strokes that fade from
  // white at the centre to dark at the edges. Sits absolutely behind content.
  return (
    <svg
      viewBox="0 0 1660 572"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-90"
    >
      <defs>
        <radialGradient
          id="growth-tools-grid-gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(830 286) rotate(0) scale(900 900)"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="0.7" stopColor="#070A14" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Vertical lines every ~38.47px */}
      {Array.from({ length: 44 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 38.47}
          y1="0"
          x2={i * 38.47}
          y2="572"
          stroke="url(#growth-tools-grid-gradient)"
          strokeOpacity="0.2"
          strokeWidth="1.45938"
        />
      ))}
      {/* Horizontal lines every ~47.67px */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 47.67}
          x2="1660"
          y2={i * 47.67}
          stroke="url(#growth-tools-grid-gradient)"
          strokeOpacity="0.2"
          strokeWidth="1.45938"
        />
      ))}
    </svg>
  );
}

// --- Component ------------------------------------------------------------

export default function GrowthTools() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--growth-tools-bg)] px-[24px] pb-[50px] pt-[64px] md:px-[48px] md:pt-[100px]">
      {/* Decorative background grid */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <BackgroundGrid />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1340px] flex-col items-center gap-[42px]">
        {/* Heading block */}
        <div className="flex w-full max-w-[720px] flex-col items-center gap-[16px]">
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
                color: "var(--growth-tools-heading)",
              }}
            >
              Reach more people
            </span>
            <span
              className="block"
              style={{
                fontFamily: HIND_FONT,
                fontWeight: 600,
                fontSize: "clamp(28px, 5vw, 48px)",
                lineHeight: "1.3",
                letterSpacing: "-0.04em",
                color: "var(--growth-tools-heading)",
              }}
            >
              with tools built for growth
            </span>
          </h2>

          <p
            className="m-0 max-w-[520px] text-center"
            style={{
              fontFamily: HIND_FONT,
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "1.3",
              color: "var(--growth-tools-subtext)",
            }}
          >
            Everything you&rsquo;ll need to reach your audience and turn
            subscribers into customers
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full flex-col gap-[24px] md:flex-row md:flex-wrap md:justify-center">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex w-full flex-col gap-[20px] rounded-[20px] bg-[var(--growth-tools-card-bg)] p-[20px] pt-[24px] md:w-[334px] md:flex-shrink-0"
            >
              {/* Card image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-[var(--growth-tools-card-image-bg)]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  sizes="(max-width: 768px) 100vw, 294px"
                  className="block h-full w-full"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              {/* Card title */}
              <h3
                className="m-0"
                style={{
                  fontFamily: HIND_FONT,
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "var(--growth-tools-card-title)",
                }}
              >
                {card.title}
              </h3>

              {/* Card body */}
              <p
                className="m-0 flex-1"
                style={{
                  fontFamily: HIND_FONT,
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.4px",
                  color: "var(--growth-tools-card-body)",
                }}
              >
                {card.body}
              </p>

              {/* CTA link */}
              <Link
                href={card.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-[4px] no-underline transition-opacity duration-150 hover:opacity-80"
                style={{
                  fontFamily: HIND_FONT,
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "25.2px",
                  color: "var(--growth-tools-cta)",
                }}
              >
                <span className="group-hover:underline">{card.ctaText}</span>
                <CtaArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
