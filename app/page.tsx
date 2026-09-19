"use client";

import { useMemo, useState } from "react";
import {
  aiInsights,
  alerts,
  channelPerformance,
  conversionMetrics,
  DashboardView,
  inventoryProducts,
  inventorySummary,
  overviewMetrics,
  revenueByPeriod,
} from "./data/mock-dashboard";

type RevenuePeriod = keyof typeof revenueByPeriod;

const navItems: { key: DashboardView; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "inventory", label: "Inventory" },
  { key: "revenue", label: "Revenue" },
  { key: "insights", label: "AI Insights" },
];

function toneStyles(tone: "positive" | "accent" | "info" | "warning") {
  if (tone === "positive") return "bg-emerald-500/10 text-emerald-300";
  if (tone === "accent") return "bg-violet-500/10 text-violet-300";
  if (tone === "info") return "bg-sky-500/10 text-sky-300";
  return "bg-amber-500/10 text-amber-300";
}

export default function HomePage() {
  const [activeView, setActiveView] = useState<DashboardView>("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [period, setPeriod] = useState<RevenuePeriod>("30d");

  const revenueSeries = revenueByPeriod[period];

  const chartPoints = useMemo(() => {
    if (!revenueSeries.length) return "";

    const maxValue = Math.max(...revenueSeries.map((item) => item.amount));

    return revenueSeries
      .map((point, index) => {
        const x = (index / Math.max(revenueSeries.length - 1, 1)) * 100;
        const y = 100 - (point.amount / maxValue) * 100;
        return `${x},${y}`;
      })
      .join(" ");
  }, [revenueSeries]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-2xl border border-white/10 bg-slate-900/75 p-4 shadow-glow backdrop-blur-xl sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
                A
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-violet-300">AI Commerce Ops</p>
                <p className="text-sm text-slate-300">Operations command center</p>
              </div>
            </div>
            <button
              type="button"
              aria-expanded={mobileNavOpen}
              aria-controls="dashboard-navigation"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-slate-100 md:hidden"
            >
              Menu
            </button>
          </div>

          <div className="mt-4 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
            Demo mode: all metrics and AI output are mock data for prototype use.
          </div>

          <div className="mt-4 md:hidden" id="dashboard-navigation" hidden={!mobileNavOpen}>
            <nav aria-label="Dashboard views" className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  aria-current={activeView === item.key ? "page" : undefined}
                  onClick={() => {
                    setActiveView(item.key);
                    setMobileNavOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                    activeView === item.key
                      ? "bg-violet-500 text-white"
                      : "border border-white/15 bg-slate-900 text-slate-200 hover:border-white/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden rounded-2xl border border-white/10 bg-slate-900/70 p-3 md:block" aria-label="Sidebar navigation">
            <nav aria-label="Dashboard views" className="space-y-1.5" id="dashboard-navigation">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  aria-current={activeView === item.key ? "page" : undefined}
                  onClick={() => setActiveView(item.key)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                    activeView === item.key
                      ? "bg-violet-500 text-white"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <section aria-live="polite" className="space-y-6">
            {activeView === "overview" && (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {overviewMetrics.map((metric) => (
                    <article key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                      <p className="mb-2 text-sm text-slate-300">{metric.label}</p>
                      <p className="mb-3 text-3xl font-semibold text-white">{metric.value}</p>
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${toneStyles(metric.tone)}`}>
                        {metric.change}
                      </span>
                    </article>
                  ))}
                </div>

                <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-white">Channel performance</h2>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Demo last 30d</span>
                    </div>
                    {channelPerformance.length ? (
                      <div className="space-y-4">
                        {channelPerformance.map((channel) => (
                          <div key={channel.name}>
                            <div className="mb-2 flex items-center justify-between text-sm">
                              <span className="text-slate-200">{channel.name}</span>
                              <span className="text-slate-300">${(channel.revenue / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="h-2.5 rounded-full bg-slate-800">
                              <div
                                className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-sky-400"
                                style={{ width: `${channel.share}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="rounded-xl border border-dashed border-white/20 p-4 text-sm text-slate-300">
                        No channel records in this demo range.
                      </p>
                    )}
                  </article>

                  <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                    <h2 className="mb-4 text-lg font-semibold text-white">Operations alerts</h2>
                    {alerts.length ? (
                      <div className="space-y-3">
                        {alerts.map((alert) => (
                          <div key={alert.title} className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                            <div className="mb-1 flex items-center justify-between text-sm">
                              <span className="text-slate-100">{alert.title}</span>
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                                  alert.status === "high"
                                    ? "bg-rose-500/15 text-rose-300"
                                    : alert.status === "positive"
                                      ? "bg-emerald-500/15 text-emerald-300"
                                      : "bg-amber-500/15 text-amber-300"
                                }`}
                              >
                                {alert.status}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300">{alert.detail}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="rounded-xl border border-dashed border-white/20 p-4 text-sm text-slate-300">
                        No alerts to display for this demo snapshot.
                      </p>
                    )}
                  </article>
                </div>
              </>
            )}

            {activeView === "inventory" && (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {inventorySummary.map((item) => (
                    <article key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                      <p className="mb-2 text-sm text-slate-300">{item.label}</p>
                      <p className="text-3xl font-semibold text-white">{item.value}</p>
                      <p className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${toneStyles(item.tone)}`}>
                        {item.hint}
                      </p>
                    </article>
                  ))}
                </div>

                <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <h2 className="text-lg font-semibold text-white">Inventory product table</h2>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Demo data</span>
                  </div>

                  {inventoryProducts.length ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-sm">
                        <thead>
                          <tr className="text-xs uppercase tracking-wide text-slate-400">
                            <th className="px-3 py-2">Product</th>
                            <th className="px-3 py-2">Category</th>
                            <th className="px-3 py-2">Stock</th>
                            <th className="px-3 py-2">Threshold</th>
                            <th className="px-3 py-2">Value</th>
                            <th className="px-3 py-2">Status</th>
                            <th className="px-3 py-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inventoryProducts.map((product) => (
                            <tr key={product.sku} className="border-t border-white/10 text-slate-200">
                              <td className="px-3 py-3">
                                <p className="font-medium text-white">{product.name}</p>
                                <p className="text-xs text-slate-400">{product.sku}</p>
                              </td>
                              <td className="px-3 py-3">{product.category}</td>
                              <td className="px-3 py-3">{product.stock}</td>
                              <td className="px-3 py-3">{product.threshold}</td>
                              <td className="px-3 py-3">{product.value}</td>
                              <td className="px-3 py-3">
                                <span
                                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                                    product.status === "critical"
                                      ? "bg-rose-500/15 text-rose-300"
                                      : product.status === "reorder"
                                        ? "bg-amber-500/15 text-amber-300"
                                        : "bg-emerald-500/15 text-emerald-300"
                                  }`}
                                >
                                  {product.status}
                                </span>
                              </td>
                              <td className="px-3 py-3">
                                <div className="flex gap-2">
                                  <button type="button" className="rounded-md border border-white/15 px-2 py-1 text-xs hover:border-white/35">
                                    View
                                  </button>
                                  <button type="button" className="rounded-md bg-violet-500 px-2 py-1 text-xs text-white hover:bg-violet-400">
                                    Reorder
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="rounded-xl border border-dashed border-white/20 p-4 text-sm text-slate-300">
                      No products available in this demo snapshot.
                    </p>
                  )}
                </article>
              </>
            )}

            {activeView === "revenue" && (
              <>
                <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-white">Revenue trends</h2>
                      <p className="text-sm text-slate-300">Demo period comparison with channel contributions.</p>
                    </div>
                    <div className="inline-flex rounded-lg border border-white/15 bg-slate-950/50 p-1">
                      {(
                        [
                          { label: "7D", value: "7d" },
                          { label: "30D", value: "30d" },
                          { label: "90D", value: "90d" },
                        ] as const
                      ).map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPeriod(option.value)}
                          aria-pressed={period === option.value}
                          className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                            period === option.value
                              ? "bg-violet-500 text-white"
                              : "text-slate-200 hover:bg-white/10"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {revenueSeries.length ? (
                    <div className="space-y-3">
                      <div className="h-56 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                        <svg viewBox="0 0 100 100" aria-label="Revenue trend chart" className="h-full w-full" role="img">
                          <defs>
                            <linearGradient id="revenueStroke" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#a78bfa" />
                              <stop offset="100%" stopColor="#38bdf8" />
                            </linearGradient>
                          </defs>
                          <polyline
                            fill="none"
                            stroke="url(#revenueStroke)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            points={chartPoints}
                          />
                        </svg>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-xs text-slate-300 sm:grid-cols-7">
                        {revenueSeries.map((point) => (
                          <div key={point.label} className="rounded-md border border-white/10 bg-slate-950/40 p-2 text-center">
                            <p>{point.label}</p>
                            <p className="mt-1 font-medium text-white">${(point.amount / 1000).toFixed(0)}K</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="rounded-xl border border-dashed border-white/20 p-4 text-sm text-slate-300">
                      No revenue values available for this period.
                    </p>
                  )}
                </article>

                <div className="grid gap-4 lg:grid-cols-2">
                  <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                    <h3 className="mb-4 text-base font-semibold text-white">Channel breakdown</h3>
                    <div className="space-y-3">
                      {channelPerformance.map((channel) => (
                        <div key={channel.name} className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span className="text-slate-100">{channel.name}</span>
                            <span className="text-slate-200">{channel.share}%</span>
                          </div>
                          <p className="text-xs text-slate-300">${(channel.revenue / 1000).toFixed(0)}K attributed revenue</p>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                    <h3 className="mb-4 text-base font-semibold text-white">Conversion metrics</h3>
                    <div className="space-y-3">
                      {conversionMetrics.map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/40 p-3">
                          <div>
                            <p className="text-sm text-slate-200">{metric.label}</p>
                            <p className="text-xs text-slate-400">Demo benchmark delta {metric.trend}</p>
                          </div>
                          <p className="text-lg font-semibold text-white">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </>
            )}

            {activeView === "insights" && (
              <>
                <article className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-4 text-sm text-sky-100">
                  AI Insights shown below are simulated/demo outputs for prototype evaluation, not live production intelligence.
                </article>

                <div className="grid gap-4 lg:grid-cols-2">
                  {aiInsights.length ? (
                    aiInsights.map((insight) => (
                      <article key={insight.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <h2 className="text-base font-semibold text-white">{insight.title}</h2>
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-medium ${
                              insight.priority === "High"
                                ? "bg-rose-500/15 text-rose-300"
                                : insight.priority === "Medium"
                                  ? "bg-amber-500/15 text-amber-300"
                                  : "bg-emerald-500/15 text-emerald-300"
                            }`}
                          >
                            {insight.priority}
                          </span>
                        </div>
                        <p className="mb-3 text-sm text-slate-200">{insight.rationale}</p>
                        <p className="mb-4 rounded-lg border border-violet-400/20 bg-violet-500/5 p-3 text-sm text-violet-100">
                          Expected impact: {insight.impact}
                        </p>
                        <button type="button" className="rounded-lg bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-400">
                          {insight.action}
                        </button>
                      </article>
                    ))
                  ) : (
                    <p className="rounded-xl border border-dashed border-white/20 p-4 text-sm text-slate-300">
                      No AI recommendations are available for this demo dataset.
                    </p>
                  )}
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
