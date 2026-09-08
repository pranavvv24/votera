# StellarPoll (Votera)

Decentralized, verifiable on-chain polling dApp built on Stellar Soroban smart contracts for the Rise In Yellow Belt program.

---

## 🌟 Overview & Architecture

StellarPoll allows users to create community polls, browse active voting topics, and cast verifiable on-chain votes directly on the **Stellar Testnet**.

### Key Architectural Guidelines
- **Network Exclusivity:** All operations strictly target **Stellar Testnet**.
- **Separation of Concerns:**
  - `src/pages/` - Top-level page views (`Landing.tsx`, `Dashboard.tsx`).
  - `src/components/` - Dumb/presentational UI components.
  - `src/hooks/` - Encapsulated React hooks for state and wallet/contract interactions.
  - `src/stellar/` - Dedicated Stellar SDK & Soroban client wrappers.
  - `src/data/` - Static/mock definitions and schema types.
  - `src/utils/` - Shared utility functions and formatters.
- **Transaction Pipeline:** Standardized 6-step lifecycle:
  `IDLE` → `PREPARING` → `SIMULATING` → `WAITING_FOR_SIGNATURE` → `PENDING` → `SUCCESS` (or `FAILED`).

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** `react-router-dom`
- **Styling:** Tailwind CSS (v4) with customized typography (*Space Grotesk* + *IBM Plex Mono*) and theme tokens
- **Target Network:** Stellar Testnet

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the example environment file:
```bash
cp .env.example .env
```

### 3. Run Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 🧭 Routes

- `/` — **Landing Page**: Project overview and hero launch button.
- `/app` — **Dashboard**: Active polls list, poll details, and voting interface.

---

## 📑 Phase Progress

- [x] **Phase 0:** Project setup & architecture scaffolding (`chore: initialize StellarPoll project`)
- [ ] **Phase 1:** Design system, tokens & mock data integration
- [ ] **Phase 2:** Presentational UI components & interactive preview
- [ ] **Phase 3:** Soroban smart contract development
- [ ] **Phase 4:** Contract deployment & Testnet verification
- [ ] **Phase 5:** StellarWalletsKit integration & on-chain wiring
