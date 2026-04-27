"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Testimonials — "Top choice of 500,000+ creators" section.
 *
 * Layout (1185px content area on desktop, centered, padding 120px):
 *   - Heading block (Hind Madurai 600 + Instrument Serif italic, 48px / 60px)
 *   - Subtext (Inter 20px / 30px, grey)
 *   - 3 flex columns, 379px wide each, 24px column gap, 20px row gap
 *     - Column 1: WhatsApp screenshot, creator video, IG story screenshot, Trustpilot 4.5
 *     - Column 2: creator video, portrait screenshot, landscape IG screenshot, Trustpilot 5
 *     - Column 3: tall portrait img, creator video, tall screenshot img
 *
 * Mobile (<= 768px): collapses to a single column.
 *
 * Source has no interactions (pure display section). Videos autoplay/loop/muted.
 */

type StarVariant = "4.5" | "5";

const Trustpilot4_5Stars = () => (
  <svg
    width="121"
    height="23"
    viewBox="0 0 121 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(0.5 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M11.5664 4.23047L13.3405 9.64603H19.0362L14.4143 13.0074L16.1883 18.423L11.5664 15.0616L6.94452 18.423L8.71858 13.0074L4.09668 9.64603H9.79236L11.5664 4.23047Z"
      fill="white"
    />
    <path
      d="M14.4142 13.0078L11.5664 15.062L14.7877 14.175L14.4142 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(25.0537 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M36.1201 4.23047L37.8942 9.64603H43.5899L38.968 13.0074L40.742 18.423L36.1201 15.0616L31.4982 18.423L33.2723 13.0074L28.6504 9.64603H34.3461L36.1201 4.23047Z"
      fill="white"
    />
    <path
      d="M38.967 13.0078L36.1191 15.062L39.3405 14.175L38.967 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(49.6064 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M60.6729 4.23047L62.4469 9.64603H68.1426L63.5207 13.0074L65.2948 18.423L60.6729 15.0616L56.051 18.423L57.825 13.0074L53.2031 9.64603H58.8988L60.6729 4.23047Z"
      fill="white"
    />
    <path
      d="M63.5207 13.0078L60.6729 15.062L63.8942 14.175L63.5207 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(74.1602 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M85.2266 4.23047L87.0006 9.64603H92.6963L88.0744 13.0074L89.8485 18.423L85.2266 15.0616L80.6047 18.423L82.3787 13.0074L77.7568 9.64603H83.4525L85.2266 4.23047Z"
      fill="white"
    />
    <path
      d="M88.0744 13.0078L85.2266 15.062L88.4479 14.175L88.0744 13.0078Z"
      fill="#00B67A"
    />
    <g clipPath="url(#trustpilot-half-clip)">
      <rect
        width="21.7867"
        height="21.7867"
        transform="translate(98.7129 0.607422)"
        fill="#00B67A"
      />
      <rect
        x="109.779"
        y="0.607422"
        width="10.8934"
        height="21.7867"
        fill="#DCDCE6"
      />
      <path
        d="M109.779 4.23047L111.553 9.64603H117.249L112.627 13.0074L114.401 18.423L109.779 15.0616L105.157 18.423L106.931 13.0074L102.31 9.64603H108.005L109.779 4.23047Z"
        fill="white"
      />
      <path
        d="M112.627 13.0078L109.779 15.062L113.001 14.175L112.627 13.0078Z"
        fill="#DCDCE6"
      />
    </g>
    <defs>
      <clipPath id="trustpilot-half-clip">
        <rect
          width="21.7867"
          height="21.7867"
          fill="white"
          transform="translate(98.7129 0.607422)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Trustpilot5Stars = () => (
  <svg
    width="121"
    height="23"
    viewBox="0 0 121 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(0.5 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M11.5664 4.23047L13.3405 9.64603H19.0362L14.4143 13.0074L16.1883 18.423L11.5664 15.0616L6.94452 18.423L8.71858 13.0074L4.09668 9.64603H9.79236L11.5664 4.23047Z"
      fill="white"
    />
    <path
      d="M14.4142 13.0078L11.5664 15.062L14.7877 14.175L14.4142 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(25.0537 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M36.1201 4.23047L37.8942 9.64603H43.5899L38.968 13.0074L40.742 18.423L36.1201 15.0616L31.4982 18.423L33.2723 13.0074L28.6504 9.64603H34.3461L36.1201 4.23047Z"
      fill="white"
    />
    <path
      d="M38.967 13.0078L36.1191 15.062L39.3405 14.175L38.967 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(49.6064 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M60.6729 4.23047L62.4469 9.64603H68.1426L63.5207 13.0074L65.2948 18.423L60.6729 15.0616L56.051 18.423L57.825 13.0074L53.2031 9.64603H58.8988L60.6729 4.23047Z"
      fill="white"
    />
    <path
      d="M63.5207 13.0078L60.6729 15.062L63.8942 14.175L63.5207 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(74.1602 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M85.2266 4.23047L87.0006 9.64603H92.6963L88.0744 13.0074L89.8485 18.423L85.2266 15.0616L80.6047 18.423L82.3787 13.0074L77.7568 9.64603H83.4525L85.2266 4.23047Z"
      fill="white"
    />
    <path
      d="M88.0744 13.0078L85.2266 15.062L88.4479 14.175L88.0744 13.0078Z"
      fill="#00B67A"
    />
    <rect
      width="21.7867"
      height="21.7867"
      transform="translate(98.7129 0.607422)"
      fill="#00B67A"
    />
    <path
      d="M109.779 4.23047L111.553 9.64603H117.249L112.627 13.0074L114.401 18.423L109.779 15.0616L105.157 18.423L106.931 13.0074L102.31 9.64603H108.005L109.779 4.23047Z"
      fill="white"
    />
    <path
      d="M112.627 13.0078L109.779 15.062L113.001 14.175L112.627 13.0078Z"
      fill="#00B67A"
    />
  </svg>
);

interface TrustpilotCardProps {
  variant: StarVariant;
  quote: string;
  author: { name: string; jobTitle?: string; avatar: string };
}

const TrustpilotCard = ({ variant, quote, author }: TrustpilotCardProps) => (
  <div
    className="flex flex-col bg-[var(--testimonials-card-bg)] border border-[var(--testimonials-card-border)] rounded-[12px] p-[40px]"
    style={{ width: "100%" }}
  >
    <p
      className="font-hind text-[20px] leading-[28px] text-[var(--testimonials-quote)] m-0"
      style={{ fontWeight: 400 }}
    >
      {quote}
    </p>

    <div className="mt-[14px]">
      {variant === "4.5" ? <Trustpilot4_5Stars /> : <Trustpilot5Stars />}
    </div>

    <div
      className="my-[32px] border-t border-[var(--testimonials-card-border)]"
      aria-hidden="true"
    />

    <div className="flex items-center gap-[12px]">
      <Image
        src={author.avatar}
        alt={author.name}
        width={52}
        height={52}
        className="rounded-[100px] object-cover"
        style={{ width: 52, height: 52 }}
      />
      <div className="flex flex-col">
        <span className="font-hind text-[18px] leading-[30px] font-semibold text-[var(--testimonials-author-name)]">
          {author.name}
        </span>
        {author.jobTitle ? (
          <span className="text-[14px] leading-[20px] text-[var(--testimonials-author-job)]">
            {author.jobTitle}
          </span>
        ) : null}
      </div>
    </div>
  </div>
);

interface TestimonialImageProps {
  src: string;
  alt: string;
  aspectRatio: string;
}

const TestimonialImage = ({ src, alt, aspectRatio }: TestimonialImageProps) => (
  <div
    className="relative w-full overflow-hidden rounded-[12px]"
    style={{ aspectRatio }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 379px"
      className="object-contain"
    />
  </div>
);

interface TestimonialVideoProps {
  src: string;
  ariaLabel: string;
  aspectRatio: string;
}

const TestimonialVideo = ({
  src,
  ariaLabel,
  aspectRatio,
}: TestimonialVideoProps) => (
  <div
    className="relative w-full overflow-hidden rounded-[12px] bg-black"
    style={{ aspectRatio }}
  >
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls
      aria-label={ariaLabel}
    />
  </div>
);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("testimonials-animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".testimonials-animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-bg relative w-full overflow-hidden px-[20px] py-[64px] md:px-[60px] md:py-[80px] lg:px-[120px] lg:py-[120px]"
      aria-labelledby="testimonials-heading"
    >
      {/* Top white-to-transparent fade overlay */}
      <div
        className="testimonials-top-fade pointer-events-none absolute inset-x-0 top-0 h-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1185px] flex-col items-center gap-[40px] md:gap-[70px]">
        {/* Heading + subtext */}
        <div className="testimonials-animate-on-scroll flex w-full max-w-[690px] flex-col items-center gap-[20px] text-center">
          <h2
            id="testimonials-heading"
            className="m-0 text-[36px] leading-[44px] tracking-[-0.72px] text-[var(--testimonials-heading)] md:text-[48px] md:leading-[60px] md:tracking-[-0.96px]"
          >
            <span className="font-hind font-semibold">Top choice of </span>
            <span className="font-serif italic" style={{ fontWeight: 400 }}>
              500,000+ creators
            </span>
          </h2>
          <p className="m-0 font-sans text-[18px] leading-[28px] text-[var(--testimonials-subtext)] md:text-[20px] md:leading-[30px]">
            See how we&apos;ve helped creators like you build great brands and
            businesses.
          </p>
        </div>

        {/* 3-column flex masonry (single column on mobile) */}
        <div className="testimonials-animate-on-scroll testimonials-delay-1 flex w-full flex-col gap-[20px] md:flex-row md:items-start md:gap-[24px]">
          {/* Column 1 */}
          <div className="flex w-full flex-1 flex-col gap-[20px]">
            <TestimonialImage
              src="/Testimonials/images/whatsapp-robert.jpeg"
              alt="WhatsApp conversation screenshot from Robert Doran"
              aspectRatio="1170 / 1119"
            />
            <TestimonialVideo
              src="/Testimonials/videos/creator-1.mp4"
              ariaLabel="Creator testimonial video 1"
              aspectRatio="379 / 644"
            />
            <TestimonialImage
              src="/Testimonials/images/instagram-story.jpeg"
              alt="Instagram story screenshot of a creator"
              aspectRatio="1170 / 1330"
            />
            <TrustpilotCard
              variant="4.5"
              quote={
                '"One of the greatest experience ever. I found Telegram integrated feature very usefull. As it totally automates my business also the support is pretty good."'
              }
              author={{
                name: "Prasun B",
                avatar: "/Testimonials/avatars/prasun-b.png",
              }}
            />
          </div>

          {/* Column 2 */}
          <div className="flex w-full flex-1 flex-col gap-[20px]">
            <TestimonialVideo
              src="/Testimonials/videos/creator-2.mp4"
              ariaLabel="Creator testimonial video 2"
              aspectRatio="379 / 655"
            />
            <TestimonialImage
              src="/Testimonials/images/portrait-screenshot.jpeg"
              alt="Portrait testimonial screenshot"
              aspectRatio="1169 / 1435"
            />
            <TestimonialImage
              src="/Testimonials/images/landscape-instagram.jpeg"
              alt="Instagram comments screenshot"
              aspectRatio="1135 / 349"
            />
            <TrustpilotCard
              variant="5"
              quote={
                "\"SuperProfile's locked content feature has been a game-changer for me, enabling me to monetize my YouTube channel and grow my earnings.\""
              }
              author={{
                name: "Kavyal Sedanni",
                avatar: "/Testimonials/avatars/kavyal-sedanni.png",
              }}
            />
          </div>

          {/* Column 3 */}
          <div className="flex w-full flex-1 flex-col gap-[20px]">
            <TestimonialImage
              src="/Testimonials/images/tall-portrait.jpeg"
              alt="Creator portrait photograph"
              aspectRatio="901 / 1600"
            />
            <TestimonialVideo
              src="/Testimonials/videos/creator-3.mp4"
              ariaLabel="Creator testimonial video 3"
              aspectRatio="379 / 645"
            />
            <TestimonialImage
              src="/Testimonials/images/tall-screenshot.jpeg"
              alt="Tall app screenshot of creator results"
              aspectRatio="1170 / 1536"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
