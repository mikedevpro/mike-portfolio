export default function SkateBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft gradient wash */}
      <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full blur-3xl opacity-30
                      bg-gradient-to-r from-blue-400 via-green-400 to-violet-400 dark:opacity-20" />

      {/* tiny “wheel” pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.10] dark:opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="wheels" width="90" height="90" patternUnits="userSpaceOnUse">
            <circle cx="18" cy="18" r="6" fill="currentColor" opacity="0.55" />
            <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.75" />
            <path d="M38 18h34" stroke="currentColor" strokeWidth="2" opacity="0.18" strokeLinecap="round" />
            <circle cx="72" cy="18" r="4.5" fill="currentColor" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wheels)" className="text-zinc-500 dark:text-zinc-400" />
      </svg>
    </div>
  );
}
