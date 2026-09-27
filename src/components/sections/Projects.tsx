import content from "../../data/content.json";

const { projectItems } = content;

export default function Projects({ className }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl font-semibold text-white">
        Projects
      </h2>
      <div className="mt-8 space-y-8 border-l border-white/10 pl-8">
        {projectItems.map((item) => (
          <div key={item.title} className="relative">
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
                aria-label={`View project ${item.title} (opens in a new tab)`}
              >
                View project
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
