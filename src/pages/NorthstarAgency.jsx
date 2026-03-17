import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout.jsx";

const CASE_STUDY_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200";
const BACK_LINK_CLASS =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200";

export default function NorthstarAgencyCaseStudy({ dark, setDark, speed, setSpeed }) {
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
          Northstar Agency - Case Study
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Northstar Agency is a front-end portfolio project focused on translating a clean, modern design
          concept into a responsive, production-style React application.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://northstar-agency.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={CASE_STUDY_LINK_CLASS}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
            <ArrowUpRight className="h-4 w-4 opacity-80" />
          </a>
          <a
            href="https://github.com/mikedevpro/northstar-agency"
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
            The project goal was to demonstrate how to take a visual design layout and build it into structured,
            reusable front-end components while preserving strong visual hierarchy, spacing, and responsiveness.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The main challenge was keeping the implementation maintainable as the design grew in complexity.
            I needed a structure that mirrored the design language while still making sections easy to edit and scale.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Solution</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I implemented the landing page using React and Tailwind CSS with reusable, data-driven components.
            This produced a clear component hierarchy, reduced duplication, and made it easy to maintain consistent
            spacing, typography, and responsiveness across all sections.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            React, JavaScript, Tailwind CSS
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I Focused On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Transforming a visual concept into modular React components</li>
            <li>Maintaining alignment, spacing, and layout hierarchy across breakpoints</li>
            <li>Building scalable section patterns with clean reusable structure</li>
            <li>Delivering a polished, production-style responsive experience</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
