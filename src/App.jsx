export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 20px" }}>
        {/* NAV */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>Mike Nobles</div>
          <div style={{ display: "flex", gap: 14, fontSize: 14 }}>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <header style={{ padding: "56px 0 36px" }}>
          <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: "0 0 12px" }}>
            Full-Stack Web Developer
          </h1>
          <p style={{ fontSize: 18, maxWidth: 720, margin: "0 0 22px", opacity: 0.85 }}>
            I build clean, user-friendly web apps with React and Python—focused on real-world usability,
            great UI, and solid engineering.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "black",
                color: "white",
                padding: "10px 14px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid #ddd",
                padding: "10px 14px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Contact
            </a>
          </div>
        </header>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "32px 0" }}>
          <h2 style={{ margin: "0 0 14px" }}>Featured Projects</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            <ProjectCard
              title="Budget App (Flagship)"
              description="Expense tracking with categories, charts, summaries, and local persistence. Built to expand into full-stack."
              tech="React • JS • LocalStorage • Charts"
              links={[
                { label: "Live Demo", href: "#" },
                { label: "GitHub", href: "#" },
              ]}
            />
            <ProjectCard
              title="Python Analytics (Companion)"
              description="Data cleanup + insights for spending trends. Built to integrate with the Budget App backend later."
              tech="Python • Pandas • CSV/JSON"
              links={[
                { label: "GitHub", href: "#" },
              ]}
            />
            <ProjectCard
              title="PSD/Figma to HTML Practice"
              description="Pixel-tight layouts, responsive components, and clean CSS—built like client work."
              tech="HTML • CSS • JS"
              links={[
                { label: "GitHub", href: "#" },
              ]}
            />
          </div>

          <p style={{ marginTop: 12, fontSize: 14, opacity: 0.75 }}>
            Replace the “#” links with your actual live + repo links when ready.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "32px 0" }}>
          <h2 style={{ margin: "0 0 14px" }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <SkillBlock title="Frontend" items={["React", "JavaScript", "HTML", "CSS", "Context API", "Axios"]} />
            <SkillBlock title="Backend" items={["Python", "FastAPI (learning/building)", "REST APIs", "SQLite (future)"]} />
            <SkillBlock title="Tools" items={["Git/GitHub", "Vercel", "VS Code", "Postman", "Jest (basics)"]} />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "32px 0" }}>
          <h2 style={{ margin: "0 0 14px" }}>About</h2>
          <p style={{ maxWidth: 760, lineHeight: 1.6, opacity: 0.9 }}>
            I’m Mike — transitioning into web development from logistics and transportation.
            I like building practical apps that people actually use, with an emphasis on clean UI and readable code.
            My current flagship project is a Budget App, and I’m expanding into Python to go full-stack.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "32px 0 56px" }}>
          <h2 style={{ margin: "0 0 14px" }}>Contact</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:you@example.com">you@example.com</a>
            <span style={{ opacity: 0.5 }}>|</span>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <span style={{ opacity: 0.5 }}>|</span>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
            Tip: Use a real email + your LinkedIn/GitHub links here. That’s the #1 recruiter path.
          </p>
        </section>

        <footer style={{ borderTop: "1px solid #eee", paddingTop: 16, fontSize: 13, opacity: 0.7 }}>
          © {new Date().getFullYear()} Mike Nobles
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, links }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
      <div style={{ fontWeight: 800, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>{description}</div>
      <div style={{ marginTop: 10, fontSize: 13, opacity: 0.75 }}>{tech}</div>
      <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, opacity: 0.9 }}>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
