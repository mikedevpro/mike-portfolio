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
  Gamepad2,
  FlaskConical,
  SlidersHorizontal,
} from "lucide-react";

const PROJECT_LINK_CLASS =
  "tap-fast group relative z-10 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 " +
  "text-zinc-900 shadow-sm transition-all duration-150 ease-out " +
  "dark:border-zinc-800 dark:bg-zinc-950 dark:text-white " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 " +
  "cursor-pointer " +
  "active:scale-[0.985] active:bg-zinc-100 dark:active:bg-zinc-800 " +
  "min-h-[44px] px-4 py-2.5 " +
  "touch-manipulation";
const PROJECT_LINK_DISABLED_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-100/80 px-3 py-2 " +
  "text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 " +
  "cursor-not-allowed opacity-75 " +
  "min-h-[44px] px-4 py-2.5 " +
  "touch-manipulation";
const CONTACT_LINK_CLASS =
  "btn-polish tap-fast group inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 " +
  "text-zinc-600 transition-all duration-150 ease-out hover:border-zinc-200 hover:bg-white hover:text-zinc-900 " +
  "dark:text-zinc-300 dark:hover:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-white " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 " +
  "cursor-pointer " +
  "active:scale-[0.985] active:bg-zinc-100 dark:active:bg-zinc-800 " +
  "min-h-[44px] px-4 py-2.5 " +
  "touch-manipulation";
const SHOW_CONTACT = false;

const PROJECTS = [
  {
    title: "CryptoPulse - Crypto Analytics Dashboard App",
    description:
      "CryptoPulse is a fully responsive crypto market dashboard that delivers real-time cryptocurrency data through a clean and intuitive interface. Users can search and sort coins, explore detailed market data, visualize price trends with interactive charts, and build a personalized watchlist using persistent favorites. The application demonstrates modern frontend development practices, including API integration, component-based architecture, dynamic routing, and data visualization.",
    focus:
      "Data fetching, resilient UI states, and translating financial data into clear, scannable visuals.",
    outcome:
      "Built a fast, polished dashboard experience that surfaces key market and asset details at a glance.",
    tech: ["React", "TypeScript", "API Integration", "CoinGecko API", "Recharts", "Tailwind CSS", "Responsive Design", "Data Visualization"],
    links: [
      { label: "Case Study", href: "/cryptopulse", icon: BookOpen },
      { label: "Live Demo", href: "https://crypto-pulse-ashy.vercel.app", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/mikedevpro/CryptoPulse", icon: Github },
    ],
    icons: [LayoutDashboard, BarChart3, Database],
  },
  {
    title: "Budget App - Full-Stack Expense Tracker",
    description:
      "A production-ready budget tracking application that allows users to log expenses, categorize spending, and view summaries and visual insights.",
    focus:
      "State management, clean component structure, user-friendly forms, and data persistence.",
    outcome:
      "Shipped a stable budgeting workflow with fast expense entry and clear spending insights for day-to-day use.",
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
    title: "Risk Zone - Full-Stack Arcade Survival Game",
    description:
      "Real-time Canvas game engine with dynamic difficulty, boss waves, and a global leaderboard powered by FastAPI.",
    focus:
      "Component reuse, visual consistency, accessibility, and iterative design improvements.",
    outcome:
      "Delivered a polished browser game demo with smooth controls, balanced progression, and public deployment.",
    tech: ["React", "Canvas API", "FastAPI", "SQLAlchemy", "SQLite", "Vercel", "Render"],
    links: [
      { label: "Case Study", href: "/risk-zone", icon: BookOpen},
      { label: "Live Demo", href: "https://risk-zone.vercel.app/", icon: ExternalLink },
      {
        label: "GitHub",
        href: "https://github.com/mikedevpro/risk-zone",
        icon: Github,
      },
    ],
    icons: [LayoutDashboard, Code2, Shield],
  },
  {
    title: "Apex-Orbit - Game",
    description:
      "A browser-based game focused on dynamic movement and challenge pacing, designed for quick sessions and replayability.",
    focus:
      "Input handling, canvas rendering flow, game-loop timing, and performance-conscious front-end architecture.",
    outcome:
      "Built a lightweight, polished game experience with clear gameplay progression and responsive controls.",
    tech: ["React", "JavaScript", "Canvas API", "Responsive Design", "Game Design", "Vite"],
    links: [
      { label: "Case Study", href: "/apex-orbit", icon: BookOpen },
      { label: "Live Demo", href: "https://apex-orbit-nxd7.vercel.app", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/mikedevpro/apex_orbit", icon: Github },
    ],
    icons: [Gamepad2, LayoutDashboard, Code2],
  },
  {
    title: "Python Spending Analytics - Backend Companion to Budget App",
    description:
      "A lightweight Python analytics project designed to explore and summarize spending data.",
    focus: "Data cleaning, summaries, and a clear path toward future API integration.",
    outcome:
      "Built reusable analysis scripts that speed up spending reviews and support future backend/API integration.",
    tech: ["Python", "Pandas", "CSV/JSON"],
    links: [{ label: "GitHub", href: "https://github.com/mikedevpro/budget_audit_cli.git", icon: Github }],
    icons: [BarChart3, Database, Code2],
  },
  {
    title: "PSD/Figma to HTML Practice",
    description: "Pixel-tight layouts and responsive components built like client work.",
    focus: "Responsive layout, clean CSS structure, and accessibility basics.",
    outcome:
      "Produced responsive mock-to-code builds that improved front-end precision and component consistency.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Live Demo", href: "https://psdtohtml-sample.vercel.app", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/mikedevpro/PSD-to-HTML-sample/tree/main", icon: Github },
    ],
    icons: [LayoutDashboard, Code2],
  },
  {
    title: "Photography Website",
    description:
      "A responsive photography portfolio website designed to showcase client work with clean visuals, fast performance, and an easy path to future business features.",
    focus: "Build a professional, conversion-friendly portfolio for a working photographer, with a structure that can scale into a full business site.",
    outcome:
      "Launched a live portfolio that presents work professionally and provides a clear foundation for business expansion.",
    tech: ["React", "Node", "TypeScript", "Next", "Tailwind CSS"],
    links: [
      { label: "Case Study", href: "/photography-website", icon: BookOpen },
      { label: "Live Demo", href: "https://lancephotosite.vercel.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/mikedevpro/lance_photo_site", icon: Github },
    ],
    icons: [LayoutDashboard, Code2],
  },
  {
    title: "LaunchPad AI - SaaS Landing Page",
    description:
      "LaunchPad AI is a front-end portfolio project designed to showcase modern landing page development for SaaS-style products.",
    focus:
      "Built with React and Tailwind CSS using reusable components and structured content data for maintainable, scalable UI, with mobile-first navigation and a polished responsive experience.",
    outcome:
      "Delivered a conversion-focused landing page featuring an animated FAQ accordion, subtle Framer Motion motion effects, and strong cross-device consistency.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    links: [
      { label: "Case Study", href: "/launchpad-ai", icon: BookOpen },
      {
        label: "Live Demo",
        href: "https://launchpad-ai-theta.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/mikedevpro/launchpad-ai",
        icon: Github,
      },
    ],
    icons: [LayoutDashboard, Database, Code2],
  },
  {
    title: "Figma to React Responsive Landing Page (Northstar Agency)",
    description:
      "Northstar Agency is a front-end portfolio project focused on translating a clean, modern design concept into a responsive React application.",
    focus:
      "Transforming a visual layout into structured reusable components while preserving hierarchy, spacing, and responsive behavior.",
    outcome:
      "Delivered a production-style landing page build with reusable section architecture and dependable cross-device consistency.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Responsive Design", "Reusable Components"],
    links: [
      { label: "Case Study", href: "/northstar-agency", icon: BookOpen },
      { label: "Live Demo", href: "https://northstar-agency.vercel.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/mikedevpro/northstar-agency", icon: Github },
    ],
    icons: [LayoutDashboard, LayoutDashboard, Code2],
  },
  {
    title: "Load Tracker",
    description:
      "A lightweight productivity-style project for tracking daily load and progress workflows.",
    focus: "Data organization and clean UI flow planning for a clear, extensible dashboard-like experience.",
    outcome:
      "Designed the project structure to support a future launch with maintainable frontend architecture and scalable feature growth.",
    tech: ["Ruby On Rails", "React", "Tailwind CSS"],
    links: [
      { label: "Case Study", href: "/load-tracker", icon: BookOpen },
      { label: "Live Demo", href: "#", icon: ExternalLink },
      { label: "GitHub", href: "#", icon: Github },
    ],
    icons: [LayoutDashboard, LayoutDashboard, Code2],
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

const PLAYGROUND_ITEMS = [
  {
    title: "Risk Zone Challenge",
    description: "Fast reflex canvas game with score tracking and responsive controls.",
    icon: Gamepad2,
    href: "https://risk-zone.vercel.app/",
    cta: "Play Now",
  },
  {
    title: "Budget App Sandbox",
    description: "Try the full budgeting workflow with categories, charts, and summaries.",
    icon: FlaskConical,
    href: "https://budget-app-lake-omega.vercel.app/",
    cta: "Launch Demo",
  },
  {
    title: "Apex Orbit",
    description: "An interactive game experience centered around orbit control and responsive challenge loops.",
    icon: Gamepad2,
    href: "#",
    cta: "Coming Soon",
  },
  // {
  //   title: "Fun Video Games",
  //   description: "More fun experimental games coming soon!",
  //   icon: SlidersHorizontal,
  //   href: "#",
  //   cta: "More Experiments Soon"
  // },
];

const COMING_SOON_PLAYGROUND_ITEMS = [
  {
    title: "GoLang Project (Momentum API)",
    description: "A Go-powered API playground focused on clean architecture and high-performance endpoints.",
    icon: Database,
    href: "#",
    cta: "Coming Soon",
  },
  {
    title: "Authentication App",
    description: "Full-stack authentication experience with login, protected routes, and improved user state handling.",
    icon: Shield,
    href: "#",
    cta: "Coming Soon",
  },
  {
    title: "Upgrades to Current Projects",
    description:
      "Polished feature expansions and UX upgrades for existing apps across the portfolio.",
    icon: SlidersHorizontal,
    href: "#",
    cta: "Coming Soon",
  },
];

function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function Home({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} showContact={SHOW_CONTACT}>
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
            className="btn-polish tap-fast rounded-xl min-h-[44px] bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 active:scale-[0.985] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 touch-manipulation"
          >
            View Projects
          </a>
          {SHOW_CONTACT ? (
            <a
              href="#contact"
              className="btn-polish tap-fast rounded-xl min-h-[44px] border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 active:scale-[0.985] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 touch-manipulation"
            >
              Contact
            </a>
          ) : null}
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

      <section id="playground" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Interactive Playground</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
          Small interactive builds and hands-on demos that highlight UI behavior, state, and game-like interactions.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLAYGROUND_ITEMS.map((item) => (
            <PlaygroundCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-10 border-t border-zinc-200/70 pt-6 dark:border-zinc-800/70">
          <h3 className="text-lg font-bold tracking-tight">Coming Soon</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            GoLang project (Momentum API), Authentication App, and upgrades to current projects.
            <br />
            More exciting apps and projects coming soon!
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMING_SOON_PLAYGROUND_ITEMS.map((item) => (
              <PlaygroundCard key={item.title} {...item} />
            ))}
          </div>
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

      <section id="about" className="mt-14 border-t border-zinc-200/70 pt-8 dark:border-zinc-800/70">
        <h2 className="text-xl font-bold tracking-tight">About</h2>
        <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I&apos;m Michael, a web developer focused on shipping practical, user-focused applications with clean, scalable front-end
            architecture. I&apos;ve recently launched a few featured projects, including CryptoPulse (crypto analytics),
            Budget App (expense tracking), Apex-Orbit (game), and Risk Zone (browser game).
            <br />
            <br />
            I care about dependable UX, clear
            data presentation, and fast, maintainable code, and I&apos;m currently expanding into systems work like API-first
            development, authentication flows, and full-stack architecture.
          </p>
        </div>
      </section>

      {SHOW_CONTACT ? (
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
      ) : null}
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
      <ArrowUpRight className="h-4 w-4 opacity-80 transition-opacity duration-150" />
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

const PlaygroundCard = memo(function PlaygroundCard({ title, description, href, cta, icon: Icon }) {
  const isUnavailable = !href || href === "#";
  const isExternal = !isUnavailable && isExternalHref(href);

  return (
    <div className="neon-card rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-3 text-base font-extrabold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>

      <div className="mt-5">
        {isUnavailable ? (
          <span className={PROJECT_LINK_DISABLED_CLASS} aria-disabled="true">
            <span>{cta}</span>
          </span>
        ) : (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={PROJECT_LINK_CLASS}
          >
            <span>{cta}</span>
            <ArrowUpRight className="h-4 w-4 opacity-80" />
          </a>
        )}
      </div>
    </div>
  );
});

const ProjectCard = memo(function ProjectCard({
  title,
  description,
  focus,
  outcome,
  tech,
  links,
  icons,
}) {
  return (
    <div className="neon-card card-polish motion-shimmer rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
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
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span className="font-semibold">Outcome:</span> {outcome}
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
