import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout.jsx";

const CASE_STUDY_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200";
const BACK_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200";

export default function MomentumCaseStudy({ dark, setDark, speed, setSpeed }) {
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
          Momentum — Full-Stack Task Manager
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Momentum is a full-stack task manager I built while transitioning from trucking into software engineering.
          It showcases my ability to design and build complete systems — from a Go backend and SQL database to a dynamic React UI.
          The app uses a Golang backend API and React (Vite) frontend with task creation, editing, completion workflows,
          filtering by status, and a responsive interface for quick daily task handling.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://momentum-frontend-zeta.vercel.app"
            target="_blank"
            rel="noreferrer"
            className={CASE_STUDY_LINK_CLASS}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
            <ArrowUpRight className="h-4 w-4 opacity-80" />
          </a>
          <a
            href="https://github.com/mikedevpro/momentum-frontend.git"
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
            Momentum is a complete task management app with a RESTful API and persistent storage.
            The backend handles full CRUD operations and returns task data with timestamps so users
            can track task history and completion timing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Backend Architecture</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The API was implemented in Go using clear route handlers for create, read, update, and delete.
            SQLite stores task records with schema migrations to manage structured persistence across versions.
            I also added pagination and sorting in API responses to support efficient list delivery at scale.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Frontend Experience</h2>
          <p className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            The React (Vite) interface includes:
            <br />
            <span>• open/completed/all filtering</span>
            <br />
            <span>• inline task editing</span>
            <br />
            <span>• toast notifications for user actions</span>
            <br />
            <span>• loading states and animations</span>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            Go, SQLite, React, Vite, REST APIs, Tailwind-style CSS
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I Focused On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>API-first architecture with CRUD reliability and timestamp consistency.</li>
            <li>Stable frontend-backend data flow for filtering and state synchronization.</li>
            <li>Task editing and UX feedback patterns that reduce friction and cognitive load.</li>
            <li>Deployment and environment readiness for separate frontend/backend services.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenges & Learnings</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The largest challenge was balancing simplicity in task editing flows with robust backend contracts.
            I learned to keep API schemas explicit, make pagination and sorting deterministic, and keep
            timestamp handling consistent between frontend and server responses.
          </p>
        </section>
      </div>
    </Layout>
  );
}
