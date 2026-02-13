import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

export default function BudgetAppCaseStudy({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed}>
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:underline dark:text-zinc-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Budget App — Case Study
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          A production-ready budgeting application built with React to help users track expenses,
          categorize spending, and understand spending through summaries and visuals.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://budget-app-lake-omega.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/mikedevpro/budget_app"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub Repository
          </a>
        </div>

        {/* SECTIONS */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">Project Overview</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The goal of this project was to build a budgeting tool that feels simple and intuitive
            while remaining flexible enough to grow into a full-stack application. I focused on usability,
            clean UI, and maintainable state management.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Many budgeting apps overwhelm users with too many steps or features upfront. I wanted to solve a simpler problem first: help users quickly log expenses, categorize them, and immediately understand where their money is going—without friction or setup overhead.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Solution</h2>
          <p className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            I built a focused, frontend-first budgeting application using React. The app prioritizes fast expense entry, clear categorization, and instant feedback through summaries and visual breakdowns. I intentionally designed the architecture to be simple but extensible, so it can grow into a full-stack application without requiring a major rewrite.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            React, JavaScript, HTML, CSS, LocalStorage, charting
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I Focused On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Clean component architecture and reusable UI elements</li>
            <li>Predictable state management and data flow</li>
            <li>User-friendly forms with validation</li>
            <li>Designing the app with future backend integration in mind</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenges & Learnings</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            A key challenge was balancing simplicity with extensibility. This project reinforced how important
            clean component structure and predictable state patterns are when planning for future features.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Future Improvements</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Backend API with Python and FastAPI</li>
            <li>User authentication and profiles</li>
            <li>Database-backed expense storage</li>
            <li>Advanced analytics and reports</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

