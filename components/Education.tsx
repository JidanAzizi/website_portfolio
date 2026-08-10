import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-content mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-line"
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
        <Reveal>
          <SectionHeading eyebrow="education" title="Academic background" />
        </Reveal>

        <Reveal className="reveal-2 max-w-prose divide-y divide-line">
          {education.map((item) => (
            <div
              key={item.degree}
              className="py-6 first:pt-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
            >
              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  {item.degree}
                </h3>
                <p className="text-[14px] text-ink-soft mt-0.5">
                  {item.school}
                </p>
              </div>
              <span className="font-mono text-[13px] text-ink-faint shrink-0">
                {item.year}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
