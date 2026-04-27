"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Integrations — "Effortlessly integrate with Third-Party Apps" section.
 *
 * Desktop-only: hidden at < 1024px (Framer SSR variant on the source). We render
 * the section only at md+ breakpoints; mobile/tablet 768 collapses to nothing.
 *
 * Layout (centered single column, ~1052x596 orbit area):
 *   - Heading block (Hind Madurai 32px + Instrument Serif 60px italic)
 *   - Subtext (Hind Madurai 20px, grey)
 *   - "Start for Free" CTA pill button
 *   - Orbit diagram:
 *       * 3 nested concentric circles (350 / 250 / 150)
 *       * 1 thin dashed ring at 450px (orbit path) — 1px solid black @ 10% opacity
 *       * Center icon: frosted-glass card (112x112) with 7 colored radial-gradient
 *         glow blobs underneath (inside the inner card) and the SuperProfile logo
 *         at 68x68
 *       * 8 orbit icon cards (56x56) placed every 45° around a 225px radius circle.
 *         The wrapper rotates continuously at 40s linear infinite; each card
 *         counter-rotates so its icon stays upright.
 */

const ORBIT_RADIUS = 225; // px — half of the 450px orbit path circle
const ORBIT_ICONS = [
  { label: "Kit", src: "/Integrations/icons/kit.svg" },
  {
    label: "Google Calendar",
    src: "/Integrations/icons/google-calendar-green.svg",
  },
  {
    label: "Google Calendar 31",
    src: "/Integrations/icons/google-calendar-blue.png",
  },
  { label: "Gmail", src: "/Integrations/icons/gmail.webp" },
  { label: "Outlook", src: "/Integrations/icons/outlook.png" },
  { label: "Google Sheets", src: "/Integrations/icons/google-sheets.png" },
  { label: "Looker Studio", src: "/Integrations/icons/looker.png" },
  { label: "Zapier", src: "/Integrations/icons/zapier.png" },
];

// 7 stacked radial-gradient blobs that bleed through the frosted glass center
// card. Positions are scattered inside a 200x200px box, recreating the
// multicoloured glow seen on the source.
const CENTER_GLOWS: Array<{
  color: string;
  top: string;
  left: string;
}> = [
  { color: "rgba(227,148,0,0.6)", top: "-10%", left: "10%" }, // amber
  { color: "rgba(0,151,254,0.55)", top: "30%", left: "-15%" }, // sky blue
  { color: "rgba(0,173,9,0.5)", top: "65%", left: "5%" }, // green
  { color: "rgba(243,71,255,0.5)", top: "70%", left: "55%" }, // pink
  { color: "rgba(153,102,255,0.55)", top: "30%", left: "70%" }, // purple
  { color: "rgba(255,71,71,0.5)", top: "-5%", left: "55%" }, // red
  { color: "rgba(71,114,255,0.55)", top: "40%", left: "30%" }, // royal blue
];

const CTA_HREF =
  "https://superprofile.bio/signup?utm_source=SPF+Website&utm_medium=ThirdParty+Section";

export default function Integrations() {
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
            entry.target.classList.add("integrations-animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      ".integrations-animate-on-scroll"
    );
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="integrations-heading"
      className="hidden md:block relative w-full bg-[var(--integrations-bg)] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 65%, rgba(200,180,255,0.22) 0%, rgba(180,200,255,0.12) 40%, #ffffff 75%)",
      }}
    >
      {/* Decorative outer ellipse (visual reference, low opacity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 opacity-[0.38]"
        style={{
          width: "1086px",
          height: "762px",
          borderRadius: "50%",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-[24px] pt-[100px] pb-[80px]">
        {/* Heading + subtext + CTA */}
        <div className="flex w-full max-w-[750px] flex-col items-center text-center">
          <h2
            id="integrations-heading"
            className="integrations-animate-on-scroll font-hind text-[var(--integrations-heading)]"
          >
            <span className="block text-[32px] font-[700] leading-[38.4px]">
              Effortlessly integrate with
            </span>
            <span className="mt-[6px] block font-serif text-[60px] font-[400] italic leading-[72px]">
              Third-Party Apps
            </span>
          </h2>

          <p className="integrations-animate-on-scroll integrations-delay-1 mt-[20px] font-hind text-[20px] font-[400] leading-[30px] text-[var(--integrations-subtext)]">
            Connect SuperProfile with your existing stack
            <br />
            — Enabling smooth workflows.
          </p>

          <a
            href={CTA_HREF}
            rel="noopener"
            className="integrations-animate-on-scroll integrations-delay-2 mt-[32px] inline-flex h-[44px] items-center justify-center rounded-[48px] bg-[var(--integrations-cta-bg)] px-[28px] py-[11px] font-hind text-[18px] font-[500] leading-[1] text-[var(--integrations-cta-text)] transition-colors duration-200 hover:bg-[var(--integrations-cta-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--integrations-cta-bg-hover)]"
          >
            Start for Free
          </a>
        </div>

        {/* Orbit diagram */}
        <div
          className="relative mt-[48px] flex items-center justify-center"
          style={{ width: "1052px", maxWidth: "100%", height: "596px" }}
          aria-hidden="true"
        >
          {/* Concentric soft circles (350 / 250 / 150) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "400px",
              backgroundColor: "var(--integrations-ring-1)",
              boxShadow: "rgba(0,0,0,0.04) 0px 0px 10px 0px inset",
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "400px",
                backgroundColor: "var(--integrations-ring-2)",
                boxShadow: "rgba(0,0,0,0.08) 0px 0px 10px 0px inset",
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "400px",
                  backgroundColor: "var(--integrations-ring-3)",
                  boxShadow: "rgba(0,0,0,0.12) 0px 0px 10px 0px inset",
                }}
              />
            </div>
          </div>

          {/* Orbit path ring (450px, 1px solid @ 10% opacity) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "450px",
              height: "450px",
              borderRadius: "100%",
              border: "1px solid var(--integrations-orbit-path)",
            }}
          />

          {/* Center icon card (112x112 outer frosted wrapper, 26px inner card) */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "112px",
                height: "112px",
                borderRadius: "32px",
                backgroundColor: "rgba(255,255,255,0.48)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                boxShadow:
                  "rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.09) 0px 6px 6px 0px, rgba(0,0,0,0.05) 0px 13px 8px 0px, rgba(0,0,0,0.01) 0px 22px 9px 0px",
              }}
            >
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "26px",
                  backgroundColor: "var(--integrations-card-bg)",
                  border: "1px solid var(--integrations-card-border)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                {/* Glow blobs behind the logo (visible through frosted glass) */}
                {CENTER_GLOWS.map((glow, i) => (
                  <span
                    key={i}
                    aria-hidden
                    className="pointer-events-none absolute"
                    style={{
                      width: "80px",
                      height: "80px",
                      top: glow.top,
                      left: glow.left,
                      borderRadius: "50%",
                      background: `radial-gradient(50% 50%, ${glow.color} 0%, rgba(255,255,255,0) 100%)`,
                      filter: "blur(8px)",
                    }}
                  />
                ))}
                {/* Center logo */}
                <Image
                  src="/Integrations/icons/superprofile-center.png"
                  alt="SuperProfile"
                  width={68}
                  height={68}
                  className="relative z-10 h-[68px] w-[68px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Rotating orbit wrapper (450px square centered) — children placed at radius */}
          <div
            className="integrations-orbit-wrapper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${ORBIT_RADIUS * 2}px`,
              height: `${ORBIT_RADIUS * 2}px`,
            }}
          >
            {ORBIT_ICONS.map((icon, idx) => {
              const angle = (idx / ORBIT_ICONS.length) * 2 * Math.PI;
              const x = Math.cos(angle - Math.PI / 2) * ORBIT_RADIUS;
              const y = Math.sin(angle - Math.PI / 2) * ORBIT_RADIUS;
              return (
                <div
                  key={icon.label}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className="integrations-orbit-card flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        backgroundColor: "var(--integrations-card-bg)",
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        boxShadow:
                          "rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.09) 0px 6px 6px 0px, rgba(0,0,0,0.05) 0px 13px 8px 0px, rgba(0,0,0,0.01) 0px 22px 9px 0px",
                      }}
                    >
                      <div
                        className="relative flex items-center justify-center overflow-hidden"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "10px",
                        }}
                      >
                        <Image
                          src={icon.src}
                          alt={icon.label}
                          width={48}
                          height={48}
                          className="h-[48px] w-[48px] object-contain"
                          unoptimized={icon.src.endsWith(".svg")}
                        />
                        {/* Frosted overlay (rgba(255,255,255,0.7) with blur) */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            borderRadius: "14px",
                          }}
                        />
                        {/* Smaller 30x30 icon centered on top (focused version) */}
                        <Image
                          src={icon.src}
                          alt=""
                          aria-hidden
                          width={30}
                          height={30}
                          className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 object-contain"
                          unoptimized={icon.src.endsWith(".svg")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
