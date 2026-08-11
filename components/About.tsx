import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 sm:px-8 py-20 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
        <Reveal>
          <SectionHeading eyebrow="about" title="A little about me" />
        </Reveal>

        <Reveal className="reveal-2">
          <div className="max-w-prose space-y-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
            <p>
              I&apos;m a Software Engineering undergraduate at{" "}
              <span className="text-ink font-medium">Telkom University</span>,
              with hands-on experience across backend web development,
              software construction, and database systems.
            </p>
            <p>
              I enjoy solving problems methodically and collaborating closely
              with teams to ship structured, reliable software. Alongside my
              coursework, I&apos;ve started applying that foundation to{" "}
              <span className="text-ink font-medium">AI engineering</span> —
              building practical, automated systems and continuing to learn
              in fast-paced, real-world environments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
