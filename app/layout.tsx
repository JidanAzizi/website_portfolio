import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Maulana Jidan Azizi — Software Engineer",
  description:
    "Portfolio of Maulana Jidan Azizi, a Software Engineering student at Telkom University with experience in backend development, databases, and AI engineering.",
  keywords: [
    "Maulana Jidan Azizi",
    "Software Engineer",
    "AI Engineering",
    "Backend Developer",
    "Telkom University",
  ],
  authors: [{ name: "Maulana Jidan Azizi" }],
  openGraph: {
    title: "Maulana Jidan Azizi — Software Engineer",
    description:
      "Software Engineering student experienced in backend development, databases, and AI engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="font-sans antialiased bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}