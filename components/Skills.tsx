import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-content mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-line"
    >
      <Reveal>
        <SectionHeading eyebrow="skills" title="What I work with" />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {skills.map((group, i) => (
          <Reveal key={group.category} className={`reveal-${Math.min((i % 4) + 1, 4)}`}>
            <h3 className="font-mono text-[12px] tracking-wide text-ink-faint uppercase mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] text-ink-soft border border-line-strong rounded-full px-3.5 py-1.5 hover:border-accent hover:text-ink transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
