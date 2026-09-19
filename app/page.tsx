const metrics = [
  { label: "Gross revenue", value: "$482.4K", change: "+18.2%", tone: "emerald" },
  { label: "Inventory health", value: "94.1%", change: "+6.4%", tone: "violet" },
  { label: "Conversion rate", value: "4.8%", change: "+1.1%", tone: "sky" },
  { label: "At-risk SKUs", value: "12", change: "-8", tone: "amber" },
];

const channels = [
  { name: "Organic search", revenue: "$162K", share: "33%" },
  { name: "Paid social", revenue: "$124K", share: "26%" },
  { name: "Email campaigns", revenue: "$93K", share: "19%" },
  { name: "Marketplace", revenue: "$80K", share: "16%" },
  { name: "Partners", revenue: "$23K", share: "6%" },
];

const alerts = [
  { title: "Low stock risk", detail: "12 products are below reorder threshold", status: "High" },
  { title: "Campaign pulse", detail: "Email campaign outperformed target by 19%", status: "Positive" },
  { title: "Checkout friction", detail: "Mobile conversion slowed by 0.7% this week", status: "Watch" },
];

const products = [
  { name: "Apex Runner X", sold: "2,480", margin: "31.8%" },
  { name: "Luna Smart Bottle", sold: "1,920", margin: "27.6%" },
  { name: "Nova Desk Lamp", sold: "1,450", margin: "34.4%" },
  { name: "Prime Travel Kit", sold: "980", margin: "29.2%" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-glow backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
              A
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-violet-300">AI Commerce Ops</div>
              <div className="text-sm text-slate-400">Intelligence layer for modern commerce</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <span>Overview</span>
            <span>Inventory</span>
            <span>Revenue</span>
            <span>AI Suggestions</span>
          </nav>

          <button className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-400">
            Launch dashboard
          </button>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
              <div className="mb-3 text-sm text-slate-400">{metric.label}</div>
              <div className="mb-3 text-3xl font-semibold text-white">{metric.value}</div>
              <div
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  metric.tone === "emerald"
                    ? "bg-emerald-500/10 text-emerald-300"
                    : metric.tone === "violet"
                      ? "bg-violet-500/10 text-violet-300"
                      : metric.tone === "sky"
                        ? "bg-sky-500/10 text-sky-300"
                        : "bg-amber-500/10 text-amber-300"
                }`}
              >
                {metric.change}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Revenue trend</div>
                <div className="text-2xl font-semibold text-white">$1.84M</div>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                +12.8% vs last month
              </div>
            </div>

            <div className="flex h-52 items-end gap-3">
              {[26, 42, 38, 58, 72, 64, 96, 82, 100, 88, 110, 124].map((height, index) => (
                <div key={index} className="flex-1">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-violet-600 via-indigo-500 to-sky-400"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="mb-5 text-sm text-slate-400">AI recommendations</div>
            <div className="space-y-4">
              {[
                "Replenish best-selling essentials before Friday’s peak demand window.",
                "Increase low-cost bundle marketing on the top 3 high-converting SKUs.",
                "Reduce markdown exposure on slow movers in the home category.",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="mb-5 flex items-center justify-between">
              <div className="text-lg font-semibold text-white">Channel performance</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Last 30 days</div>
            </div>
            <div className="space-y-4">
              {channels.map((channel) => (
                <div key={channel.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{channel.name}</span>
                    <span className="text-slate-400">{channel.revenue}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-sky-400"
                      style={{ width: channel.share }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
              <div className="mb-4 text-lg font-semibold text-white">Operations alerts</div>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.title} className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{alert.title}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          alert.status === "High"
                            ? "bg-rose-500/10 text-rose-300"
                            : alert.status === "Positive"
                              ? "bg-emerald-500/10 text-emerald-300"
                              : "bg-amber-500/10 text-amber-300"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">{alert.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
              <div className="mb-4 text-lg font-semibold text-white">Top products</div>
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/50 p-3">
                    <div>
                      <div className="text-sm font-medium text-slate-200">{product.name}</div>
                      <div className="text-xs text-slate-400">{product.sold} sold</div>
                    </div>
                    <div className="rounded-full bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-300">
                      {product.margin}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
