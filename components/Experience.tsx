import { experience } from "@/lib/data";
import { ImageIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-content mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-line"
    >
      <Reveal>
        <SectionHeading eyebrow="experience" title="Where I've worked" />
      </Reveal>

      <ol className="mt-16 relative">
        <div
          className="absolute left-[5px] top-2 bottom-2 w-px bg-line-strong"
          aria-hidden="true"
        />
        {experience.map((item, i) => (
          <Reveal
            as="li"
            key={item.role + item.year}
            className={`relative pl-10 ${i === 0 ? "" : "mt-12"}`}
          >
            <span
              className={`absolute left-0 top-1.5 w-[11px] h-[11px] ${
                item.featured
                  ? "bg-accent"
                  : "bg-paper border border-line-strong"
              }`}
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
              <h3 className="text-[17px] sm:text-lg font-medium text-ink">
                {item.role}
                {item.featured && (
                  <span className="ml-3 align-middle font-mono text-[11px] font-normal text-accent bg-accent-soft px-2 py-0.5 rounded-full">
                    featured
                  </span>
                )}
              </h3>
              <span className="font-mono text-[13px] text-ink-faint shrink-0">
                {item.year}
              </span>
            </div>
            <p className="text-[14px] text-ink-soft mt-0.5">{item.org}</p>

            <ul className="mt-3 space-y-2 max-w-prose">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="text-[15px] leading-relaxed text-ink-soft pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-5">
              {(item.images ?? ["", "", ""]).map((src, idx) =>
                src ? (
                  <img
                    key={idx}
                    src={src}
                    alt={`${item.role} at ${item.org} — photo ${idx + 1}`}
                    className="w-full aspect-[4/3] object-cover rounded-xl border border-line grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div
                    key={idx}
                    className="w-full aspect-[4/3] rounded-xl border border-dashed border-line-strong flex flex-col items-center justify-center gap-1.5 text-ink-faint"
                  >
                    <ImageIcon className="w-5 h-5" />
                    <span className="font-mono text-[11px] hidden sm:inline">
                      Add photo
                    </span>
                  </div>
                )
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}