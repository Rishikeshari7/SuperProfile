"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full">
      <Link
        href="https://superprofile.bio/signup"
        target="_blank"
        rel="noopener"
        className="flex w-full flex-row items-center justify-center gap-[10px] overflow-hidden bg-[var(--announcement-bar-bg)] px-[16px] py-[7.5px] transition-all min-h-[45px] md:min-h-[45px]"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-[10px] gap-y-[2px] text-center">
          <p
            className="m-0 text-[var(--announcement-bar-text)] text-center font-medium tracking-[-0.15px]"
            style={{
              fontSize: "15px",
              lineHeight: "30px",
              fontFamily:
                'Inter, "Inter Placeholder", sans-serif',
            }}
          >
            <span aria-hidden="true">🎉 </span>
            <strong className="font-bold">New Launch</strong>
            {" - Use AutoDM to send unlimited DM Automations on Instagram"}
          </p>
          <p
            className="m-0 text-[var(--announcement-bar-link)] text-center font-medium tracking-[-0.15px] underline whitespace-nowrap"
            style={{
              fontSize: "15px",
              lineHeight: "30px",
              fontFamily:
                'Inter, "Inter Placeholder", sans-serif',
            }}
          >
            Start now
          </p>
        </div>
      </Link>
    </div>
  );
}
