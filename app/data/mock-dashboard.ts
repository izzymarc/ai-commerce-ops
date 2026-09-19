export type DashboardView = "overview" | "inventory" | "revenue" | "insights";

export const overviewMetrics = [
  { label: "Gross revenue", value: "$482.4K", change: "+18.2%", tone: "positive" as const },
  { label: "Inventory health", value: "94.1%", change: "+6.4%", tone: "accent" as const },
  { label: "Conversion rate", value: "4.8%", change: "+1.1%", tone: "info" as const },
  { label: "At-risk SKUs", value: "12", change: "-8", tone: "warning" as const },
];

export const channelPerformance = [
  { name: "Organic search", revenue: 162000, share: 33 },
  { name: "Paid social", revenue: 124000, share: 26 },
  { name: "Email campaigns", revenue: 93000, share: 19 },
  { name: "Marketplace", revenue: 80000, share: 16 },
  { name: "Partners", revenue: 23000, share: 6 },
];

export const alerts = [
  { title: "Low stock risk", detail: "12 products are below reorder threshold", status: "high" as const },
  { title: "Campaign pulse", detail: "Email campaign outperformed target by 19%", status: "positive" as const },
  { title: "Checkout friction", detail: "Mobile conversion slowed by 0.7% this week", status: "watch" as const },
];

export const inventorySummary = [
  { label: "Stock health", value: "92.7%", hint: "In healthy range", tone: "positive" as const },
  { label: "Reorder risk", value: "18 SKUs", hint: "Needs action in 7 days", tone: "warning" as const },
  { label: "Inventory value", value: "$1.42M", hint: "Across all locations", tone: "accent" as const },
  { label: "Backorder exposure", value: "$38.9K", hint: "Potential delayed revenue", tone: "info" as const },
];

export const inventoryProducts = [
  {
    sku: "AX-1132",
    name: "Apex Runner X",
    category: "Footwear",
    stock: 42,
    threshold: 35,
    value: "$18,900",
    status: "healthy" as const,
  },
  {
    sku: "LS-2081",
    name: "Luna Smart Bottle",
    category: "Accessories",
    stock: 12,
    threshold: 20,
    value: "$7,120",
    status: "reorder" as const,
  },
  {
    sku: "ND-4430",
    name: "Nova Desk Lamp",
    category: "Home",
    stock: 88,
    threshold: 50,
    value: "$11,500",
    status: "healthy" as const,
  },
  {
    sku: "PT-9910",
    name: "Prime Travel Kit",
    category: "Travel",
    stock: 6,
    threshold: 14,
    value: "$2,280",
    status: "critical" as const,
  },
];

export const revenueByPeriod = {
  "7d": [
    { label: "Mon", amount: 52000 },
    { label: "Tue", amount: 48600 },
    { label: "Wed", amount: 53300 },
    { label: "Thu", amount: 56200 },
    { label: "Fri", amount: 64800 },
    { label: "Sat", amount: 61200 },
    { label: "Sun", amount: 60400 },
  ],
  "30d": [
    { label: "W1", amount: 310000 },
    { label: "W2", amount: 328000 },
    { label: "W3", amount: 347000 },
    { label: "W4", amount: 359000 },
  ],
  "90d": [
    { label: "Jun", amount: 1090000 },
    { label: "Jul", amount: 1180000 },
    { label: "Aug", amount: 1260000 },
  ],
} as const;

export const conversionMetrics = [
  { label: "Site conversion", value: "4.8%", trend: "+0.4%" },
  { label: "Returning customer rate", value: "38.2%", trend: "+1.6%" },
  { label: "Cart recovery", value: "17.5%", trend: "+2.1%" },
];

export const aiInsights = [
  {
    title: "Prioritize reorder for Luna Smart Bottle",
    priority: "High",
    rationale: "Stock is projected to run out in 4 days while paid social demand is rising.",
    impact: "Protect an estimated $14.8K in weekly revenue.",
    action: "Create reorder draft",
  },
  {
    title: "Shift spend toward Apex Runner bundles",
    priority: "Medium",
    rationale: "Bundle campaigns show 22% higher conversion than single-item ads this week.",
    impact: "Potential +$9.2K incremental weekly gross margin.",
    action: "Adjust campaign allocation",
  },
  {
    title: "Reduce markdown depth on Nova Desk Lamp",
    priority: "Low",
    rationale: "Current sell-through is healthy and markdown rate is above target threshold.",
    impact: "Recover up to 2.4 margin points for this category.",
    action: "Review pricing rules",
  },
];
