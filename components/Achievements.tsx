import { awards, certifications } from "@/lib/data";
import { ArrowUpRightIcon } from "./Icons";
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
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-start justify-between gap-4 pl-0 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full"
              >
                <span className="text-[15px] text-ink-soft leading-relaxed flex-1">
                  {cert.name}
                </span>
                {cert.file ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 font-mono text-[11px] text-accent border border-accent/40 hover:bg-accent-soft transition-colors rounded-full px-2.5 py-1"
                  >
                    View
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="shrink-0 font-mono text-[11px] text-ink-faint border border-dashed border-line-strong rounded-full px-2.5 py-1">
                    Add file
                  </span>
                )}
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