import { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-10">
          {/* NAV */}
          <nav className="flex items-center justify-between">
            <div className="font-extrabold tracking-tight text-lg">Mike Nobles</div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
                <a className="hover:text-zinc-900 dark:hover:text-white" href="#projects">
                  Projects
                </a>
                <a className="hover:text-zinc-900 dark:hover:text-white" href="#skills">
                  Skills
                </a>
                <a className="hover:text-zinc-900 dark:hover:text-white" href="#about">
                  About
                </a>
                <a className="hover:text-zinc-900 dark:hover:text-white" href="#contact">
                  Contact
                </a>
              </div>

              <button
                type="button"
                onClick={() => setDark((v) => !v)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold shadow-sm
                           hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                aria-label="Toggle dark mode"
              >
                {dark ? "Light" : "Dark"}
              </button>
            </div>
          </nav>

          {/* HERO */}
          <header className="mt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm
                            dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for junior/full-stack roles
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Full-Stack Web Developer
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I build clean, user-friendly web apps with React and Python—focused on practical features,
              thoughtful UI, and readable code.
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
                description="Expense tracking with categories, summaries, and charts. Built as a frontend-first product with a roadmap to expand full-stack."
                tech={["React", "JavaScript", "LocalStorage", "Charts"]}
                links={[
                  { label: "Live Demo", href: "https://budget-app-lake-omega.vercel.app/" },
                  { label: "GitHub", href: "https://github.com/mikedevpro/budget_app" },
                ]}
              />
              <ProjectCard
                title="Python Analytics (Companion)"
                description="A lightweight analytics tool to explore spending trends—built to integrate with the Budget App later."
                tech={["Python", "Pandas", "CSV/JSON"]}
                links={[{ label: "GitHub", href: "#" }]}
              />
              <ProjectCard
                title="PSD/Figma to HTML Practice"
                description="Pixel-tight layouts and responsive components built like client work."
                tech={["HTML", "CSS", "JavaScript"]}
                links={[{ label: "GitHub", href: "#" }]}
              />
            </div>

            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              Replace the “#” links when you’re ready.
            </p>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mt-14">
            <h2 className="text-xl font-bold tracking-tight">Skills</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard title="Frontend" items={["React", "JavaScript", "HTML", "CSS", "Context API", "Axios"]} />
              <InfoCard title="Backend" items={["Python", "FastAPI (building)", "REST APIs"]} />
              <InfoCard title="Tools" items={["Git/GitHub", "Vercel", "VS Code", "Postman", "Jest (basics)"]} />
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="mt-14">
            <h2 className="text-xl font-bold tracking-tight">About</h2>
            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                            dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                I’m Mike — transitioning into web development from logistics and transportation.
                I like building practical apps that people actually use, with an emphasis on clean UI and maintainable code.
                My current flagship project is a Budget App, and I’m expanding into Python to go full-stack.
              </p>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mt-14 mb-10">
            <h2 className="text-xl font-bold tracking-tight">Contact</h2>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
              <a className="hover:text-zinc-900 dark:hover:text-white" href="mailto:Mnobles33@gmail.com">
                Mnobles33@gmail.com
              </a>
              <span className="text-zinc-400">•</span>
              <a className="hover:text-zinc-900 dark:hover:text-white" href="https://www.linkedin.com/in/michael-nobles-0242b014b" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="text-zinc-400">•</span>
              <a className="hover:text-zinc-900 dark:hover:text-white" href="https://github.com/mikedevpro" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Swap in your real email + profile links and you’re recruiter-ready.
            </p>
          </section>

          <footer className="border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            © {new Date().getFullYear()} Mike Nobles
          </footer>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, links }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition
                    hover:-translate-y-0.5 hover:shadow-md
                    dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-base font-extrabold tracking-tight">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>

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
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-900 hover:underline dark:text-white"
          >
            {l.label}
          </a>
        ))}
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
