import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const STACK = [
  "Go",
  "SQLite",
  "React",
  "REST API",
  "Tailwind CSS",
  "Vite",
];

const ARCHITECTURE = [
  {
    title: "Backend API in Go",
    detail: "Structured REST endpoints for tasks, status updates, and user-driven workflow operations.",
  },
  {
    title: "SQLite Data Layer",
    detail: "Lightweight relational persistence with practical schema design for speed and simplicity.",
  },
  {
    title: "React Frontend",
    detail: "Component-based UI focused on fast task creation, clear priority states, and responsive controls.",
  },
  {
    title: "End-to-End Product Flow",
    detail: "Connected backend logic to frontend interactions with a product-first view of user productivity.",
  },
];

const KEY_DECISIONS = [
  {
    title: "Go for Reliability and Performance",
    detail: "Selected Go to strengthen backend engineering foundations and ship a fast, maintainable API.",
  },
  {
    title: "Relational Data Model",
    detail: "Used SQLite with normalized task entities to keep operations predictable and easy to evolve.",
  },
  {
    title: "Frontend-Backend Separation",
    detail: "Designed clear API contracts so the UI could iterate quickly without tightly coupling to server internals.",
  },
  {
    title: "Practical UX over Feature Bloat",
    detail: "Focused scope around real task-management workflows instead of overbuilding niche features.",
  },
];

const OUTCOME = [
  "Built and deployed a complete full-stack task platform from backend to polished frontend.",
  "Demonstrated backend capability with API design, database integration, and route structure.",
  "Delivered a strong portfolio proof point for production-minded full-stack ownership.",
];

const FUTURE = [
  "Team workspaces and shared boards.",
  "Activity history and task analytics.",
  "Role-based access and permission controls.",
  "Notification flows for deadlines and mentions.",
];

export default function MomentumCaseStudy({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} showContact={false}>
      <div className="mx-auto max-w-5xl text-slate-100">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_36%)]" />
          <div className="relative">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Case Study</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Momentum
            </h1>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-8 text-sky-100">
              A production-ready full-stack task manager designed to prove backend depth and product-minded execution.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Momentum showcases a full system build from scratch: Go backend, SQL persistence, and a responsive React
              interface. The product centers on practical task workflow management with clean structure, clear API
              contracts, and a UI that stays focused on getting work done quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://momentum-frontend-zeta.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-5 py-3 text-sm font-bold text-slate-950"
              >
                View Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mikedevpro/momentum-frontend.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-slate-100"
              >
                View Source Code
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="glass-card rounded-3xl p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Architecture & Technical Design</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {ARCHITECTURE.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Key Technical Decisions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {KEY_DECISIONS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Outcome</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            {OUTCOME.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Future Improvements</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {FUTURE.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
