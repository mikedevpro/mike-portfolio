import { Link } from "react-router-dom";
import SkateBackdrop from "./SkateBackdrop.jsx";

export default function Layout({ dark, setDark, speed, setSpeed, children }) {
  return (
    <div className={dark ? "dark" : ""}>
      <div className={`min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 relative ${speed ? "speed-mode" : ""}`}>
        <SkateBackdrop />
        <div className="relative mx-auto max-w-5xl px-5 py-10">
          {/* NAV */}
          <nav className="flex items-center justify-between">
            <Link to="/" className="font-extrabold tracking-tight text-lg speed-underline roll-skate">
              <span>Michael Nobles</span>
              <span className="skate" aria-hidden="true">🛼</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
                <Link className="hover:text-zinc-900 dark:hover:text-white" to="/#projects">
                  Projects
                </Link>
                <Link className="hover:text-zinc-900 dark:hover:text-white" to="/#skills">
                  Skills
                </Link>
                <Link className="hover:text-zinc-900 dark:hover:text-white" to="/#about">
                  About
                </Link>
                <Link className="hover:text-zinc-900 dark:hover:text-white" to="/#contact">
                  Contact
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setDark((v) => !v)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold shadow-sm
                           hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                aria-label="Toggle dark mode"
              >
                {dark ? "Light" : "Dark"}
              </button>
              <button
                type="button"
                onClick={() => setSpeed((v) => !v)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold shadow-sm
                           hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                aria-label="Toggle speed mode"
                title="Speed mode"
              >
                {speed ? "Speed: On" : "Speed: Off"}
              </button>
            </div>
          </nav>

          {/* PAGE CONTENT */}
          <main className="mt-10">{children}</main>

          <footer className="mt-16 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            © {new Date().getFullYear()} Michael Nobles
          </footer>
        </div>
      </div>
    </div>
  );
}
