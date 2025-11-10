import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Github, Mail } from "lucide-react";

export default function Info() {
  return (
    <header className="py-24">
      <h1 className="text-5xl font-bold tracking-tight">Hoàng Kim</h1>
      <p className="mt-3 text-lg font-medium text-slate-200">
        Front End Engineer
      </p>
      <p className="mt-4 max-w-lg leading-normal text-slate-300">
        I&apos;m a frontend engineer with a passion for building web
        applications that are both functional and beautiful.
      </p>

      <Tabs
        defaultValue="about"
        className="mt-10 hidden lg:flex lg:items-start lg:gap-6"
      >
        <TabsList className="flex w-full gap-6 rounded-none border-b border-white/10 bg-transparent p-0 text-sm font-medium">
          <TabsTrigger
            value="about"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
            asChild
          >
            <a href="#about">About</a>
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
            asChild
          >
            <a href="#projects">Projects</a>
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
            asChild
          >
            <a href="#experience">Experience</a>
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="rounded-none border-b-2 border-transparent px-0 pb-3 text-white/60 transition data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:font-bold"
            asChild
          >
            <a href="#contact">Contact</a>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook (opens in a new tab)"
            title="Facebook"
          >
            <Facebook className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 transition hover:text-white"
            href="mailto:"
            aria-label="Send mail"
            title="Email"
          >
            <Mail className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </li>
      </ul>
    </header>
  );
}
