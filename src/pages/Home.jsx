import Layout from "../components/Layout.jsx";
import { Link } from "react-router-dom";


export default function Home({ dark, setDark }) {
  return (
    <Layout dark={dark} setDark={setDark}>
      {/* HERO */}
      <header>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm
                        dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          🚀 Live projects deployed with Vercel
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Full-Stack Web Developer building production-ready web apps with React and Python
        </h1>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I build clean, user-friendly web applications focused on real-world usability, clear UI,
          and maintainable code.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow
                       hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm
                       hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            Contact
          </a>
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Featured Projects</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Budget App (Flagship)"
            description="A production-ready budget tracking application that allows users to log expenses, categorize spending, and view summaries and visual insights."
            focus="State management, clean component structure, user-friendly forms, and data persistence."
            tech={["React", "JavaScript", "LocalStorage", "Charts"]}
            links={[
              { label: "Case Study", href: "/budget-app" },
              { label: "Live Demo", href: "https://budget-app-lake-omega.vercel.app/" },
              { label: "GitHub", href: "https://github.com/mikedevpro/budget_app" },
            ]}
          />

          <ProjectCard
            title="Python Spending Analytics (Companion)"
            description="A lightweight Python analytics project designed to explore and summarize spending data."
            focus="Data cleaning, summaries, and a clear path toward future API integration."
            tech={["Python", "Pandas", "CSV/JSON"]}
            links={[{ label: "GitHub", href: "#" }]}
          />

          <ProjectCard
            title="PSD/Figma to HTML Practice"
            description="Pixel-tight layouts and responsive components built like client work."
            focus="Responsive layout, clean CSS structure, and accessibility basics."
            tech={["HTML", "CSS", "JavaScript"]}
            links={[{ label: "GitHub", href: "#" }]}
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Skills</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard title="Frontend" items={["React", "JavaScript", "HTML", "CSS", "Context API", "Axios"]} />
          <InfoCard title="Backend" items={["Python", "FastAPI (building)", "REST APIs"]} />
          <InfoCard title="Tools" items={["Git/GitHub", "Vercel", "VS Code", "Postman", "Jest (fundamentals)"]} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">About</h2>
        <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                        dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I’m Michael, a web developer transitioning into software development after working in logistics and transportation.
            That experience shaped how I approach development: prioritizing reliability, clarity, and real-world usability.
            <br /><br />
            I enjoy building practical applications that people can actually use, with a focus on clean UI, readable code,
            and steady iteration. My current flagship project is a budget tracking app built with React, and I’m expanding
            into Python to round out my full-stack skill set.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Contact</h2>

        <p className="mt-5 mb-4 text-sm text-zinc-600 dark:text-zinc-300">
          Open to junior or early-mid full-stack roles and excited to contribute to real production teams.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <a className="hover:text-zinc-900 dark:hover:text-white" href="mailto: Mnobles33@gmail.com">
            Mnobles33@gmail.com
          </a>
          <span className="text-zinc-400">•</span>
          <a className="hover:text-zinc-900 dark:hover:text-white" href="linkedin.com/in/michael-nobles-0242b014b" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="text-zinc-400">•</span>
          <a className="hover:text-zinc-900 dark:hover:text-white" href="https://github.com/mikedevpro" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </Layout>
  );
}

function ProjectCard({ title, description, focus, tech, links }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition
                    hover:-translate-y-0.5 hover:shadow-md
                    dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-base font-extrabold tracking-tight">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>

      <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span className="font-semibold">Focus:</span> {focus}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700
                       dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
        {links.map((l) =>
          l.href.startsWith("/") ? (
            <Link
              key={l.label}
              to={l.href}
              className="text-zinc-900 hover:underline dark:text-white"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-900 hover:underline dark:text-white"
            >
              {l.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm
                    dark:border-zinc-800 dark:bg-zinc-900">
      <div className="font-extrabold tracking-tight">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
