import { useState } from "react";
import { ExternalLink, Github, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const STACK = [
  "React",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Vercel",
  "CoinGecko API",
];

const OUTCOMES = [
  "Built a real-time crypto dashboard with clean data hierarchy and chart-driven insights.",
  "Integrated external market APIs and normalized response data for consistent rendering.",
  "Designed a responsive interface that keeps dense market information readable on mobile.",
];

const CORE_FEATURES = [
  {
    title: "Real-Time Market Dashboard",
    detail: "Browse top cryptocurrencies with live pricing, market cap, and 24-hour movement.",
  },
  {
    title: "Search & Sorting",
    detail: "Quickly filter coins by name or symbol and sort market data based on different metrics.",
  },
  {
    title: "Authenticated User Flows",
    detail: "Supabase-powered auth connects each user to their own saved preferences and dashboard state.",
  },
  {
    title: "Resilient Data Handling",
    detail: "Graceful fallbacks, loading states, and refresh behavior keep the UI usable during API issues.",
  },
  {
    title: "Smart Refresh System",
    detail: "Manual refresh with cooldown awareness prevents unnecessary API calls while keeping data current.",
  },
  {
    title: "Market Insights",
    detail: "Top movers and market summaries provide quick insight into current trends."
  },
];

const ARCHITECTURE_ITEMS = [
  {
    title: "Frontend Layer",
    detail:
      "Built with React + TypeScript using modular components and reusable UI patterns to keep the dashboard maintainable as features expand.",
  },
  {
    title: "Data & State Flow",
    detail:
      "CoinGecko market data is fetched and normalized for predictable rendering, with focused state updates to avoid unnecessary rerenders.",
  },
  {
    title: "Backend Services",
    detail:
      "Supabase powers authentication and persistent user data so favorites and personalized settings survive across sessions.",
  },
  {
    title: "Deployment & Delivery",
    detail:
      "Vercel handles deployment and hosting with fast global delivery, enabling quick iteration and reliable production rollouts.",
  },
];

const KEY_TECHNICAL_DECISIONS = [
  {
    title: "Intelligent Caching",
    detail:
      "Implemented a TTL-based caching system to reduce redundant API calls and improve performance.",
  },
  {
    title: "Rate Limit Handling",
    detail:
      "Detected API throttling (429 errors) and introduced cooldown timers with user feedback.",
  },
  {
    title: "Fault-Tolerant UI",
    detail:
      "Ensured cached data remains visible even when new requests fail, preventing empty or broken states.",
  },
  {
    title: "Favorites Fallback Strategy",
    detail:
      "Used a secondary lookup system to ensure saved coins always render—even if not in the current dataset.",
  },
  {
    title: "Full-Stack Integration (Supabase)",
    detail: "Added authentication and persistent user data, turning the app into a real user-driven product.",
  },
];

const DEEP_DIVE = [
  {
    title: "Built for Real-World APIs",
    detail:
      "APIs don’t always respond perfectly. CryptoPulse accounts for rate limits, failures, and delays by combining caching, cooldown logic, and user messaging.",
  },
  {
    title: "From Static App to User Product",
    detail:
      "Adding Supabase transformed the app from a public dashboard into a personalized experience where users can save and manage their own data.",
  },
  {
    title: "UX-Focused Design",
    detail:
      "Every interaction—from search to refresh to error handling—was designed to feel responsive, clear, and intentional.",
  },
  {
    title: "Result",
    detail:
      "The final product feels closer to a production dashboard than a demo app: authenticated, persistent, responsive, and resilient under API volatility.",
  },
];

const CHALLENGES_AND_SOLUTIONS = [
  {
    title: "API Rate Limiting",
    challenge: "CoinGecko requests would fail under rate limits.",
    solution: "Implemented cooldown timers and cached responses to maintain usability.",
  },
  {
    title: "Favorites Outside Current Dataset",
    challenge: "Saved coins might not appear in the current market page.",
    solution: "Built a fallback fetch system using coin IDs to ensure consistency.",
  },
  {
    title: "Production API Failures (403 / Network Issues)",
    challenge: " Requests occasionally failed in production.",
    solution:
     "Improved proxy handling and error visibility while maintaining UI stability.",
  },
  {
    title: "Render Performance",
    challenge: "Frequent updates risked unnecessary rerenders and sluggish interactions on weaker devices.",
    solution:
      "Normalized payloads and narrowed state updates to reduce render churn while keeping dashboard interactions responsive.",
  },
];

const CHALLENGES = [
  {
    title: "Unstable market data",
    detail:
      "Crypto price movement is noisy and changes rapidly. I focused on robust loading states, defensive parsing, and clearer visual feedback to reduce confusion when values update.",
  },
  {
    title: "Balancing detail with readability",
    detail:
      "Dashboards can overwhelm users quickly, so I prioritized spacing, typography hierarchy, and chart grouping to keep key signals obvious.",
  },
  {
    title: "Performance under frequent updates",
    detail:
      "To avoid unnecessary renders, I kept component boundaries intentional and limited expensive chart updates to the data actually being viewed.",
  },
];

const NEXT_STEPS = [
  "Add watchlist persistence tied to user accounts.",
  "Introduce alerting for price thresholds and volatility spikes.",
  "Expand analytics with historical comparisons and sentiment overlays.",
  "Coin detail pages with charts",
  "Real-time updates (WebSockets or polling)",
  "Price alerts and notifications",
  "Performance optimization for large datasets",
];

const OUTCOME_SUMMARY = [
  "CryptoPulse evolved into a full-stack application that demonstrates real-world engineering decisions beyond basic CRUD or API rendering.",
  "Real-world API integration",
  "React + TypeScript architecture",
  "Full-stack development with Supabase",
  "Performance optimization and caching",
  "Resilient UX under failure conditions",
  "Clean, modern UI design",
  "Shipped a production-style crypto dashboard that goes beyond basic API table rendering.",
  "Delivered a resilient user experience with authentication, persistence, and failure-aware states.",
  "Created a clean, responsive interface that supports quick market scanning on desktop and mobile.",
];

const SCREENSHOT_CAPTIONS = [
  "Live market overview with search, sort, and favorites",
  "Authenticated experience with persistent user data",
  "Clean, responsive UI across devices",
  "Market insights and top movers",
];

export default function CryptoPulseCaseStudy({ dark, setDark, speed, setSpeed }) {
  const [desktopScreenshotFailed, setDesktopScreenshotFailed] = useState(false);
  const [mobileScreenshotFailed, setMobileScreenshotFailed] = useState(false);

  return (
    <Layout dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} showContact={false}>
      <div className="mx-auto max-w-5xl text-slate-100">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%)]" />
          <div className="relative">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Case Study · Full-Stack Crypto Dashboard</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              CryptoPulse
            </h1>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-8 text-sky-100">
              A real-time crypto market dashboard built with React, TypeScript, and Supabase—designed for speed,
              clarity, and resilient user experience.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              CryptoPulse is a production-style cryptocurrency dashboard that helps users explore market data, track favorite coins, and monitor price movement through a fast, responsive interface.
              <br /><br />
              What started as a simple API-driven project evolved into a full-stack application with authentication, persistent user data, caching strategies, refresh controls, and graceful handling of real-world API limitations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://crypto-pulse-ashy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-bold text-white"
              >
                Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mikedevpro/CryptoPulse"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-slate-100"
              >
                Source Code
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Product Snapshot</p>
              <h2 className="mt-2 text-2xl font-bold text-white">CryptoPulse Screenshot Gallery</h2>
              <p className="mt-2 text-sm text-slate-300">Showcasing both desktop and mobile experiences.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-200">Desktop View</h3>
              </div>
              {!desktopScreenshotFailed ? (
                <img
                  src="/images/cryptopulse-dashboard.png"
                  alt="CryptoPulse desktop dashboard screenshot showing market overview and charts"
                  className="h-auto w-full rounded-xl border border-white/10 object-cover shadow-xl"
                  loading="lazy"
                  onError={() => setDesktopScreenshotFailed(true)}
                />
              ) : (
                <div className="flex min-h-[260px] w-full items-center justify-center rounded-xl border border-dashed border-sky-300/30 bg-gradient-to-br from-sky-500/10 via-slate-900/40 to-blue-500/10 p-6 text-center">
                  <div>
                    <ImageIcon className="mx-auto h-8 w-8 text-sky-300" />
                    <p className="mt-3 text-sm font-semibold text-sky-200">Desktop screenshot placeholder</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Add image at <code className="rounded bg-slate-950 px-1.5 py-0.5 text-slate-200">public/images/cryptopulse-dashboard.png</code>
                    </p>
                  </div>
                </div>
              )}
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-200">Mobile View</h3>
              </div>
              {!mobileScreenshotFailed ? (
                <img
                  src="/images/cryptopulse-mobile.png"
                  alt="CryptoPulse mobile dashboard screenshot showing compact market and watchlist layout"
                  className="h-auto w-full rounded-xl border border-white/10 object-cover shadow-xl"
                  loading="lazy"
                  onError={() => setMobileScreenshotFailed(true)}
                />
              ) : (
                <div className="flex min-h-[260px] w-full items-center justify-center rounded-xl border border-dashed border-sky-300/30 bg-gradient-to-br from-sky-500/10 via-slate-900/40 to-blue-500/10 p-6 text-center">
                  <div>
                    <ImageIcon className="mx-auto h-8 w-8 text-sky-300" />
                    <p className="mt-3 text-sm font-semibold text-sky-200">Mobile screenshot placeholder</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Add image at <code className="rounded bg-slate-950 px-1.5 py-0.5 text-slate-200">public/images/cryptopulse-mobile.png</code>
                    </p>
                  </div>
                </div>
              )}
            </article>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {SCREENSHOT_CAPTIONS.map((caption, index) => (
              <article
                key={caption}
                className="rounded-xl border border-sky-300/20 bg-slate-950/70 px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">
                  View {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-slate-200">{caption}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Project Outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {OUTCOMES.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
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

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Core Features</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {CORE_FEATURES.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Architecture & Technical Design</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {ARCHITECTURE_ITEMS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Key Technical Decisions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {KEY_TECHNICAL_DECISIONS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Deep Dive</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {DEEP_DIVE.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Challenges & Solutions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {CHALLENGES_AND_SOLUTIONS.map((item) => (
              <article key={item.challenge} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                {item.title ? <h3 className="text-lg font-semibold text-white">{item.title}</h3> : null}
                {item.title ? <br /> : null}
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-300">Challenge</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{item.challenge}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Solution</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.solution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Challenges and Decisions</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Most beginner crypto dashboards stop at displaying API data in a table.
            I wanted CryptoPulse to go further-feeling like a real product with user identity, persistent data, and a
            resilient UI that continues working even when APIs fail or rate limits are hit.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {CHALLENGES.map((challenge) => (
              <article key={challenge.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{challenge.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-slate-900/80 to-blue-500/10 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Outcome</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            {OUTCOME_SUMMARY.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">Future Improvements</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {NEXT_STEPS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/15 via-slate-900 to-blue-500/15 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Next Step</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Want to Explore CryptoPulse?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
            Check out the live app or head back to the portfolio to browse more case studies.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
            I build modern, user-focused web applications that combine strong frontend engineering with real-world
            product thinking.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
            If you’re looking for a developer who can take an idea from concept to polished product, let’s connect.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://crypto-pulse-ashy.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-bold text-white"
            >
              View Live Project
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="mailto:mnobles33@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mike%2C%0A%0AI%20saw%20your%20CryptoPulse%20case%20study%20and%20wanted%20to%20connect."
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-slate-100"
            >
              Contact Me
            </a>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-300/30 bg-sky-400/10 px-5 py-3 text-sm font-bold text-sky-100"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
