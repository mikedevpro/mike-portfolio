import { Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const SHOW_CONTACT = false;

const PROJECTS = [
  {
    id: "flowspark",
    title: "FlowSpark - Premium SaaS Landing Page",
    subtitle: "Performance-first SaaS landing page with modern UI and product-level polish",
    description:
      "A high-performance SaaS marketing site built with Astro and Tailwind CSS, focused on delivering a fast, modern, and conversion-driven user experience.\n\nDesigned with a component-based architecture and performance-first mindset, FlowSpark showcases clean UI systems, subtle animations, and a fully responsive layout. The project includes a branded design system, advanced dashboard-style mock UI, and a dedicated pricing page to simulate a real production-ready product site.",
    tags: ["Astro", "Tailwind CSS", "Responsive UI", "Marketing Design"],
    links: {
      live: "https://flow-spark-two.vercel.app",
      code: "https://github.com/mikedevpro/FlowSpark.git",
      // Optional: remove this line if you don't have a case study page.
      caseStudy: "/projects/flowspark-case-study",
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
      caseStudy: "/projects/cryptopulse-case-study",
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
      caseStudy: "/projects/momentum-case-study",
    },
    featured: false,
  },
  {
    id: "budget-app-v2",
    title: "Budget App V2",
    subtitle: "Next-gen personal budgeting experience",
    description:
      "A redesigned second iteration of my budgeting app focused on faster workflows, clearer financial insights, and improved UX across devices.",
    tags: ["Next.js (App Router)", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"],
    links: {
      live: "https://budget-app-v2-chi.vercel.app",
      code: "https://github.com/mikedevpro/budget_app_v2.git",
      caseStudy: "/projects/budget-app-v2-case-study",
    },
  },
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
      caseStudy: "/projects/budget-app-case-study",
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
      live: "https://load-tracker-dashboard.vercel.app",
      code: "https://github.com/mikedevpro/load_tracker.git",
      caseStudy: "/projects/load-tracker-case-study",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_32%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />
          <div className="hero-easter-egg" aria-hidden="true">🛼</div>
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:py-28">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1 text-sm font-semibold text-emerald-100 emerald-glow">
                Full-Stack Developer • React • Go • Python
              </p>
              <h1 className="hero-title-bold max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                I build polished, practical web apps with personality.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I’m Michael Nobles — a former truck driver turned full-stack developer creating responsive,
                real-world products with strong UI, solid backend architecture, and a little creative energy.  My projects showcase a range of skills and a focus on building things that people find useful and enjoyable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href={SHOW_CONTACT ? "#contact" : "#about"}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 transition hover:bg-white/10"
                >
                  {SHOW_CONTACT ? "Contact Me" : "About Me"}
                </a>
              </div>
              {!SHOW_CONTACT ? (
                <p className="mt-4 inline-flex rounded-xl border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100">
                  Contact links are temporarily offline. Please check back soon.
                </p>
              ) : null}

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["4+", "Deployed projects"],
                  ["Full-Stack", "Frontend + backend build skills"],
                  ["Career Pivot", "Truck driver to developer"],
                ].map(([value, label]) => (
                  <div key={label} className="glass-card rounded-2xl p-4">
                    <div className="text-2xl font-extrabold text-white">{value}</div>
                    <div className="mt-1 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 self-end">
              <div className="glass-card emerald-glow rounded-3xl p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                      Featured Project
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">{featuredProject.title}</h2>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live Now
                  </span>
                </div>
                <p className="whitespace-pre-line text-sm leading-7 text-slate-300">{featuredProject.description}</p>
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

              <div className="glass-card rounded-3xl p-6 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">What I bring</p>
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
              API integration, and creative frontend execution.  Built by curosity and roller skates, my projects show a range of skills and a focus on real-world value.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-stretch">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className={`group glass-card flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-slate-900 ${
                  project.featured
                    ? "emerald-glow border-emerald-300/25 bg-slate-900/90 shadow-xl shadow-emerald-950/30"
                    : "shadow-xl shadow-slate-950/20"
                }`}
              >
                <div className="flex flex-1 flex-col">
                  <div className="max-w-2xl">
                    <h3 className="min-h-[3.5rem] text-2xl font-bold leading-tight text-white">{project.title}</h3>
                    <p className="mt-2 min-h-[1.25rem] text-sm font-medium text-sky-300">{project.subtitle}</p>
                    <p className="mt-4 min-h-[8.75rem] whitespace-pre-line leading-7 text-slate-300">{project.description}</p>
                  </div>

                  <div
                    className={`mt-6 grid gap-2 sm:gap-3 ${
                      project.links.caseStudy ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {project.links.live === "#" ? (
                      <span className="inline-flex min-h-10 items-center justify-center text-center rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-slate-300">
                        Live
                      </span>
                    ) : (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center justify-center text-center rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-3 py-2 text-sm font-bold text-slate-950"
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
                    {project.links.caseStudy ? (
                      <Link
                        to={project.links.caseStudy}
                        className="inline-flex min-h-10 items-center justify-center text-center rounded-xl border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sm font-bold text-sky-200"
                      >
                        Case Study
                      </Link>
                    ) : null}
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

        <section id="skills" className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Skills</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Full-stack skills built through shipped projects
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Frontend",
                  text: "React, Next.js, TypeScript, Tailwind CSS, responsive UI systems, and polished interaction design.",
                },
                {
                  title: "Backend",
                  text: "Go, REST APIs, SQL/SQLite, Supabase, CRUD architecture, and practical data modeling.",
                },
                {
                  title: "Product + Delivery",
                  text: "Feature scoping, UX-focused development, Git/GitHub workflows, debugging, and Vercel deployment.",
                },
              ].map((item) => (
                <article key={item.title} className="glass-card rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">About</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              From trucking routes to full-stack product building
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              I transitioned from professional trucking into software engineering and now focus on building practical,
              user-centered products. My work combines clean UI, reliable backend structure, and strong ownership from
              idea to deployment.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              I am currently focused on frontend and full-stack opportunities where I can keep shipping real value,
              grow inside strong teams, and take on bigger product responsibility.
            </p>

            {SHOW_CONTACT ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/mikedevpro"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-slate-100 hover:bg-white/10"
                >
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-nobles-0242b014b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200 hover:bg-sky-400/20"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:mnobles33@gmail.com?subject=Portfolio%20Inquiry"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-4 py-2 text-sm font-bold text-slate-950"
                >
                  Email Me
                </a>
              </div>
            ) : null}
          </div>
        </section>

        {SHOW_CONTACT ? (
          <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
            <div className="glass-card rounded-[2rem] bg-gradient-to-r from-sky-500/10 via-slate-900 to-emerald-500/10 p-8 shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Connect</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Open to opportunities and meaningful product work.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                If you are hiring for frontend or full-stack roles, feel free to reach out. I enjoy building practical products
                with strong UX and reliable architecture.
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
        ) : null}
      </main>
    </Layout>
  );
}
