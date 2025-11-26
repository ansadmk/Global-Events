# Global Event — MENA Region

This is a lightweight React + TypeScript single-page application for marketing and managing events across the MENA region (CX & Loyalty, Future Banks, Proptech).

---

## Table of contents

- [Project overview](#project-overview)
- [Preview](#preview)
- [Technologies](#technologies)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Forms & API](#forms--api)
- [Styling & theme](#styling--theme)
- [Contributing](#contributing)
- [License & contact](#license--contact)

---

## Project overview

This repository contains a client application that presents information about an event series across the MENA region. The app is built with modern frontend tools (Vite, React, TypeScript, Tailwind CSS) and includes UI primitives, pages for events, registration/contact forms, and client-side state management for server requests.

Primary entry points:

- HTML shell: `client/index.html`
- App bootstrap: `client/src/main.tsx`
- App root & routes: `client/src/App.tsx`

## Preview

Open a local dev server and view at `http://localhost:5173` (default Vite port) after following the setup steps below.

## Technologies

- **React**: UI library used to build the single-page application.
- **TypeScript**: Static typing for improved DX and maintainability.
- **Vite**: Fast dev server and bundler for modern frontend tooling.
- **Tailwind CSS**: Utility-first styling system used for layout and design tokens.
- **Radix UI / shadcn components**: Accessible UI primitives and component patterns (components under `client/src/components/ui`).
- **@tanstack/react-query**: Server-state management and caching for network requests.
- **react-hook-form**: Declarative form handling for contact and registration forms.
- **wouter**: Lightweight routing for client-side navigation.
- **lucide-react**: Icon set used across UI components.
- **Framer Motion & AOS**: UI and scroll-triggered animations.

These choices prioritize fast iteration (Vite), developer ergonomics (TypeScript, React), and a consistent, accessible UI (Radix/shadcn + Tailwind).

## Getting started

Prerequisites:

- Node.js (recommended 18+)
- npm, pnpm, or yarn

Installation and local dev:

```powershell
npm install
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview a production build (if script available):

```powershell
npm run preview
```

If your project uses a package manager other than `npm`, replace the commands accordingly (e.g., `pnpm install` / `pnpm dev`).

## Available scripts

The project defines common scripts in `package.json`. Typical scripts you can expect:

- `dev` — start Vite dev server
- `build` — build the app for production
- `preview` or `start` — preview production build or run a production server

Check `package.json` for the exact script names and any additional helper scripts.

## Project structure (high level)

- `client/` — client-side app
  - `index.html` — HTML shell (includes AOS stylesheet/script via CDN)
  - `src/` — source files
    - `main.tsx` — bootstrap and providers
    - `App.tsx` — app root, routes, and providers
    - `components/` — UI components and layout
      - `ui/` — Radix/shadcn UI primitives
    - `pages/` — route pages (Home, About, Events, Contact, Register, etc.)
    - `hooks/` — custom hooks and mutations
    - `lib/` — shared utilities (e.g., `queryClient.ts`, `utils.ts`)
- `public/` — static assets used by the app (logos, icons, etc.)

Other top-level config files:

- `vite.config.ts` — Vite configuration and aliasing
- `tailwind.config.ts` — Tailwind configuration and theme tokens
- `postcss.config.js` — PostCSS config
- `tsconfig.json` — TypeScript configuration and path aliases
- `components.json` — shadcn generator configuration

## Forms & API

Contact and registration flows are implemented as either direct fetch calls (older pages) or as react-query mutations using custom hooks (e.g., `useContactMutation`, `useRegistrationMutation`). Look in `client/src/hooks/` and `client/src/lib/queryClient.ts` for the request/caching logic.

If the app communicates with external APIs, locate environment variables and base URLs in the project's configuration or the code where the fetch/mutation helpers are defined.

## Styling & theme

Tailwind CSS is the primary styling mechanism. Project CSS variables and tokens are available in `client/src/index.css`, and Tailwind is configured to use those tokens in `tailwind.config.ts`.

## Contributing

If you'd like to contribute:

1. Fork the repository on GitHub and create a feature branch.
2. Install dependencies and run the dev server.
3. Follow the repository style (TypeScript, functional React components, and Tailwind utilities).
4. Open a pull request with a clear description and any relevant screenshots or test steps.

For significant changes (new pages, API schema changes), add or update documentation in the `docs/` folder or the relevant component/page README.

## Notes and tips

- AOS (Animate On Scroll) is included from a CDN in `client/index.html` and is commonly initialized inside page components with a `useEffect` that checks for `window.AOS`.
- Path alias `@/*` is commonly used and configured in `tsconfig.json` and `vite.config.ts`.
- UI primitives follow the shadcn folder patterns and generator config in `components.json`.

