import { memo } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Code2,
  Database,
  BarChart3,
  LayoutDashboard,
  Shield,
} from "lucide-react";

const PROJECT_LINK_CLASS =
  "tap-fast group relative z-10 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 " +
  "text-zinc-900 shadow-sm transition-colors duration-100 " +
  "dark:border-zinc-800 dark:bg-zinc-950 dark:text-white " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600";
const PROJECT_LINK_DISABLED_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-100/80 px-3 py-2 " +
  "text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400";

const CONTACT_LINK_CLASS =
  "btn-polish tap-fast group inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 " +
  "text-zinc-600 transition hover:border-zinc-200 hover:bg-white hover:text-zinc-900 " +
  "dark:text-zinc-300 dark:hover:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-white";

const PROJECTS = [
  {
    title: "Budget App (Flagship)",
    description:
      "A production-ready budget tracking application that allows users to log expenses, categorize spending, and view summaries and visual insights.",
    focus:
      "State management, clean component structure, user-friendly forms, and data persistence.",
    tech: ["React", "JavaScript", "LocalStorage", "Charts"],
    icons: [LayoutDashboard, BarChart3, Database],
    links: [
      { label: "Case Study", href: "/budget-app", icon: BookOpen },
      {
        label: "Live Demo",
        href: "https://budget-app-lake-omega.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/mikedevpro/budget_app",
        icon: Github,
      },
    ],
  },
  {
    title: "Python Spending Analytics (Budget App Companion)(Coming Soon!)",
    description:
      "A lightweight Python analytics project designed to explore and summarize spending data.",
    focus: "Data cleaning, summaries, and a clear path toward future API integration.",
    tech: ["Python", "Pandas", "CSV/JSON"],
    links: [{ label: "GitHub", href: "", icon: Github }],
    icons: [BarChart3, Database, Code2],
  },
  {
    title: "PSD/Figma to HTML Practice",
    description: "Pixel-tight layouts and responsive components built like client work.",
    focus: "Responsive layout, clean CSS structure, and accessibility basics.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "GitHub", href: "", icon: Github }],
    icons: [LayoutDashboard, Code2],
  },
  {
    title: "Risk Zone (Real-Time Canvas Game)",
    description:
      "A fast, responsive portfolio focused on clean UX, polished motion, and reusable UI patterns.",
    focus:
      "Component reuse, visual consistency, accessibility, and iterative design improvements.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    links: [
      { label: "Live Demo", href: "https://risk-zone.vercel.app/", icon: ExternalLink },
      {
        label: "GitHub",
        href: "https://github.com/mikedevpro/risk-zone",
        icon: Github,
      },
    ],
    icons: [LayoutDashboard, Code2, Shield],
  },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Context API", "Axios"],
  },
  { title: "Backend", items: ["Python", "FastAPI (building)", "REST APIs"] },
  {
    title: "Tools",
    items: ["Git/GitHub", "Vercel", "VS Code", "Postman", "Jest (fundamentals)"],
  },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:mnobles33@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mike%2C%0A%0AI%20saw%20your%20portfolio%20and...",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-nobles-0242b014b/overlay/contact-info/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/mikedevpro",
    icon: Github,
    external: true,
  },
];

function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function Home({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed}>
      <header>
        <div className="brand-glow inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          🚀 Live projects deployed with Vercel
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight brand-gradient">
          Full-Stack Web Developer building production-ready web apps with React and Python
        </h1>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I build clean, user-friendly web applications focused on real-world usability,
          clear UI, and maintainable code.
        </p>

        <div className="mt-4 wheel-pill">
          <span className="wheel-dot" aria-hidden="true" />
          <span className="text-sm text-zinc-600 dark:text-zinc-300">
            Built with momentum - powered by curiosity (and roller skates).
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="btn-polish tap-fast rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-polish tap-fast rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            Contact
          </a>
        </div>
      </header>

      <section id="projects" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Featured Projects</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Skills</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <InfoCard key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </section>

      <section id="about" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">About</h2>
        <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I&apos;m Michael, a web developer transitioning into software development after working in logistics and transportation.
            That experience shaped how I approach development: prioritizing reliability, clarity, and real-world usability.
            <br />
            <br />
            I enjoy building practical applications that people can actually use, with a focus on clean UI, readable code,
            and steady iteration. My current flagship project is a budget tracking app built with React, and I&apos;m expanding
            into Python to round out my full-stack skill set.
          </p>
        </div>
      </section>

      <section id="contact" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Contact</h2>

        <p className="mt-5 mb-4 text-sm text-zinc-600 dark:text-zinc-300">
          Open to junior or early-mid full-stack roles and excited to contribute to real production teams.
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          {CONTACT_LINKS.map((contact) => {
            const ContactIcon = contact.icon;
            const isExternal = Boolean(contact.external);
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={CONTACT_LINK_CLASS}
              >
                <ContactIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover-boost" />
                <span className="hidden sm:inline">{contact.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
              </a>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

function ProjectLink({ link }) {
  const isUnavailable = !link.href || link.href === "#";
  const isInternal = !isUnavailable && link.href.startsWith("/");
  const isExternal = !isUnavailable && isExternalHref(link.href);
  const Icon = link.icon ?? ExternalLink;

  if (isUnavailable) {
    return (
      <span className={PROJECT_LINK_DISABLED_CLASS} aria-disabled="true" title="Link coming soon">
        <Icon className="h-4 w-4" />
        <span>{link.label}</span>
        <span className="rounded-full border border-zinc-300 px-1.5 py-0.5 text-[10px] uppercase tracking-wide dark:border-zinc-700">
          Soon
        </span>
      </span>
    );
  }

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{link.label}</span>
      <ArrowUpRight className="h-4 w-4 opacity-80" />
      {isExternal ? (
        <span
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-zinc-700 opacity-0 shadow-sm transition-opacity group-focus-visible:opacity-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          role="tooltip"
        >
          Open in new tab
        </span>
      ) : null}
    </>
  );

  if (isInternal) {
    return (
      <Link to={link.href} className={PROJECT_LINK_CLASS}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={PROJECT_LINK_CLASS}
    >
      {content}
    </a>
  );
}

const MemoProjectLink = memo(ProjectLink);

const ProjectCard = memo(function ProjectCard({
  title,
  description,
  focus,
  tech,
  links,
  icons,
}) {
  return (
    <div className="neon-card motion-shimmer rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-base font-extrabold tracking-tight">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>

      {icons?.length ? (
        <div className="mt-3 flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
          {icons.map((Icon, idx) => (
            <span
              key={`${title}-icon-${idx}`}
              className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-1.5 dark:border-zinc-800 dark:bg-zinc-950"
              aria-hidden="true"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      ) : null}

      <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span className="font-semibold">Focus:</span> {focus}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
        <p className="w-full text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
          Project Links
        </p>
        {links.map((link) => (
          <MemoProjectLink key={`${link.label}-${link.href}`} link={link} />
        ))}
      </div>
    </div>
  );
});

const InfoCard = memo(function InfoCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="font-extrabold tracking-tight">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default memo(Home);
