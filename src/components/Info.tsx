import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Gitlab, Mail, Linkedin } from "lucide-react";
import avatar from "../../public/1.jpg";

type TabKey = "about" | "projects" | "experience";

interface InfoProps {
  activeTab: TabKey;
  onTabChange: (value: TabKey) => void;
  resumeLink?: string;
}

export default function Info({ activeTab, onTabChange, resumeLink }: InfoProps) {
  return (
    <header className="py-8 lg:py-0">
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Hoang Kim</h1>
          <p className="mt-4 text-xl font-medium text-slate-200">
            Frontend Developer
          </p>
          <p className="mt-1 text-sm text-slate-400">
            <span className="italic">2022 - 2025</span>
            {" | "}
            Vietnam Aviation Academy - VAA
          </p>
          {resumeLink && (
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              aria-label="Xem CV / Resume (mở tab mới)"
            >
              My Resume
            </a>
          )}
        </div>

        <div className="shrink-0">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/20 ring-2 ring-white/5">
            <Image
              src={avatar}
              alt="Hoang Kim"
              fill
              className="object-cover"
              sizes="144px"
              priority
            />
          </div>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => onTabChange(value as TabKey)}
        className="mt-10 hidden lg:flex lg:items-start lg:gap-6"
      >
        <TabsList className="flex w-full justify-start gap-8 rounded-none border-b border-white/10 bg-transparent p-0 text-sm font-medium">
          <TabsTrigger
            value="about"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Experience
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social and contact links">
        <li className="shrink-0">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="https://github.com/ngthhoangkim"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <Github className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
        <li className="shrink-0">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="https://gitlab.com/ngthhoangkim"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitLab (opens in a new tab)"
            title="GitLab"
          >
            <Gitlab className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
        <li className="shrink-0">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenthihoangkim07022004@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Mail (opens in a new tab)"
            title="Mail"
          >
            <Mail className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
        <li className="shrink-0">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="https://www.linkedin.com/in/nguy%E1%BB%85n-th%E1%BB%8B-ho%C3%A0ng-kim-10b2922a8/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
      </ul>
    </header>
  );
}
