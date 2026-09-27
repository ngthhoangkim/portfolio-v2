import content from "../../data/content.json";

const { experienceItems } = content;

export default function Experience({ className }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-2xl font-semibold text-white">
        Experience
      </h2>
      <div className="mt-8 space-y-8 border-l border-white/10 pl-8">
        {experienceItems.map((item) => (
          <div key={item.role} className="relative">
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
  );
}
