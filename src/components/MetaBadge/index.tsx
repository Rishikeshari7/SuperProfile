import Image from "next/image";

/**
 * MetaBadge — "certifications" strip below the FeaturedIn logos.
 *
 * Three groups in a single horizontal row at >= 1024px:
 *   1) Meta Verified Tech Provider (SVG badge + "Tech provider" caption + paragraph)
 *   2) Inc42 award badge (square logo + title/description)
 *   3) Forbes 2022 award badge (square logo + title/description)
 *
 * At <= 768px the Meta group sits on top, with Inc42 + Forbes side-by-side
 * on a second row, and the certification text is shortened.
 *
 * NOTE: Phase 1 reported the browser MCP was locked, so the exact Inc42 logo
 * URL and the Meta badge SVG paths could not be captured. We use:
 *   - An inline reconstruction of the Meta Verified Tech Provider badge.
 *   - An inline SVG fallback for the Inc42 logo (orange square + "Inc42" mark).
 *   - The known Forbes asset from framerusercontent.com (already in use by FeaturedIn).
 */

const HIND_FONT =
  'var(--font-hind-madurai), "Hind Madurai", "Hind Madurai Placeholder", sans-serif';

// --- Inline SVGs ----------------------------------------------------------

function MetaVerifiedTechProviderBadge() {
  // Reconstruction of Meta's "Verified Tech Provider" badge.
  // viewBox matches the harvested 0 0 170 34.
  return (
    <svg
      viewBox="0 0 170 34"
      width="170"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Meta Verified Tech Provider"
      className="block h-auto w-full max-w-[170px]"
    >
      {/* Verified check circle */}
      <circle cx="9" cy="17" r="8" fill="#0866FF" />
      <path
        d="M5.5 17.2l2.5 2.5 4.5-5"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Meta wordmark */}
      <text
        x="22"
        y="14"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight={700}
        fill="#0866FF"
        letterSpacing="0.2"
      >
        Meta
      </text>
      {/* Verified Tech Provider line */}
      <text
        x="22"
        y="26"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight={500}
        fill="#1C2B33"
        letterSpacing="0.2"
      >
        Verified Tech Provider
      </text>
    </svg>
  );
}

function Inc42Logo() {
  // Fallback Inc42 mark — orange tile with stylized "i42" + small wordmark.
  // 81x63 to match the harvested container size.
  return (
    <svg
      viewBox="0 0 81 63"
      width="81"
      height="63"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Inc42"
      className="block"
    >
      <rect x="0" y="0" width="81" height="63" rx="6" fill="#F26B27" />
      <text
        x="40.5"
        y="32"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight={800}
        fill="#FFFFFF"
        letterSpacing="0.5"
      >
        i42
      </text>
      <text
        x="40.5"
        y="48"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fontWeight={600}
        fill="#FFFFFF"
        letterSpacing="1.2"
      >
        INC42
      </text>
    </svg>
  );
}

// --- Component ------------------------------------------------------------

export default function MetaBadge() {
  return (
    <section className="w-full bg-[var(--meta-badge-bg)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-[20px] px-[20px] py-[35px] md:flex-row md:gap-[55px] md:py-[35px]">
        {/* GROUP 1 — Meta Verified Tech Provider */}
        <div className="flex items-center gap-[20px] md:max-w-[412px]">
          <div className="flex flex-col items-center justify-center gap-[4px] shrink-0">
            <div className="w-[123px] md:w-[170px]">
              <MetaVerifiedTechProviderBadge />
            </div>
            <p
              className="m-0 text-center"
              style={{
                fontFamily: HIND_FONT,
                fontSize: "12px",
                fontWeight: 400,
                color: "var(--meta-badge-tech-provider-label)",
                lineHeight: "20px",
              }}
            >
              Tech provider
            </p>
          </div>

          {/* Desktop / tablet-1024 wording */}
          <p
            className="m-0 hidden max-w-[220px] md:block"
            style={{
              fontFamily: HIND_FONT,
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--meta-badge-text-secondary)",
              lineHeight: "21px",
            }}
          >
            SuperProfile has been certified by Meta as a Verified Tech Provider.
          </p>

          {/* Mobile / tablet-768 shortened wording */}
          <p
            className="m-0 max-w-[200px] md:hidden"
            style={{
              fontFamily: HIND_FONT,
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--meta-badge-text-secondary)",
              lineHeight: "21px",
            }}
          >
            SuperProfile is a verified Meta Tech Provider.
          </p>
        </div>

        {/* Mobile/tablet awards row wraps Inc42 + Forbes side-by-side */}
        <div className="flex flex-row items-start justify-center gap-[20px] md:contents">
          {/* GROUP 2 — Inc42 */}
          <div className="flex items-start gap-[8px]">
            <div className="relative h-[63px] w-[81px] shrink-0 overflow-hidden rounded-[6px]">
              <Inc42Logo />
            </div>
            <div className="flex max-w-[165px] flex-col">
              <p
                className="m-0"
                style={{
                  fontFamily: HIND_FONT,
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "var(--meta-badge-text-primary)",
                  lineHeight: "21px",
                }}
              >
                Inc42
              </p>
              <p
                className="m-0"
                style={{
                  fontFamily: HIND_FONT,
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--meta-badge-text-secondary)",
                  lineHeight: "21px",
                }}
              >
                Top 30 Start-ups to look out for
              </p>
            </div>
          </div>

          {/* GROUP 3 — Forbes 2022 */}
          <div className="flex items-start gap-[8px]">
            <div className="relative h-[63px] w-[81px] shrink-0 overflow-hidden rounded-[6px] bg-[#FFFFFF]">
              <Image
                src="https://framerusercontent.com/images/yR3NTTBvDlPffPJuGCYmImhnZxk.png?width=306&height=112"
                alt="Forbes 2022"
                width={306}
                height={112}
                sizes="81px"
                className="block h-full w-full"
                style={{ objectFit: "contain", objectPosition: "center" }}
                unoptimized
              />
            </div>
            <div className="flex max-w-[215px] flex-col">
              <p
                className="m-0"
                style={{
                  fontFamily: HIND_FONT,
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "var(--meta-badge-text-primary)",
                  lineHeight: "21px",
                }}
              >
                Forbes 2022
              </p>
              <p
                className="m-0"
                style={{
                  fontFamily: HIND_FONT,
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--meta-badge-text-secondary)",
                  lineHeight: "21px",
                }}
              >
                Top 200 companies with Global Business Potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
