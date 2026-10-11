// All content below is sourced directly from Maulana's CV.
// Update here to update the whole site.

export const profile = {
  name: "Maulana Jidan Azizi",
  initials: "MJ",
  role: "Software Engineering Student",
  location: "Tangerang Selatan, Indonesia",
  phone: "+62 817-7484-3715",
  email: "maulanajidanazizi@gmail.com",
  github: "JidanAzizi",
  githubUrl: "https://github.com/JidanAzizi",
  linkedinLabel: "Maulana Jidan Azizi",
  linkedinUrl: "https://www.linkedin.com/in/maulana-jidan-azizi-508824283/",
  photo: "Profile/SelfPhoto.png",
  about:
    "I'm a Software Engineering undergraduate at Telkom University with hands-on experience in backend web development, software construction, and database systems. I enjoy solving problems, collaborating with teams, and building structured, reliable software — and I'm continuously sharpening my skills through practical, fast-paced projects, with a growing focus on AI engineering.",
};

export type ExperienceItem = {
  role: string;
  org: string;
  year: string;
  points: string[];
  featured?: boolean;
  images?: [string, string, string];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineering Intern",
    org: "PT. Instalasi Kecerdasan Buatan",
    year: "2026",
    featured: false,
    images: ["Experience/INTERN(IKB)1.jpeg", "Experience/INTERN(IKB)2.jpeg", "Experience/INTERN(IKB)3.jpeg"],
    points: [
      "Developed a WhatsApp-based rapid response bot to facilitate communication between residents and relevant authorities for emergency incidents such as theft, robbery, and fire.",
      "Implemented automated incident-handling workflows while collaborating with the development team, managing tasks effectively, and meeting project requirements and timelines.",
    ],
  },
  {
    role: "Lecturer Assistant, Database Course",
    org: "Telkom University",
    year: "2026",
    featured: false,
    points: [
      "Assisted lecturers in teaching database systems, SQL queries, normalization, and relational database concepts.",
      "Supported students during practical sessions and helped review assignments and database design tasks.",
    ],
  },
  {
    role: "Teaching Assistant, Software Architecture and Design Course",
    org: "Telkom University",
    year: "2026",
    featured: false,
    points: [
      "Assisted lecturers in conducting practical sessions on software architecture and design, covering GUI, MVP, SOLID principles, and software design implementation",
      "Guided students in implementing Spring Boot APIs and understanding Monolithic and Microservices architectures through hands-on assignmanets.",
    ],
  },
  {
    role: "Software Development - Recruitment System Bakrie & Brothers",
    org: "Bakrie & Brothers",
    year: "2026",
    featured: false,
    points: [
      "Developed a simple recruitment form application for Bakrie & Brothers using Python and PostgreSQL. The application was designed to support the employee recruitment process through a structured form-based interface and database integration.",
    ],
  },
  {
    role: "Teaching Assistant, Software Construction Course",
    org: "Telkom University",
    year: "2026",
    featured: false,
    points: [
      "Evaluated assignments and supported students in understanding object-oriented programming and software engineering concepts.",
      "Guided students in debugging, code structure improvement, and software development best practices.",
    ],
  },
  {
    role: "Computational Thinking Instructor",
    org: "Technology for Society Program",
    year: "2025",
    featured: false,
    images: ["Experience/TPLM.jpg", "Experience/TPLM2.jpg", "Experience/TPLM3.jpg"],
    points: [
      "Delivered computational thinking lessons to elementary school students through interactive activities covering problem-solving, logical reasoning, pattern recognition, and algorithmic thinking.",
      "Facilitated classroom activities while strengthening communication, public speaking, teamwork, and time management skills.",
    ],
  },
  {
    role: "Web Development",
    org: "Central Computer Improvement",
    year: "2025",
    featured: false,
    points: [
      "Developed and maintained backend components for web-based projects, focusing on data processing, API integration, and system logic.",
      "Collaborated with team members to implement functional features and support project requirements.",
    ],
  },
  {
    role: "Member, Human Resource Development Division",
    org: "Software Engineering Student Association",
    year: "2024 — 2025",
    featured: false,
    points: [
      "Contributed to student development programs aimed at improving academic, soft skills, and organizational competence.",
      "Assisted in organizing training, mentoring, and evaluation activities for members.",
    ],
  },
  {
    role: "English Camp",
    org: "Intensive English Program",
    year: "2019",
    featured: false,
    points: [
      "Actively engaged in intensive English communication activities, improving speaking, listening, and academic communication skills.",
      "Participated in group discussions, presentations, and collaborative tasks conducted fully in English.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Telkom University",
    year: "2023 — present",
  },
  {
    degree: "Senior High School — Science Major (IPA)",
    school: "SMAN 9 Tangerang Selatan",
    year: "2020 — 2023",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "Go", "C++", "PHP", "SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Node.js"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Visual Studio", "Google Colab", "Katalon Studio", "Postman", "Figma"],
  },
  {
    category: "Soft Skills",
    items: [
      "Problem Solving",
      "Teamwork & Collaboration",
      "Time Management",
      "Adaptability",
      "Communication",
      "Organizational Skills",
    ],
  },
  {
    category: "Languages",
    items: ["English", "Indonesian"],
  },
];

export const certifications = [
  {name: "Leadership Certificate", file:"Certificate/Sertifikat_Leadership.pdf"},
  {name: "Self-Management Certificate", file:"Certificate/Sertifikat_Self-Management.pdf"},
  {name: "Technopreneurship Certificate", file:"Certificate/Sertifikat_Technopreneurship.pdf"},
  {name: "Department Orientation Program Certificate", file:"Certificate/MAULANA JIDAN AZIZI - SQL PANITIA.png"},
  {name: "Kaggle — Intro to Deep Learning Certificate", file:"Certificate/Jidan Azizi - Intro to Deep Learning.pdf"},
  {name: "Kaggle — Time Series Certificate", file:"Certificate/Jidan Azizi - Time Series.pdf"},
  {name: "Kaggle — Intro to Machine Learning Certificate", file:"Certificate/Jidan Azizi - Intro to Machine Learning.pdf"},
  {name: "Kaggle — Intermediate Machine Learning Certificate", file:"Certificate/Jidan Azizi - Intermediate Machine Learning.pdf"},
];

export const awards = [
  {
    title: "3rd Place Winner — The Hack Competition",
    org: "Central Computer Improvement",
  },
  {
    title: "Staff of the Month",
    org: "Software Engineering Student Association",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
