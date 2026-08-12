import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-paper/70 border-t border-paper/10">
      <div className="max-w-content mx-auto px-6 sm:px-8 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <p className="text-paper text-[15px] font-medium">{profile.name}</p>
          <p className="text-[13px] mt-1">{profile.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-paper transition-colors"
          >
            <MailIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-paper transition-colors"
          >
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-paper transition-colors"
          >
            <LinkedinIcon className="w-[18px] h-[18px]" />
          </a>
        </div>

        <p className="font-mono text-[12px] text-paper/50">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
