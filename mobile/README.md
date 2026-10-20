# Local Bulgarian Tour — Mobile App

Expo React Native (TypeScript) app with Expo Router, NativeWind (Tailwind CSS) and
strict TypeScript. Placeholder screens: **Discover, Map, Favorites, Profile**.

## Requirements

- **Node.js 20+** (LTS recommended)
- npm 10+
- [Expo Go](https://expo.dev/go) on a physical device, or Android Studio / Xcode simulators

## Setup

```bash
cd mobile
npm install
cp .env.example .env   # fill in values if needed
npm start              # Expo dev server
```

Run on a platform:

```bash
npm run android   # Android emulator/device
npm run ios       # iOS simulator (macOS only)
npm run web       # quick web preview
```

Press `i` / `a` in the dev server to open iOS/Android, or scan the QR code with
Expo Go on your phone.

## Scripts

| Script              | Purpose                        |
| ------------------- | ------------------------------ |
| `npm start`         | Expo dev server                |
| `npm run android`   | Start on Android               |
| `npm run ios`       | Start on iOS                   |
| `npm run typecheck` | `tsc --noEmit` (strict)        |
| `npm run lint`      | ESLint (expo + prettier rules) |
| `npm run format`    | Prettier write                 |
| `npm run test`      | Jest (jest-expo)               |

## Conventions

- **Routing**: file-based routes in `app/`. Tabs live in `app/(tabs)/`.
- **Feature code**: put domain features under `src/features/<feature>/` with their
  screens, components and hooks. Global UI primitives go in `src/components/`.
- **Path aliases**: `@/*` → `src/*`, `@app/*` → `app/*`.
- **Styling**: NativeWind utility classes (`className`) for markup; shared design
  tokens (colors, spacing, typography, radii) live in `src/theme/index.ts` and
  `tailwind.config.js` — add new tokens there, never inline magic values.
- **Environment variables**: prefix with `EXPO_PUBLIC_` and access via
  `src/utils/env.ts` (typed), not `process.env` directly.
- **Quality gates before a PR**: `npm run typecheck && npm run lint && npm run test`.

## Bulgarian visual identity

The theme uses the flag green `#00994D` and red `#D62612` with rose-festival gold
`#C79A3B`. All token combinations are checked for WCAG AA contrast in light and
dark mode.
