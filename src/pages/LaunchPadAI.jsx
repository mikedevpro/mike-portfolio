import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

export default function LaunchPadAICaseStudy({ dark, setDark, speed, setSpeed }) {
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
          LaunchPad AI - Case Study
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          LaunchPad AI is a front-end portfolio project designed to showcase modern landing page
          development for SaaS-style products with responsive, polished interactions.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://launchpad-ai-theta.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/mikedevpro/launchpad-ai"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub Repository
          </a>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Project Overview</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The project goal was to design and implement a high-converting SaaS landing page with a
            strong visual hierarchy, smooth interactions, and a scalable structure for future product content.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            The main challenge was creating a site that feels modern and energetic without adding complexity.
            I focused on balancing motion, responsiveness, and readability while keeping the implementation
            maintainable and easy to extend.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Solution</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I built the page with React and Tailwind CSS and used reusable components with structured content
            data to keep sections consistent and easy to update. The interface includes a mobile-friendly
            navigation menu, an animated FAQ accordion, and subtle Framer Motion motion effects for polished user
            interactions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            React, Tailwind CSS, JavaScript, Framer Motion
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I Focused On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Reusable component patterns for rapid content iteration</li>
            <li>Structured data-driven section content for maintainability</li>
            <li>Mobile-first navigation and interaction behavior</li>
            <li>Subtle animations to improve perceived quality and engagement</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
