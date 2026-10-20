# ExportFlow — Shipping Bill Refactor

A focused frontend refactor of the Shipping Bill creation workflow. The app is self-contained and does not require the original `fe-zen-arch` git submodule or a backend service.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL (normally `http://localhost:5173`). For a production build:

```bash
npm run typecheck
npm run build
npm run preview
```

## What is included

- Dashboard with bill search, draft/submitted status, open/edit, and delete actions.
- Shipping Bill form organized into Shipment, Cargo, Invoices, and Containers sections.
- Reusable field/select helpers and explicit form state handling.
- Async Promise-based mock services in `src/shipping-bills/mock-service.ts`; UI components do not import hardcoded option arrays.
- Simulated service latency, loading/error/empty states, and browser-local persistence through `localStorage`.
- Validation for required parties/ports, invoice item details, positive quantities, non-negative prices, and net weight not exceeding gross weight.
- Invoice line and invoice totals calculated from quantity × unit price.
- No new runtime dependencies added. Mock data and service access are separated so the service implementation can later be replaced by HTTP calls.

## Domain assumptions

This is a frontend exercise, not a customs filing system. Port and party records are illustrative mock data. HS/RITC codes are user-entered; this app does not certify code correctness. “Submit” updates the local mock record to `Submitted`; it does not send a customs declaration or contact an external API. Supporting-document upload and e-Sanchit integration are intentionally out of scope.

## AI Usage & Approach

AI assistance was used to help refactor the form structure, separate mock data access from UI code, and draft validation and documentation. The resulting code should be reviewed and tested by the submitter before delivery. The implementation prioritizes a small, understandable architecture and avoids adding dependencies.

## Data storage

Records are stored in the current browser's local storage under `shipping-bill-refactor-v1`. Clearing browser storage removes demo records.
