"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, ArrowUpRightIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedinUrl,
    icon: LinkedinIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[\s-]/g, "")}`,
    icon: PhoneIcon,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${name || "a visitor"}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section
      id="contact"
      className="max-w-content mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-line"
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
        <Reveal>
          <SectionHeading eyebrow="contact" title="Let's build something" />
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft max-w-xs">
            Open to internships, collaborations, and opportunities in
            software and AI engineering. Reach out — I&apos;d love to hear
            from you.
          </p>
        </Reveal>

        <Reveal className="reveal-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between border border-line rounded-2xl px-5 py-4 hover:border-accent transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-ink-faint group-hover:text-accent transition-colors" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[11px] text-ink-faint uppercase">
                      {label}
                    </span>
                    <span className="text-[14px] text-ink">{value}</span>
                  </span>
                </span>
                <ArrowUpRightIcon className="w-4 h-4 text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          <form
            action={mailtoHref}
            method="get"
            className="max-w-prose space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-[11px] text-ink-faint uppercase mb-2"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-transparent border-b border-line-strong pb-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-accent transition-colors outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[11px] text-ink-faint uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let's talk about..."
                className="w-full bg-transparent border-b border-line-strong pb-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-accent transition-colors outline-none resize-none"
              />
            </div>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 bg-ink text-paper text-[14px] font-medium px-5 py-3 rounded-full hover:bg-accent-strong transition-colors"
            >
              Send message
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
