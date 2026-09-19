"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-50">
      <section className="w-full max-w-xl rounded-2xl border border-rose-500/20 bg-slate-900/80 p-6 text-center shadow-glow">
        <p className="mb-2 text-xs uppercase tracking-[0.24em] text-rose-300">Dashboard load issue</p>
        <h1 className="mb-3 text-xl font-semibold text-white">We could not render this demo view.</h1>
        <p className="mb-5 text-sm text-slate-300">
          Please retry. This prototype uses local demo data and no external integrations.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-400"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
