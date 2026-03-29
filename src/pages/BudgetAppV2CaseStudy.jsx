import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const STACK = [
  "Next.js (App Router)",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "Recharts for data visualization",
];

const KEY_FEATURES = [
  {
    title: "Smart Dashboard",
    points: [
      "Budget tracking with dynamic remaining calculation.",
      "Category breakdown charts.",
      "Spending trends over time.",
    ],
  },
  {
    title: "Expense Management",
    points: [
      "Add, edit, and delete expenses.",
      "Filtering and search.",
      "Responsive table design.",
    ],
  },
  {
    title: "Flexible Budget System",
    points: [
      "Supports weekly, monthly, and yearly budgets.",
      "Adapts calculations based on selected period.",
    ],
  },
  {
    title: "Insights Page",
    points: [
      "Deeper analytics view.",
      "Average spend, top category, and transaction volume.",
    ],
  },
  {
    title: "CSV Export",
    points: [
      "Allows users to export their financial data for real-world use.",
    ],
  },
];

const CHALLENGES = [
  {
    title: "Synchronizing Date Logic",
    problem:
      "Handling multiple date ranges (budget period vs. user-selected filters) required a unified approach.",
    solution: "Created shared date utilities to standardize all filtering logic.",
  },
  {
    title: "Avoiding Duplication",
    problem: "Dashboard and Insights initially duplicated logic.",
    solution: "Built a shared analytics layer (getExpenseAnalytics) to centralize all computations.",
  },
  {
    title: "Scaling the UI System",
    problem: "As features grew, UI consistency became critical.",
    solution: "Introduced reusable components for layout, cards, and states.",
  },
];

const OUTCOME = [
  "Full-stack development capability.",
  "Thoughtful architecture.",
  "Strong UI/UX design.",
  "Real-world feature implementation.",
];

export default function BudgetAppV2CaseStudy({ dark, setDark, speed, setSpeed }) {
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
              Budget App v2
            </h1>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-8 text-sky-100">
              A full-stack financial dashboard built to turn daily spending into clear, actionable insight.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Budget App v2 is a complete rebuild of an earlier version, evolving from a simple expense tracker into a
              production-style application with authentication, persistent data, and advanced analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://budget-app-v2-chi.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-5 py-3 text-sm font-bold text-slate-950"
              >
                View Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mikedevpro/budget_app_v2.git"
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

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Budget App v2 is a full-stack financial dashboard designed to help users track spending, understand their
            financial behavior, and stay within budget through clean, real-time insights.
          </p>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="glass-card rounded-3xl p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">The Problem</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Most budgeting tools either feel overly complex, or too minimal to provide real insight.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">Project goals</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
              <li>• Feel simple and intuitive.</li>
              <li>• Provide meaningful financial clarity.</li>
              <li>• Scale into a real product experience.</li>
            </ul>
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
          <h2 className="text-2xl font-bold text-white">The Solution</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            I designed and built a full-stack dashboard centered around clarity, helping users understand not just what
            they spent, but how and why.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-200">
            <li>• Real-time expense tracking.</li>
            <li>• Budget vs. actual visualization.</li>
            <li>• Category-based analytics.</li>
            <li>• Time-based filtering (7d / 30d / 90d / all).</li>
            <li>• User-specific budget settings.</li>
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            A key architectural decision was extracting all financial logic into a shared server utility:
            <span className="ml-2 rounded-md border border-emerald-300/25 bg-emerald-400/10 px-2 py-0.5 font-semibold text-emerald-200">
              getExpenseAnalytics()
            </span>
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">Why it mattered</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
            <li>• Consistent calculations across pages.</li>
            <li>• Easier feature expansion.</li>
            <li>• Clean separation of concerns.</li>
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Key Features</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {KEY_FEATURES.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                  {feature.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Design Approach</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The UI was intentionally designed to feel clean, modern, visually calm, and information-focused.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-200">
            <li>• Dark theme with subtle emerald accents.</li>
            <li>• Soft shadows and glass-like surfaces.</li>
            <li>• Consistent spacing and typography.</li>
            <li>• Reusable component system.</li>
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Challenges & Decisions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {CHALLENGES.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.problem}</p>
                <p className="mt-3 text-sm leading-7 text-emerald-200">Solution: {item.solution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Outcome</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The result is a polished, production-style application that demonstrates:
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-200">
            {OUTCOME.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Key Takeaway</h2>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            This project reflects a shift from:
            <span className="mx-2 font-semibold text-slate-100">"building features"</span>
            to
            <span className="ml-2 font-semibold text-emerald-200">"building products."</span>
          </p>
        </section>
      </div>
    </Layout>
  );
}
