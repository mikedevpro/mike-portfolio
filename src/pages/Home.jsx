import { Mail, Linkedin, Github } from "lucide-react";
import Layout from "../components/Layout.jsx";

const SHOW_CONTACT = true;

const PROJECTS = [
  {
    id: "budget-app",
    title: "Budget App - Full-Stack Expense Tracker",
    subtitle: "Full-stack finance tracker",
    description:
      "A polished budgeting application focused on real-world money tracking, user-friendly dashboards, and thoughtful product design.",
    tags: ["React", "JavaScript", "LocalStorage", "Charts"],
    links: {
      live: "https://budget-app-lake-omega.vercel.app/",
      code: "https://github.com/mikedevpro/budget_app",
    },
  },
  {
    id: "momentum-task-manager",
    title: "Momentum - Full-Stack Task Manager",
    subtitle: "Production-ready full-stack task platform",
    description:
      "Momentum is a full-stack task manager I built while transitioning from trucking into software engineering. It showcases my ability to design and build complete systems—from a Go backend and SQL database to a dynamic React UI.",
    tags: ["Go", "SQLite", "React", "REST API", "Vite", "Tailwind CSS"],
    links: {
      live: "https://momentum-frontend-zeta.vercel.app",
      code: "https://github.com/mikedevpro/momentum-frontend.git",
    },
    featured: true,
  },
  {
    id: "cryptopulse-analytics-dashboard",
    title: "CryptoPulse - Crypto Analytics Dashboard",
    subtitle: "Real-time crypto market dashboard",
    description:
      "A sleek crypto app that highlights API integration, data display, and modern frontend UX for real-time market exploration.",
    tags: ["React", "TypeScript", "API Integration", "CoinGecko API", "Recharts"],
    links: {
      live: "https://crypto-pulse-ashy.vercel.app",
      code: "https://github.com/mikedevpro/CryptoPulse",
    },
  },
  {
    id: "risk-zone",
    title: "Risk-Zone",
    subtitle: "Risk management arcade survival game",
    description:
      "Fast, interactive game experience with dynamic difficulty and responsive canvas mechanics.",
    tags: ["JavaScript", "Canvas", "Game Logic", "React", "Vite", "Render"],
    links: {
      live: "https://risk-zone.vercel.app/",
      code: "https://github.com/mikedevpro/risk-zone",
    },
  },
  {
    id: "apex-orbit-game",
    title: "Apex-Orbit - Game",
    subtitle: "Apex-Orbit action-combat browser game",
    description:
      "A browser game centered on quick sessions and replayability through movement-based challenge pacing.",
    tags: ["React", "JavaScript", "Canvas API", "Responsive Design", "Game Design"],
    links: {
      live: "https://apex-orbit-nxd7.vercel.app",
      code: "https://github.com/mikedevpro/apex_orbit",
    },
  },
  {
    id: "python-spending-analytics",
    title: "Python Spending Analytics - Budget Companion",
    subtitle: "Python spending analytics scripts",
    description: "A lightweight Python analytics project designed to explore and summarize spending data.",
    tags: ["Python", "Pandas", "CSV/JSON", "Analytics"],
    links: {
      live: "#",
      code: "https://github.com/mikedevpro/budget_audit_cli.git",
    },
  },
  {
    id: "photography-website",
    title: "Photography Website",
    subtitle: "Responsive portfolio showcase",
    description:
      "A responsive photography portfolio website designed to showcase work with clean visuals, fast performance, and business-ready structure.",
    tags: ["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      live: "https://lancephotosite.vercel.app/",
      code: "https://github.com/mikedevpro/lance_photo_site",
    },
  },
  {
    id: "launchpad-ai",
    title: "LaunchPad AI - SaaS Landing Page",
    subtitle: "Modern SaaS landing page build",
    description:
      "A front-end portfolio project designed to showcase modern landing page development for SaaS-style products.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    links: {
      live: "https://launchpad-ai-theta.vercel.app/",
      code: "https://github.com/mikedevpro/launchpad-ai",
    },
  },
  {
    id: "northstar-agency-landing-page",
    title: "Figma to React Responsive Landing Page (Northstar Agency)",
    subtitle: "Figma-to-React conversion build",
    description:
      "A focused conversion of a clean design concept into a responsive React application.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design", "Reusable Components"],
    links: {
      live: "https://northstar-agency.vercel.app/",
      code: "https://github.com/mikedevpro/northstar-agency",
    },
  },
  {
    id: "load-tracker",
    title: "Load Tracker",
    subtitle: "Workflow productivity utility",
    description:
      "A lightweight productivity project for tracking daily load and progress workflows.",
    tags: ["Ruby on Rails", "React", "Tailwind CSS"],
    links: {
      live: "#",
      code: "#",
    },
  },
];

const CONTACT_LINKS = [
  { href: "mailto:mnobles33@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mike%2C%0A%0AI%20saw%20your%20portfolio%20and...", icon: Mail, text: "Email Me" },
  { href: "https://github.com/mikedevpro", icon: Github, text: "GitHub" },
  { href: "https://www.linkedin.com/in/michael-nobles-0242b014b/overlay/contact-info/", icon: Linkedin, text: "LinkedIn" },
];

const featuredProject = PROJECTS.find((project) => project.featured) ?? PROJECTS[0];

export default function Home({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} showContact={SHOW_CONTACT}>
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:py-28">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-200">
                Full-Stack Developer • React • Go • Python
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                I build polished, practical web apps with personality.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I’m Michael Nobles — a former truck driver turned full-stack developer creating responsive,
                real-world products with strong UI, solid backend architecture, and a little creative energy.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-950/40 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["4+", "Deployed projects"],
                  ["Full-Stack", "Frontend + backend build skills"],
                  ["Career Pivot", "Truck driver to developer"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="mt-1 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 self-end">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                      Featured Project
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">{featuredProject.title}</h2>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live Now
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-300">{featuredProject.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={featuredProject.links.live}
                    className="rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2 text-sm font-bold text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={featuredProject.links.code}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">What I bring</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>• Responsive UI with strong visual polish</li>
                  <li>• API integration and backend architecture</li>
                  <li>• Product-minded development for real users</li>
                  <li>• A memorable personal story and strong work ethic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Projects</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Work that proves range and depth
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              My portfolio is organized to tell a clear story: product thinking, backend strength,
              API integration, and creative frontend execution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-stretch">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className={`group flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900 ${
                  project.featured
                    ? "border-sky-400/20 bg-slate-900/90 shadow-xl shadow-sky-950/20"
                    : "border-white/10 bg-slate-900/70"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl flex-1">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-sky-300">{project.subtitle}</p>
                    <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                  </div>
                  <div className="grid w-full min-w-0 flex-none grid-cols-2 gap-2 sm:w-auto sm:gap-3">
                    {project.links.live === "#" ? (
                      <span className="inline-flex min-h-10 items-center justify-center text-center rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-slate-300">
                        Live
                      </span>
                    ) : (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center justify-center text-center rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-3 py-2 text-sm font-bold text-white"
                      >
                        Live
                      </a>
                    )}
                    {project.links.code === "#" ? (
                      <span className="inline-flex min-h-10 items-center justify-center text-center rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-slate-300">
                        Code
                      </span>
                    ) : (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center justify-center text-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-100"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3 md:px-10">
            {[
              {
                title: "Frontend polish",
                text: "Responsive layouts, visual hierarchy, interaction states, and product-minded UI decisions.",
              },
              {
                title: "Backend capability",
                text: "REST APIs, database integration, route structure, CRUD operations, and deployment workflows.",
              },
              {
                title: "Creative edge",
                text: "Games, motion, branding, and personality-driven details that make projects memorable.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-sky-500/10 via-slate-900 to-violet-500/10 p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Let’s connect</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Building practical full-stack products and growing into bigger ownership.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              I’m currently growing my full-stack career through shipped, real projects. If you’re hiring for a
              frontend or full-stack role, I’d love to connect.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.text}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 inline-flex items-center gap-2"
                  >
                    {link.text}
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
