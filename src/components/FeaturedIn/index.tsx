"use client";

import Image from "next/image";

type LogoItem = {
  name: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  renderedWidth: number;
  renderedHeight: number;
  objectFit: "cover" | "contain" | "fill";
};

const LOGOS: LogoItem[] = [
  {
    name: "TOI",
    alt: "The Times of India",
    src: "https://framerusercontent.com/images/CKKD2ANV0xXtdIWAVYUtTitoPDQ.png?width=1500&height=430",
    width: 1500,
    height: 430,
    renderedWidth: 154,
    renderedHeight: 44,
    objectFit: "cover",
  },
  {
    name: "BW Business World",
    alt: "BW Business World",
    src: "https://framerusercontent.com/images/QiNc6Lfiob0qS1FJSo327LaLYuo.png?width=467&height=59",
    width: 467,
    height: 59,
    renderedWidth: 136,
    renderedHeight: 17,
    objectFit: "contain",
  },
  {
    name: "Techgraph",
    alt: "Techgraph",
    src: "https://framerusercontent.com/images/JchhNOiQkhwlV7KCO3DoFCvAjeU.png?width=460&height=108",
    width: 460,
    height: 108,
    renderedWidth: 129,
    renderedHeight: 30,
    objectFit: "fill",
  },
  {
    name: "Business Today",
    alt: "Business Today",
    src: "https://framerusercontent.com/images/6vnZvIo8p0L11zlllvH7aTE9A.png?width=504&height=156",
    width: 504,
    height: 156,
    renderedWidth: 139,
    renderedHeight: 42,
    objectFit: "fill",
  },
  {
    name: "Business Standard",
    alt: "Business Standard",
    src: "https://framerusercontent.com/images/WFVXwyEnIqp01BKhgKwUjFSB0bA.png?width=504&height=168",
    width: 504,
    height: 168,
    renderedWidth: 139,
    renderedHeight: 46,
    objectFit: "fill",
  },
  {
    name: "TET",
    alt: "The Economic Times",
    src: "https://framerusercontent.com/images/hGfhrmpui8936uL79MpDRQv3vLs.png?width=548&height=49",
    width: 548,
    height: 49,
    renderedWidth: 164,
    renderedHeight: 14,
    objectFit: "contain",
  },
  {
    name: "ThePrint",
    alt: "The Print",
    src: "https://framerusercontent.com/images/J1ve4RFJ1Ziot8XRTtx5ITmVHMA.png?width=306&height=112",
    width: 306,
    height: 112,
    renderedWidth: 153,
    renderedHeight: 56,
    objectFit: "cover",
  },
  {
    name: "Entrepreneur",
    alt: "Entrepreneur",
    src: "https://framerusercontent.com/images/KpVDqTkxDwO8RF0s4SpTMmn0.png?width=306&height=112",
    width: 306,
    height: 112,
    renderedWidth: 152,
    renderedHeight: 56,
    objectFit: "cover",
  },
  {
    name: "Yourstory",
    alt: "YourStory",
    src: "https://framerusercontent.com/images/G3oXaUVtqISIDWGC8HVWM7vj1M.png?width=307&height=112",
    width: 307,
    height: 112,
    renderedWidth: 153,
    renderedHeight: 56,
    objectFit: "cover",
  },
  {
    name: "Forbes",
    alt: "Forbes",
    src: "https://framerusercontent.com/images/yR3NTTBvDlPffPJuGCYmImhnZxk.png?width=306&height=112",
    width: 306,
    height: 112,
    renderedWidth: 153,
    renderedHeight: 56,
    objectFit: "cover",
  },
];

function LogoCell({ logo }: { logo: LogoItem }) {
  return (
    <li className="flex shrink-0 items-center justify-center">
      <div
        className="relative flex shrink-0 items-center justify-center"
        style={{
          width: `${logo.renderedWidth}px`,
          height: `${logo.renderedHeight}px`,
        }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes={`${logo.renderedWidth}px`}
          className="block h-full w-full"
          style={{
            objectFit: logo.objectFit,
            objectPosition: "center",
          }}
          unoptimized
        />
      </div>
    </li>
  );
}

export default function FeaturedIn() {
  // Duplicate the logo set so the CSS translateX(-50%) loop is seamless
  const trackLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="w-full bg-[var(--featured-in-bg)] py-[38px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[6.36px]">
        {/* Label */}
        <div className="flex w-full justify-center">
          <p
            className="m-0 text-center text-[var(--featured-in-label)] uppercase"
            style={{
              fontFamily:
                'var(--font-hind-madurai), "Hind Madurai", "Hind Madurai Placeholder", sans-serif',
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              lineHeight: "21px",
            }}
          >
            featured in
          </p>
        </div>

        {/* Marquee */}
        <div className="featured-in-mask relative flex w-full overflow-hidden">
          <ul
            className="featured-in-track flex flex-row items-center"
            style={{
              gap: "38px",
              padding: 0,
              margin: 0,
              listStyleType: "none",
            }}
          >
            {trackLogos.map((logo, idx) => (
              <LogoCell
                key={`${logo.name}-${idx}`}
                logo={logo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
