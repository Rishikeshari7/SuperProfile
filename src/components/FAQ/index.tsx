"use client";

import { useState } from "react";

/**
 * FAQ — "Questions? Answers!" accordion section.
 *
 * Layout (~900px content area, centered, light grey-blue background):
 *   - Pill badge "Frequently Asked Questions" with question-mark icon
 *   - H2 "Questions? Answers!" (Hind Madurai 56px / 120%)
 *   - 7 white accordion cards with chevron toggle (8px gap between)
 *   - Bottom contact row: envelope icon + mailto link
 *
 * Interactions:
 *   - Click card → toggles answer panel (only one open at a time)
 *   - Answer panel: opacity 0→0.8, blur 5px→0, max-height 0→auto
 *   - Chevron rotates 180deg when open
 *
 * Mobile (<= 768px): same structure, smaller text + tighter padding.
 *
 * Source: Framer site, animations are JS-driven via inline style mutations.
 */

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is SuperProfile?",
    answer:
      "SuperProfile is the all-in-one toolkit for creators aiming to build a profitable online presence. Tools like Auto DM and SuperLinks drive traffic and interaction, while integrated features like digital product sales, coaching, courses, and community memberships help you convert that attention into income—all in one place.",
  },
  {
    question: "Who is SuperProfile for?",
    answer:
      "SuperProfile is for creators, coaches, freelancers, and anyone with knowledge or experience to share. If you want a simple, all-in-one way to engage your audience and run your digital business without hassle, SuperProfile is built for you.",
  },
  {
    question: "How is SuperProfile different from other platforms?",
    answer:
      "Most platforms just let you list your products. SuperProfile goes further by helping you sell. With built-in tools like Auto DMs, SuperLinks, simple landing pages, and email automations, it helps you turn engagement into conversions – without needing multiple tools or complex setups.",
  },
  {
    question: "Is SuperProfile free to use?",
    answer:
      "Yes. You can use SuperProfile free forever - Unlimited AutoDMs, launch your Store, and create lead magnets. To start selling or to unlock unlimited functionalities, you can upgrade to SuperProfile's Creator Plan starting at just ₹99.",
  },
  {
    question: "What can I sell with SuperProfile?",
    answer:
      "You can sell digital products like guides, templates, and courses, as well as coaching calls, workshops, community memberships, or even share free resources to grow your audience and email list.",
  },
  {
    question: "Is it easy to set up and use?",
    answer:
      "Yes. SuperProfile is designed to be fast and beginner-friendly. You can set up your profile and start selling in under 10 minutes—no tech skills needed.",
  },
  {
    question: "How do I get paid? Can I connect my Bank account?",
    answer:
      "Yes. You can connect your Bank account to receive payments directly. All your earnings will be transferred to this bank account on a T+1 basis —fast and without hassle.",
  },
];

const QuestionMarkIcon = () => (
  <svg
    viewBox="0 0 256 256"
    aria-hidden="true"
    className="w-[17px] h-[17px] flex-shrink-0 opacity-80"
    style={{ fill: "currentColor" }}
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z" />
  </svg>
);

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 256 256"
    aria-hidden="true"
    className="w-[20px] h-[20px] flex-shrink-0 transition-transform duration-300 ease-out"
    style={{
      fill: "currentColor",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg
    viewBox="0 0 256 256"
    aria-hidden="true"
    className="w-[25px] h-[25px] flex-shrink-0"
    style={{ fill: "currentColor" }}
  >
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
  </svg>
);

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) => {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className="bg-[var(--faq-card-bg)] rounded-[10px] faq-card-shadow"
      style={{ cursor: "pointer" }}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-[16px] px-[16px] py-[16px] text-left cursor-pointer"
      >
        <span
          className="font-hind text-[17px] leading-[150%] text-[var(--faq-text-primary)]"
          style={{ fontWeight: 400 }}
        >
          {item.question}
        </span>
        <span className="text-[var(--faq-chevron)]">
          <ChevronDownIcon open={isOpen} />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`faq-answer-panel ${isOpen ? "faq-answer-open" : ""}`}
      >
        <div className="px-[16px] pb-[16px]">
          <p className="text-[14px] leading-[160%] text-[var(--faq-text-primary)]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="bg-[var(--faq-bg)] rounded-[40px] w-full"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1200px] mx-auto px-[20px] sm:px-[32px] lg:px-[44px] py-[60px] sm:py-[80px] lg:py-[100px]">
        {/* Heading area */}
        <div className="flex flex-col items-center gap-[16px] mb-[40px] sm:mb-[48px]">
          <div
            className="inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-[60px] border"
            style={{
              backgroundColor: "var(--faq-badge-bg)",
              borderColor: "var(--faq-badge-border)",
              boxShadow: "var(--faq-badge-bg) 0px 0px 0px 2px",
            }}
          >
            <span style={{ color: "var(--faq-badge-icon)" }}>
              <QuestionMarkIcon />
            </span>
            <span
              className="font-hind text-[15px] leading-[160%] text-[var(--faq-badge-text)]"
              style={{ fontWeight: 400 }}
            >
              Frequently Asked Questions
            </span>
          </div>

          <h2
            id="faq-heading"
            className="font-hind text-[36px] sm:text-[44px] lg:text-[56px] leading-[120%] text-center text-[var(--faq-heading)]"
            style={{
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Questions? Answers!
          </h2>
        </div>

        {/* Accordion list */}
        <div className="max-w-[900px] mx-auto flex flex-col gap-[8px]">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom contact row */}
        <div className="mt-[32px] sm:mt-[44px] flex flex-row items-center justify-center gap-[10px] flex-wrap">
          <span style={{ color: "var(--faq-envelope)" }}>
            <EnvelopeIcon />
          </span>
          <p
            className="font-hind text-[15px] sm:text-[17px] leading-[150%] text-center text-[var(--faq-text-primary)]"
            style={{ fontWeight: 400 }}
          >
            Feel free to mail us for any enquiries :{" "}
            <a
              href="mailto:care@superprofile.bio"
              className="hover:underline"
              style={{ color: "var(--faq-text-primary)" }}
            >
              care@superprofile.bio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
