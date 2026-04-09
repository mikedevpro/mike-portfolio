import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const TECH_STACK = [
  "Astro",
  "Tailwind CSS",
  "Component-based architecture",
  "Responsive layout patterns",
  "Custom CSS animation utilities",
];

const FOCUS_AREAS = [
  "Building with Astro for a fast, lightweight frontend.",
  "Creating a scalable component structure.",
  "Designing a premium dark UI with modern gradients, glassmorphism, and subtle animation.",
  "Presenting product information clearly through hero messaging, feature sections, pricing, testimonials, and a detailed dashboard mockup.",
];

const KEY_FEATURES = [
  "Sticky navbar with mobile menu.",
  "Premium hero section with announcement bar and branded CTA treatment.",
  "Social proof strip with company logos and stats.",
  "Product features and workflow explanation sections.",
  "Advanced mock dashboard preview.",
  "Pricing section and dedicated pricing page.",
  "Testimonial and CTA sections.",
  "Reusable branding system for FlowSpark.",
];

export default function FlowSparkCaseStudy({ dark, setDark, speed, setSpeed }) {
  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} showContact={false}>
      <div className="mx-auto max-w-5xl text-slate-100">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_40%)]" />
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
              FlowSpark - Premium SaaS Landing Page
            </h1>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Summary</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              FlowSpark is a fictional SaaS marketing site built to showcase premium frontend execution,
              component-driven architecture, and performance-first design using Astro and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://flow-spark-two.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-cyan-500 px-5 py-3 text-sm font-bold text-slate-950"
              >
                View Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mikedevpro/FlowSpark.git"
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

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="glass-card rounded-3xl p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Goal</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The goal was to design and build a polished SaaS landing page that feels like a real product
              company site, with strong visual hierarchy, believable product UI, and a conversion-focused layout.
            </p>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {TECH_STACK.map((item) => (
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
          <h2 className="text-2xl font-bold text-white">What I Focused On</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {FOCUS_AREAS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Key Features</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {KEY_FEATURES.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Design Approach</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            I wanted the project to feel like a real startup landing page rather than a simple mockup. I focused
            on clean spacing, clear typography, layered gradients, soft glass panels, and believable in-product UI
            to make the experience feel polished and production-minded.
          </p>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">Why Astro</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Astro was a strong fit because it made it easy to build a fast marketing site with clean structure and
              minimal overhead. It also gave me a strong foundation for component reuse and future expansion.
            </p>
          </article>

          <article className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">Outcome</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The result is a portfolio-ready frontend project that demonstrates modern UI implementation, design
              sensitivity, and the ability to build high-quality marketing pages with a performance-first approach.
            </p>
          </article>
        </section>
      </div>
    </Layout>
  );
}
