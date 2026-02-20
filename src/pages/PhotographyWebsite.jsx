import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

export default function PhotographyWebsiteCaseStudy({ dark, setDark, speed, setSpeed }) {
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
          Photography Website - Case Study
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          A responsive portfolio site for a professional photographer, focused on image-forward
          presentation, performance, and a structure that can evolve into a full business website.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://lancephotosite.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/mikedevpro/lance_photo_site"
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
            The core objective was to present photography work in a clean, professional layout that
            keeps visual content central while still supporting clear navigation and quick contact paths.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Media-heavy websites can become slow and cluttered. The challenge was balancing large
            visuals with fast load performance and a layout that stays readable across screen sizes.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Solution</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I built a component-driven front end with Next.js and Tailwind CSS, organized the page
            around strong visual hierarchy, and kept styling consistent so the project can grow into
            booking, inquiry, and service pages without a redesign.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            React, Next.js, TypeScript, Node.js, Tailwind CSS, Vercel
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">What I Focused On</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Professional visual presentation with consistent spacing and typography</li>
            <li>Responsive behavior across mobile, tablet, and desktop</li>
            <li>Project structure that can support future business features</li>
            <li>Simple, maintainable components for quick iteration</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
