export default function BudgetAppCaseStudy() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        Budget App — Case Study
      </h1>

      <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
        A production-ready budgeting application built with React to help users track expenses,
        categorize spending, and understand their financial habits through clear summaries and visuals.
      </p>

      {/* LINKS */}
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

      {/* OVERVIEW */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Project Overview</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          The goal of this project was to build a budgeting tool that feels simple and intuitive
          while remaining flexible enough to grow into a full-stack application.
          I focused on usability, clean UI, and maintainable state management.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">Problem</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Many budgeting tools feel overwhelming or require unnecessary setup.
          I wanted to create an app that lets users quickly add expenses, see where their money goes,
          and understand their spending without friction.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">Solution</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>Simple expense entry with validation</li>
          <li>Category-based filtering and summaries</li>
          <li>Persistent data storage using LocalStorage</li>
          <li>Clear visual breakdowns for spending insights</li>
        </ul>
      </section>

      {/* TECH */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">Tech Stack</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          React, JavaScript, HTML, CSS, LocalStorage, Charting libraries
        </p>
      </section>

      {/* WHAT YOU FOCUSED ON */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">What I Focused On</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>Clean component architecture and reusable UI elements</li>
          <li>Predictable state management and data flow</li>
          <li>User-friendly forms with validation</li>
          <li>Designing the app with future backend integration in mind</li>
        </ul>
      </section>

      {/* CHALLENGES */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">Challenges & Learnings</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          One challenge was balancing simplicity with extensibility.
          I learned how to structure components and state in a way that supports
          future features without over-engineering early.
        </p>
      </section>

      {/* ROADMAP */}
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
  );
}
