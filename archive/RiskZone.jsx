import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout.jsx";

const CASE_STUDY_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200";
const BACK_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200";

export default function RiskZoneCaseStudy({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed}>
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className={BACK_LINK_CLASS}
        >
          <ArrowLeft className="h-4 w-4" />
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Risk Zone - Case Study
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Risk Zone is a real-time canvas game focused on fast decision-making, smooth controls,
          and responsive performance across desktop and mobile.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://risk-zone.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={CASE_STUDY_LINK_CLASS}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
            <ArrowUpRight className="h-4 w-4 opacity-80" />
          </a>
          <a
            href="https://github.com/mikedevpro/risk-zone"
            target="_blank"
            rel="noreferrer"
            className={CASE_STUDY_LINK_CLASS}
          >
            <Github className="h-4 w-4" />
            GitHub Repository
            <ArrowUpRight className="h-4 w-4 opacity-80" />
          </a>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Project Overview</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The project goal was to build a browser game that feels quick, fair, and satisfying.
            I prioritized consistent frame updates, simple mechanics users can understand immediately,
            and clear visual feedback that helps players react in real time.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Canvas games can feel inconsistent when render loops and state updates are not coordinated.
            The main challenge was preventing input lag and unpredictable difficulty while keeping
            the code organized enough to iterate on gameplay quickly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Solution</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I structured the game loop around predictable update and draw cycles, separated core gameplay
            logic from UI state, and tuned movement and collision behavior through small testable changes.
            I also focused on responsive layout and touch-friendly controls so the game performs well on
            smaller devices.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            React, JavaScript, HTML Canvas, CSS, Vite, Vercel, Render, SQLAlchemy, SQLite
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I Focused On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Stable animation loop and smooth rendering behavior</li>
            <li>Collision and scoring logic that feels fair and readable</li>
            <li>Responsive controls for both keyboard and touch contexts</li>
            <li>Clear feedback through visual state and score progression</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenges and Learnings</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The biggest learning was how much game feel depends on timing details. Small changes in
            movement speed, spawn rate, and hit detection dramatically affect difficulty and enjoyment.
            This project improved how I design for responsiveness and iterative tuning.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Future Improvements</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Difficulty modes and progression curves</li>
            <li>Persistent high scores with backend storage</li>
            <li>Additional obstacles and power-ups</li>
            <li>Accessibility options for motion and color contrast</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
