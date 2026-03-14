 "use client";

import { useState } from "react";
import { Code2, Braces, Server, Wrench } from "lucide-react";
import TechStackIcon from "tech-stack-icons";
import Info from "../components/Info";
import { useIsMobile } from "../hook/useMobile";
import { cn } from "../lib/utils";

type TabKey = "about" | "projects" | "experience";

const experienceItems = [
  {
    role: "Fullstack Developer · Mai Tech",
    period: "Apr 2025 – Present",
    description:
      "Worked on MaiTalk, an AI-driven English practice platform built with React and Supabase, serving more than 2000 registered users. Integrated REST APIs, implemented authentication flows, and managed real-time data using Supabase. Gained practical experience with backend data modeling and database queries while building scalable web features.",
  },
  {
    role: "Frontend Developer · Freelancer",
    period: "Apr 2025 – Present",
    description:
      "Built large-scale systems including a POS/Warehouse Management platform and an English Center Management system. Worked with complex business logic, multi-role access control, and relational data structures. Collaborated with backend developers to integrate APIs and translated business requirements into structured frontend solutions.",
  },
];

const projectItems = [
  {
    title: "Mai Talk App",
    description:
      "An English speaking practice platform where users can practice daily speaking and improve their communication skills. Users can record their answers, receive AI based scoring and engage with the learning community.",
    href: "https://maitalkapp.com",
  },
  {
    title: "Portfolio Website (V1)",
    description:
      "A personal portfolio website built with Next.js and deployed on Vercel. The project showcases my software development work, including projects, technical skills, and experiments. It focuses on a clean UI, fast performance, and server-side rendering capabilities provided by Next.js.",
    href: "https://ngthhoangkim-v1.vercel.app/",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const isMobile = useIsMobile();

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center px-6 py-16">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
        <aside className="lg:w-[30rem]">
          <Info activeTab={activeTab} onTabChange={setActiveTab} />
        </aside>
        <main className={cn("flex-1 flex", isMobile ? "items-start" : "items-center")}>
          <div className="w-full max-w-2xl">
            {isMobile ? (
              <div className="space-y-16">
                <section>
                  <h2 className="text-3xl font-semibold text-white">About me</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-200">
                    Hi, I&apos;m Kim. I am a Frontend Developer specializing in
                    React, Next.js, TypeScript and TailwindCSS. I have experience
                    building scalable web applications and working with real world
                    systems across different domains. Currently, I work as a
                    developer at Mai Tech and also take on freelance projects,
                    developing and maintaining modern web applications.
                  </p>
                  <section className="mt-8 space-y-6">
                    <h3 className="text-lg font-semibold text-slate-100">
                      Tech Stack
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                          <Code2 className="h-4 w-4 text-sky-400" />
                          <span>Frontend</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                            <TechStackIcon name="react" className="h-4 w-4" />
                            <span>React</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                            <TechStackIcon name="nextjs2" className="h-4 w-4" />
                            <span>Next.js</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                            <TechStackIcon name="tailwindcss" className="h-4 w-4" />
                            <span>TailwindCSS</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                            <TechStackIcon name="zustand" className="h-4 w-4" />
                            <span>Zustand</span>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                          <Braces className="h-4 w-4 text-emerald-400" />
                          <span>Language</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                            <TechStackIcon name="typescript" className="h-4 w-4" />
                            <span>TypeScript</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                            <TechStackIcon name="js" className="h-4 w-4" />
                            <span>JavaScript</span>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                          <Server className="h-4 w-4 text-violet-400" />
                          <span>Backend</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                            <TechStackIcon name="supabase" className="h-4 w-4" />
                            <span>Supabase</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                            <TechStackIcon name="postgresql" className="h-4 w-4" />
                            <span>PostgreSQL</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                            <TechStackIcon name="mysql" className="h-4 w-4" />
                            <span>MySQL</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                            <TechStackIcon name="mongodb" className="h-4 w-4" />
                            <span>MongoDB</span>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                          <Wrench className="h-4 w-4 text-amber-400" />
                          <span>Tools</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                            <TechStackIcon name="git" className="h-4 w-4" />
                            <span>Git</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                            <TechStackIcon name="postman" className="h-4 w-4" />
                            <span>Postman</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white">Projects</h2>
                  <div className="mt-8 space-y-8 border-l border-white/10 pl-8">
                    {projectItems.map((item, index) => (
                      <div key={index} className="relative">
                        <p className="text-base font-semibold text-slate-100">
                          {item.title}
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-slate-300">
                          {item.description}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mt-3 inline-flex text-sm font-medium text-sky-400 hover:text-sky-300"
                          >
                            View project
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white">Experience</h2>
                  <div className="mt-8 space-y-8 border-l border-white/10 pl-8">
                    {experienceItems.map((item, index) => (
                      <div key={index} className="relative">
                        <p className="text-base font-semibold text-slate-100">
                          {item.role}
                          <span className="ml-2 text-xs font-normal text-slate-400">
                            {item.period}
                          </span>
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <>
                {activeTab === "about" && (
                  <section>
                    <h2 className="text-3xl font-semibold text-white">About me</h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-200">
                      Hi, I&apos;m Kim. I am a Frontend Developer specializing in
                      React, Next.js, TypeScript and TailwindCSS. I have experience
                      building scalable web applications and working with real world
                      systems across different domains. Currently, I work as a
                      developer at Mai Tech and also take on freelance projects,
                      developing and maintaining modern web applications.
                    </p>
                    <section className="mt-8 space-y-6">
                      <h3 className="text-lg font-semibold text-slate-100">
                        Tech Stack
                      </h3>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                            <Code2 className="h-4 w-4 text-sky-400" />
                            <span>Frontend</span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                              <TechStackIcon name="react" className="h-4 w-4" />
                              <span>React</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                              <TechStackIcon name="nextjs2" className="h-4 w-4" />
                              <span>Next.js</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                              <TechStackIcon name="tailwindcss" className="h-4 w-4" />
                              <span>TailwindCSS</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                              <TechStackIcon name="zustand" className="h-4 w-4" />
                              <span>Zustand</span>
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                            <Braces className="h-4 w-4 text-emerald-400" />
                            <span>Language</span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                              <TechStackIcon name="typescript" className="h-4 w-4" />
                              <span>TypeScript</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                              <TechStackIcon name="js" className="h-4 w-4" />
                              <span>JavaScript</span>
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                            <Server className="h-4 w-4 text-violet-400" />
                            <span>Backend</span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                              <TechStackIcon name="supabase" className="h-4 w-4" />
                              <span>Supabase</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                              <TechStackIcon name="postgresql" className="h-4 w-4" />
                              <span>PostgreSQL</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                              <TechStackIcon name="mysql" className="h-4 w-4" />
                              <span>MySQL</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                              <TechStackIcon name="mongodb" className="h-4 w-4" />
                              <span>MongoDB</span>
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                            <Wrench className="h-4 w-4 text-amber-400" />
                            <span>Tools</span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                              <TechStackIcon name="git" className="h-4 w-4" />
                              <span>Git</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                              <TechStackIcon name="postman" className="h-4 w-4" />
                              <span>Postman</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </section>
                )}

                {activeTab === "projects" && (
                  <section>
                    <h2 className="text-2xl font-semibold text-white">Projects</h2>
                    <div className="mt-8 space-y-8 border-l border-white/10 pl-8">
                      {projectItems.map((item, index) => (
                        <div key={index} className="relative">
                          <p className="text-base font-semibold text-slate-100">
                            {item.title}
                          </p>
                          <p className="mt-3 text-base leading-relaxed text-slate-300">
                            {item.description}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="mt-3 inline-flex text-sm font-medium text-sky-400 hover:text-sky-300"
                            >
                              View project
                            </a>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeTab === "experience" && (
                  <section>
                    <h2 className="text-2xl font-semibold text-white">Experience</h2>
                    <div className="mt-8 space-y-8 border-l border-white/10 pl-8">
                      {experienceItems.map((item, index) => (
                        <div key={index} className="relative">
                          <p className="text-base font-semibold text-slate-100">
                            {item.role}
                            <span className="ml-2 text-xs font-normal text-slate-400">
                              {item.period}
                            </span>
                          </p>
                          <p className="mt-3 text-base leading-relaxed text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
