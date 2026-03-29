import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const STACK = [
  "Ruby on Rails",
  "React",
  "Tailwind CSS",
];

const LEARNINGS = [
  "How Rails handles routing, models, and controller-driven app structure.",
  "How backend conventions in Rails can speed up development and reduce boilerplate.",
  "How to connect a Rails backend mindset with a modern React frontend workflow.",
  "How to think in terms of product experiments instead of overbuilding too early.",
];

export default function LoadTrackerCaseStudy({ dark, setDark, speed, setSpeed }) {
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
              Load Tracker
            </h1>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-8 text-sky-100">
              An experiment project built to learn Ruby on Rails through a practical productivity workflow.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Load Tracker was created as a focused experiment to help me learn and understand Ruby on Rails in a
              real project setting. Instead of only reading docs, I used a concrete product idea to explore Rails
              architecture, conventions, and full-stack decision making.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="glass-card rounded-3xl p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Project Intent</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The goal was not to ship a huge production platform immediately. The goal was to run a smart experiment:
              build a useful app concept while deepening my understanding of Rails fundamentals and backend-first
              thinking.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This project helped me connect theory to practice and sharpen how I approach architecture, tradeoffs,
              and implementation flow.
            </p>
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
          <h2 className="text-2xl font-bold text-white">What I Learned</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            {LEARNINGS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Outcome</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Load Tracker succeeded as a learning experiment. It gave me direct Ruby on Rails experience, improved my
            backend instincts, and strengthened the way I design full-stack products from the ground up.
          </p>
        </section>
      </div>
    </Layout>
  );
}
