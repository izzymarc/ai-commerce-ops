# AI Commerce Ops (Demo SaaS Prototype)

AI Commerce Ops is a polished **demo** SaaS prototype for commerce operators who need faster decisions across inventory, revenue, and execution priorities.

## Product Problem

Commerce teams often manage operations in fragmented dashboards and spreadsheets. This creates delayed reactions to stock risk, inefficient campaign shifts, and unclear revenue signals.

AI Commerce Ops demonstrates a unified operations shell that combines inventory visibility, revenue monitoring, and AI-guided recommendations in one interface.

## Target Users

- Ecommerce founders and operators
- Inventory and merchandising managers
- Revenue and growth teams
- Agency partners managing multi-channel stores

## Current Features

- Responsive product shell with mobile + desktop navigation
- Client-side views for:
  - **Overview**
  - **Inventory**
  - **Revenue**
  - **AI Insights**
- Inventory health cards and product table with status badges + action affordances
- Revenue period controls, trend chart, channel breakdown, and conversion metrics
- AI recommendation cards with priority, rationale, expected impact, and action CTA
- Loading and error-safe route UI patterns
- Keyboard-accessible navigation and focus-visible states

## Demo Status (Important)

This project currently runs on **mock/demo data only**.

- No live storefront or ERP integrations
- No production AI inference pipeline
- No real-time sync or customer data processing

The AI recommendations and metrics are simulated for product prototyping and portfolio demonstration.

## Architecture

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React + Tailwind CSS
- **State:** Client-side React state (self-contained demo)
- **Data source:** Local static mock data module (`app/data/mock-dashboard.ts`)

## Local Setup

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

### Production build

```bash
npm run build
npm run start
```

## Roadmap

- Connect authenticated user accounts and workspace-level data
- Add real inventory/order connectors and ingestion pipelines
- Add explainable AI workflows with traceable inputs
- Introduce forecasting and anomaly detection modules
- Ship alerting + task automation workflows
- Add robust test coverage and monitoring for production readiness

## Disclaimer

AI Commerce Ops is a portfolio-grade prototype and not a production-ready commerce platform yet. All displayed data is demo-only and should not be interpreted as real operational intelligence.
