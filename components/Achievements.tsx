import { awards, certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-content mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-line"
    >
      <Reveal>
        <SectionHeading eyebrow="achievements" title="Certifications & awards" />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">
        <Reveal className="reveal-2">
          <h3 className="font-mono text-[12px] tracking-wide text-ink-faint uppercase mb-5">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="text-[15px] text-ink-soft leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full"
              >
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="reveal-3">
          <h3 className="font-mono text-[12px] tracking-wide text-ink-faint uppercase mb-5">
            Awards & Activities
          </h3>
          <ul className="space-y-5">
            {awards.map((award) => (
              <li key={award.title} className="border-b border-line pb-5 last:border-0 last:pb-0">
                <p className="text-[15px] font-medium text-ink">{award.title}</p>
                <p className="text-[13px] text-ink-soft mt-1">{award.org}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
