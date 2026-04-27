"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SIGNUP_HREF =
  "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=Hero";

const YOUTUBE_VIDEO_ID = "TZ4O6alssRQ";
const YOUTUBE_THUMBNAIL = `https://i.ytimg.com/vi_webp/${YOUTUBE_VIDEO_ID}/sddefault.webp`;
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&color=white`;

const HERO_BG_IMAGE =
  "https://framerusercontent.com/images/wCe1qYzT9fRwqqxgUVgwEdpxbs.png?width=2880&height=1800";
const CLOUD_LAYER_1 =
  "https://framerusercontent.com/images/Vzj0ddqjzxBUI5H8NifJnE5N1s.png?width=2737&height=974";
const CLOUD_LAYER_2 =
  "https://framerusercontent.com/images/gMAAhjtXhayFO3xNzm5ATsMyU.png?width=3802&height=1458";

const HIND_FONT_STACK =
  '"Hind Madurai", "Hind Madurai Placeholder", sans-serif';
const SERIF_FONT_STACK =
  '"Instrument Serif", "Instrument Serif Placeholder", serif';
const INTER_FONT_STACK = 'Inter, "Inter Placeholder", sans-serif';

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    aria-hidden="true"
    className="absolute inset-0 w-full h-full"
    style={{ fill: "rgb(249, 248, 255)" }}
  >
    <g>
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </g>
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    aria-hidden="true"
    className="absolute inset-0 w-full h-full"
    style={{ fill: "rgb(102, 102, 255)" }}
  >
    <g>
      <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" />
    </g>
  </svg>
);

const PlayIcon = () => (
  <svg
    height="100%"
    version="1.1"
    viewBox="0 0 68 48"
    width="100%"
    aria-hidden="true"
  >
    <path
      className="hero-play-bg-path"
      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
      fill="#212121"
      fillOpacity={0.8}
    />
    <path d="M 45,24 27,14 27,34" fill="#fff" />
  </svg>
);

export default function HeroBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cloud1Ref = useRef<HTMLDivElement | null>(null);
  const cloud2Ref = useRef<HTMLDivElement | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Scroll-reveal IntersectionObserver
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      sectionRef.current
        ?.querySelectorAll(".hero-animate-on-scroll")
        .forEach((el) => el.classList.add("hero-animate-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const els = sectionRef.current?.querySelectorAll(".hero-animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax cloud layers driven by scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const applyParallax = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      // Progress: 0 at top of viewport, 1 when fully scrolled past
      const progress = Math.max(
        -1,
        Math.min(1, -rect.top / Math.max(viewportH, rect.height)),
      );
      const offset1 = 30 + progress * 40; // moves down-right with scroll
      const offset2 = -30 - progress * 40; // moves up-left with scroll
      if (cloud1Ref.current) {
        cloud1Ref.current.style.transform = `translate3d(${offset1}px, ${offset1}px, 0)`;
      }
      if (cloud2Ref.current) {
        cloud2Ref.current.style.transform = `translate3d(${offset2}px, ${offset2}px, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(applyParallax);
    };

    applyParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handlePlayVideo = () => setVideoPlaying(true);

  return (
    <header
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden isolate"
    >
      {/* Full-bleed gradient background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_BG_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top]"
        />
      </div>

      {/* Cloud parallax layers */}
      <div
        ref={cloud1Ref}
        aria-hidden="true"
        className="pointer-events-none absolute z-[2] hidden md:block will-change-transform"
        style={{
          top: "320px",
          left: "-242px",
          width: "1425px",
          height: "547px",
          opacity: 0.6,
          transform: "translate3d(30px, 30px, 0)",
        }}
      >
        <Image
          src={CLOUD_LAYER_1}
          alt=""
          fill
          sizes="1425px"
          className="object-cover object-center"
        />
      </div>
      <div
        ref={cloud2Ref}
        aria-hidden="true"
        className="pointer-events-none absolute z-[2] hidden md:block will-change-transform"
        style={{
          top: "320px",
          left: "324px",
          width: "1338px",
          height: "514px",
          transform: "translate3d(-30px, -30px, 0)",
        }}
      >
        <Image
          src={CLOUD_LAYER_2}
          alt=""
          fill
          sizes="1338px"
          className="object-contain object-center"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-[3] mx-auto flex w-full max-w-[1382px] flex-col items-center justify-center px-5 pt-[60px] pb-[40px] gap-8 md:gap-12 md:pt-24 md:pb-16 lg:gap-14 lg:pt-[100px]">
        {/* Title group */}
        <div className="flex w-full max-w-[710px] flex-col items-center justify-center gap-5 md:gap-8">
          <div className="hero-animate-on-scroll w-full">
            <h1
              className="text-center text-[40px] leading-[90%] sm:text-[52px] lg:text-[65px]"
              style={{
                color: "var(--hero-text-primary)",
                letterSpacing: "-0.06em",
              }}
            >
              <span
                className="block"
                style={{
                  fontFamily: HIND_FONT_STACK,
                  fontWeight: 500,
                }}
              >
                The complete creator toolkit
              </span>
              <span
                className="block italic"
                style={{
                  fontFamily: SERIF_FONT_STACK,
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: "100%",
                }}
              >
                to Grow and Monetize
              </span>
            </h1>
          </div>

          <p
            className="hero-animate-on-scroll hero-delay-1 w-full max-w-[710px] text-center text-[16px] leading-[130%] sm:text-[18px] lg:text-[20px]"
            style={{
              color: "var(--hero-text-primary)",
              fontFamily: INTER_FONT_STACK,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Grow your reach, earn more, and save time, so you can focus on
            delivering real value to your audience.
          </p>
        </div>

        {/* CTA button */}
        <div className="hero-animate-on-scroll hero-delay-2">
          <Link
            href={SIGNUP_HREF}
            target="_blank"
            rel="noopener"
            className="group inline-flex h-[44px] items-center justify-center overflow-hidden rounded-[100px] pr-6 pl-[48px] transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
            style={{
              backgroundColor: "var(--hero-cta-bg)",
              gap: "16px",
            }}
            aria-label="Get Started — Sign up for SuperProfile"
          >
            <span
              className="relative flex h-[40px] w-[40px] items-center justify-end overflow-hidden rounded-[100px] pr-3"
              style={{ backgroundColor: "var(--hero-cta-circle-bg)" }}
            >
              {/* Layered icons: home (purple) behind arrow (white) */}
              <span className="relative h-4 w-4">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-1 transition-transform duration-200 group-hover:-translate-x-2"
                >
                  <HomeIcon />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-transform duration-200 group-hover:translate-x-1"
                >
                  <ArrowRightIcon />
                </span>
              </span>
            </span>
            <span
              className="text-[16px] leading-[19px]"
              style={{
                color: "var(--hero-text-dark)",
                fontFamily: INTER_FONT_STACK,
                fontWeight: 600,
              }}
            >
              Get Started
            </span>
          </Link>
        </div>

        {/* Video container */}
        <div className="hero-animate-on-scroll hero-delay-3 w-full max-w-[892px]">
          <article
            role="presentation"
            className="relative aspect-[892/505] w-full cursor-pointer overflow-hidden rounded-[16px] md:rounded-[20px]"
            style={{ backgroundColor: "var(--hero-video-bg)" }}
            onClick={handlePlayVideo}
          >
            {!videoPlaying && (
              <>
                <Image
                  src={YOUTUBE_THUMBNAIL}
                  alt="SuperProfile product overview video"
                  fill
                  sizes="(min-width: 1024px) 892px, (min-width: 768px) 80vw, 92vw"
                  className="object-cover"
                />
                <button
                  type="button"
                  aria-label="Play video"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayVideo();
                  }}
                  className="hero-play-button absolute left-1/2 top-1/2 h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                >
                  <PlayIcon />
                </button>
              </>
            )}
            {videoPlaying && (
              <iframe
                title="SuperProfile product overview video"
                src={YOUTUBE_EMBED_URL}
                allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 h-full w-full"
                frameBorder={0}
                allowFullScreen
              />
            )}
          </article>
        </div>
      </div>

      {/* Bottom color overlay (blends into next section) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-[80px] overflow-hidden"
      />
    </header>
  );
}
