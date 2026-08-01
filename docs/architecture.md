# Architecture

## Initial architecture

```text
ChronoLogic OS
├── apps/web       React + Vite + TypeScript
├── apps/api       Node.js + Express + TypeScript
├── packages/types Shared domain types
├── packages/config Shared configuration
├── packages/utils Shared utilities
└── PostgreSQL     Persistence through Prisma
```

## Principles

1. Keep domain logic independent from UI.
2. Validate data at API boundaries.
3. Keep the initial core deterministic before introducing autonomous AI actions.
4. Build vertically: model → API → UI → test.
5. Treat planning as a constraint-solving problem, not only a calendar UI.
