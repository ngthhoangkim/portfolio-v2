"use client";

import { useState } from "react";
import Info from "../components/Info";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import { cn } from "../lib/utils";

type TabKey = "about" | "projects" | "experience";

const RESUME_LINK =
  "https://drive.google.com/file/d/1zA1ylngeBGFnoj74ZhObEm2eAiAEd-6V/view?usp=drive_link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  // Below lg every section is stacked on one page; from lg up the tabs in the
  // sidebar pick one. Hiding with CSS keeps all three in the server-rendered
  // HTML and avoids the layout flash a JS breakpoint check would cause.
  const onlyWhenActive = (tab: TabKey) =>
    cn(activeTab !== tab && "lg:hidden");

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Info
            activeTab={activeTab}
            onTabChange={setActiveTab}
            resumeLink={RESUME_LINK}
          />
        </aside>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <div className="w-full max-w-2xl space-y-16">
            <About className={onlyWhenActive("about")} />
            <Projects className={onlyWhenActive("projects")} />
            <Experience className={onlyWhenActive("experience")} />
          </div>
        </main>
      </div>
    </div>
  );
}
