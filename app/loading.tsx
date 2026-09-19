export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-4">
        <div className="h-24 rounded-2xl bg-slate-800/70" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-28 rounded-2xl bg-slate-800/70" />
          ))}
        </div>
        <div className="h-80 rounded-2xl bg-slate-800/70" />
      </div>
    </main>
  );
}
