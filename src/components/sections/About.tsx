import { Braces, Code2, Server, Wrench, type LucideIcon } from "lucide-react";
import TechStackIcon from "tech-stack-icons";
import content from "../../data/content.json";
import { cn } from "../../lib/utils";

const { profile, techStack } = content;

const groupIcons: Record<string, LucideIcon> = {
  code: Code2,
  braces: Braces,
  server: Server,
  wrench: Wrench,
};

// Written out in full so Tailwind can pick the classes up statically.
const accents: Record<string, { icon: string; chip: string }> = {
  sky: {
    icon: "text-sky-400",
    chip: "border-sky-500/40 bg-sky-500/10 text-sky-200",
  },
  emerald: {
    icon: "text-emerald-400",
    chip: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  },
  violet: {
    icon: "text-violet-400",
    chip: "border-violet-500/40 bg-violet-500/10 text-violet-200",
  },
  amber: {
    icon: "text-amber-400",
    chip: "border-amber-500/40 bg-amber-500/10 text-amber-200",
  },
};

export default function About({ className }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-3xl font-semibold text-white">
        About me
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-200">
        {profile.summary}
      </p>

      <div className="mt-8 space-y-6">
        <h3 className="text-lg font-semibold text-slate-100">Tech Stack</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {techStack.map((group) => {
            const GroupIcon = groupIcons[group.icon] ?? Code2;
            const accent = accents[group.accent] ?? accents.sky;

            return (
              <div key={group.label}>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <GroupIcon className={cn("h-4 w-4", accent.icon)} />
                  <span>{group.label}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                        accent.chip
                      )}
                    >
                      <TechStackIcon name={item.icon} className="h-4 w-4" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
