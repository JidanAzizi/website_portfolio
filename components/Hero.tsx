import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon, ImageIcon, DownloadIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-content mx-auto px-6 sm:px-8 pt-40 pb-28 sm:pt-48 sm:pb-36"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
        <div>
          <p
            className="font-mono text-[13px] text-accent mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            Hi, I&apos;m {profile.name.split(" ")[0]} — {profile.role}
          </p>

          <h1
            className="text-[13vw] leading-[0.98] sm:text-[56px] md:text-[64px] font-medium tracking-tight text-ink opacity-0 animate-fade-up"
            style={{ animationDelay: "0.14s" }}
          >
            {profile.name}
          </h1>

          <p
            className="mt-8 max-w-prose text-[17px] sm:text-lg leading-relaxed text-ink-soft opacity-0 animate-fade-up"
            style={{ animationDelay: "0.24s" }}
          >
            {profile.about}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.34s" }}
          >
            
             <a href="#experience"
              className="inline-flex items-center gap-2 bg-ink text-paper text-[14px] font-medium px-5 py-3 rounded-full hover:bg-accent-strong transition-colors"
            >
              View my work
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
            
             <a href="#contact"
              className="inline-flex items-center gap-2 border border-line-strong text-ink text-[14px] font-medium px-5 py-3 rounded-full hover:border-ink transition-colors"
            >
              Contact me
            </a>
            <a
              href="CV/CV_Maulana_Jidan_Azizi.pdf"
              download
              className="inline-flex items-center gap-2 border border-line-strong text-ink text-[14px] font-medium px-3 py-3 rounded-full hover:border-ink transition-colors"
            >
              Download CV
              <DownloadIcon className="w-4 h-4" />
            </a>
          </div>

          <div
            className="mt-14 flex items-center gap-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-ink-soft hover:text-ink transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-soft hover:text-ink transition-colors"
            >
              <LinkedinIcon />
            </a>
            <span className="h-4 w-px bg-line-strong" />
            <span className="font-mono text-[12px] text-ink-faint">
              Based in {profile.location}
            </span>
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-up order-first lg:order-last"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full aspect-[4/5] object-cover rounded-2xl border border-line"
            />
          ) : (
            <div className="w-full aspect-[4/5] rounded-2xl border border-dashed border-line-strong flex flex-col items-center justify-center gap-2 text-ink-faint">
              <ImageIcon className="w-6 h-6" />
              <span className="font-mono text-[12px]">Add photo</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}