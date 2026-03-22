import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const STACK = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "LocalStorage",
  "Charting",
  "Vercel",
];

const CORE_FEATURES = [
  {
    title: "Fast Transaction Logging",
    detail: "Quick add/edit/delete flows with clear validation and immediate feedback.",
  },
  {
    title: "Category-Based Budget Tracking",
    detail: "Organized spending views by category to surface trends and problem areas early.",
  },
  {
    title: "Visual Insights",
    detail: "Chart-driven summaries to make income, expenses, and balances easy to scan.",
  },
  {
    title: "Persistent Local Data",
    detail: "LocalStorage persistence keeps user data available across sessions without setup friction.",
  },
];

const OUTCOME = [
  "Delivered a polished budgeting experience focused on clarity and daily usability.",
  "Improved financial visibility with practical summaries and trend-based visualizations.",
  "Proved strong frontend product thinking with real user workflow prioritization.",
];

const FUTURE = [
  "Cloud sync with authenticated accounts.",
  "Recurring transaction automation.",
  "Goal tracking and forecast simulations.",
  "Export options for CSV and PDF reports.",
];

export default function BudgetAppCaseStudy({ dark, setDark, speed, setSpeed }) {
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
              Budget App
            </h1>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-8 text-sky-100">
              A full-stack style expense tracker focused on practical money management, clean UX, and everyday speed.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Budget App was designed to help users track spending with less friction and more confidence. The goal was
              to combine approachable design with useful financial structure so users can quickly understand where money
              is going and make better decisions week to week.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://budget-app-lake-omega.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-5 py-3 text-sm font-bold text-slate-950"
              >
                View Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mikedevpro/budget_app"
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
            <h2 className="text-2xl font-bold text-white">Core Features</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {CORE_FEATURES.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{feature.detail}</p>
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
