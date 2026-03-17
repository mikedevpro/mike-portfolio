import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../components/Layout.jsx";

const BACK_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200";

export default function LoadTrackerCaseStudy({ dark, setDark, speed, setSpeed }) {
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
          Load Tracker - Case Study
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Load Tracker is coming soon. It&apos;s planned as a practical productivity application for organizing
          daily load, progress, and workflow priorities in a simple, scalable interface.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <span className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-2 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            Project Status: In Progress
          </span>
          <span className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-2 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            Live Demo: Coming Soon
          </span>
          <span className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-2 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            GitHub: Coming Soon
          </span>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Project Overview</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The goal is to build a clean dashboard-style experience that helps users track load,
            manage priorities, and understand progress at a glance.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Problem</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Many personal productivity tools feel heavy, fragmented, or confusing when users only need
            to capture tasks, track completion momentum, and quickly see what still needs attention.
            Load Tracker will focus on a focused mental model: workload, status, and progress.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Planned Solution</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I&apos;m building this as a lightweight React-based dashboard with reusable components for item cards,
            priority indicators, and progress summaries. The interface will prioritize usability first:
            minimal clicks, clear states, and fast content updates.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack (Planned)</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            React, Tailwind CSS, JavaScript (planned), future backend/DB integration
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I&apos;m Focusing On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Clear component structure for quick feature growth.</li>
            <li>Responsive layout and visual consistency across screen sizes.</li>
            <li>Simple but meaningful state design for workload and progress indicators.</li>
            <li>Scaffolded planning for future persistence (API/database).</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Current Status</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            This project is in planning and early implementation. The card is now live on the portfolio
            to track work and share updates as development progresses.
          </p>
        </section>
      </div>
    </Layout>
  );
}
