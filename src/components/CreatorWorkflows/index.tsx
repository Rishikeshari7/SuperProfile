"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MobileWorkflowDiagram = () => {
  const stages = [
    {
      label: "Capture Leads with Growth Tools",
      pills: ["AutoDM", "Lead Magnet", "Link-in-bio"],
    },
    {
      label: "Nurture Leads and provide value",
      pills: ["Email Automations", "Converting Landing Pages"],
    },
    {
      label: "Convert leads to sales via monetization tools",
      pills: [
        "Sell Digital Products",
        "Sell Memberships",
        "Sell Courses",
        "Offer 1:1 Coaching",
        "Host Events",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-[24px]">
      {stages.map((stage, stageIdx) => (
        <div key={stage.label} className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full gap-[12px] rounded-[16px] bg-[rgba(255,255,255,0.45)] p-[16px]">
            <div className="text-center text-[14px] leading-[18px] font-[500] text-[var(--workflows-text-primary)] px-[8px]">
              {stage.label}
            </div>
            <div className="flex flex-col items-stretch gap-[8px] w-full">
              {stage.pills.map((pill) => (
                <div
                  key={pill}
                  className="flex items-center justify-center rounded-[9999px] bg-[var(--workflows-pill-bg)] border border-[var(--workflows-pill-border)] px-[16px] py-[10px] text-[14px] leading-[18px] font-[500] text-[var(--workflows-text-primary)]"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
          {stageIdx < stages.length - 1 && (
            <div className="h-[24px] w-[1px] bg-[var(--workflows-connector)] my-[4px]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default function CreatorWorkflows() {
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
            entry.target.classList.add("workflows-animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".workflows-animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1382px] px-[16px] sm:px-[20px] lg:px-[24px] py-[24px] lg:py-[40px]">
        <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[40px]">
          {/* Background image */}
          <div className="absolute inset-0 -z-0">
            <Image
              src="/CreatorWorkflows/images/background.png"
              alt=""
              fill
              priority={false}
              sizes="(min-width: 1440px) 1382px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Content wrapper */}
          <div className="relative z-[1] flex flex-col items-stretch gap-[40px] sm:gap-[56px] lg:gap-[75px] px-[20px] py-[40px] sm:px-[32px] sm:py-[60px] lg:px-[48px] lg:pt-[80px] lg:pb-[100px]">
            {/* Block 1 — Heading + Workflow diagram */}
            <div className="flex flex-col items-center w-full gap-[32px] sm:gap-[48px] lg:gap-[70px]">
              {/* Title */}
              <div className="workflows-animate-on-scroll flex flex-col items-center w-full max-w-[1050px] gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                <h2 className="text-center font-hind font-[700] tracking-[-0.04em] leading-[130%] text-[var(--workflows-text-primary)] text-[28px] sm:text-[36px] lg:text-[47px]">
                  Powerful Creator{" "}
                  <span className="font-serif italic font-[400] tracking-[-0.02em] text-[30px] sm:text-[38px] lg:text-[50px]">
                    Workflows
                  </span>
                </h2>
              </div>

              {/* Workflow diagram — desktop/tablet image, mobile recreated */}
              <div className="workflows-animate-on-scroll workflows-delay-1 w-full">
                {/* Desktop / large tablet — image diagram */}
                <div className="hidden md:block w-full">
                  <div className="relative w-full max-w-[1097px] mx-auto aspect-[1097/428]">
                    <Image
                      src="/CreatorWorkflows/images/workflow-diagram.png"
                      alt="Creator workflow diagram showing capture, nurture and convert leads stages"
                      fill
                      sizes="(min-width: 1440px) 1097px, (min-width: 1024px) 90vw, 90vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Mobile / small tablet — recreated stacked pills */}
                <div className="block md:hidden w-full max-w-[400px] mx-auto">
                  <MobileWorkflowDiagram />
                </div>
              </div>
            </div>

            {/* Block 2 — Stats row */}
            <div className="workflows-animate-on-scroll workflows-delay-2 flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-[24px] sm:gap-[32px] lg:gap-[75px] w-full lg:px-[88px]">
              {/* Text block */}
              <div className="flex flex-col items-start gap-[12px] sm:gap-[14px] lg:gap-[16px] w-full lg:max-w-[534px]">
                <h3 className="font-hind font-[600] leading-[120%] text-[var(--workflows-text-primary)] text-[22px] sm:text-[26px] lg:text-[32px]">
                  Growth &amp; Monetization Tools That Work Better Together
                </h3>
                <p className="font-hind font-[400] leading-[130%] text-[var(--workflows-text-primary)] text-[16px] sm:text-[18px] lg:text-[20px]">
                  Combine SuperProfile tools to create powerful workflows that
                  grow your reach and drive sales—on autopilot.
                </p>
              </div>

              {/* Stat box */}
              <div
                className="flex items-center justify-center rounded-[20px] w-full lg:max-w-[501px] lg:h-[152px] px-[20px] sm:px-[28px] lg:px-[32px] py-[20px] lg:py-[4px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--workflows-stat-gradient-from) 0%, var(--workflows-stat-gradient-to) 100%)",
                }}
              >
                <div className="flex flex-row items-center justify-center gap-[16px] sm:gap-[18px] lg:gap-[20px] w-full">
                  <div
                    className="font-hind font-[700] text-[var(--workflows-text-on-stat)] leading-none text-[72px] sm:text-[96px] lg:text-[120px] flex-shrink-0"
                    style={{ minWidth: "1ch" }}
                  >
                    5X
                  </div>
                  <p className="font-hind font-[500] text-[var(--workflows-text-on-stat)] leading-[130%] text-[14px] sm:text-[18px] lg:text-[22px] lg:max-w-[277px]">
                    Creators see up to 5X more revenue when they stack
                    SuperProfile tools together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
