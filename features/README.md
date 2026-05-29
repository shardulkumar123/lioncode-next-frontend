# Features Folder (Modular / Domain-Driven Design)

To maintain a clean and scalable codebase as the application grows, we use a **feature-driven structure** (sometimes called screaming architecture). 

Instead of scattering a single feature's components, hooks, api-services, and types across global folders, group them inside a feature folder inside this directory.

## Recommended Feature Structure

Every folder in `features/` should represent a cohesive business domain or module (e.g., `auth`, `dashboard`, `checkout`, `orders`, `profile`). 

A fully realized feature folder looks like this:

```text
features/auth/
├── components/          # Components specific to this feature (e.g. login-form.tsx, auth-guard.tsx)
├── hooks/               # Custom hooks specific to this feature (e.g. use-auth.ts)
├── services/            # API services, handlers, endpoints specific to this feature (e.g. auth-api.ts)
├── types.ts             # TypeScript interfaces for this feature
└── constants.ts         # Constants used purely within this feature
```

## Rules of Engagement

1. **Feature Isolation**: Components inside `features/auth/` should only import from their own feature folder, global `components/ui/`, global `hooks/`, or global `lib/`. They should **never** import directly from other features (e.g. `features/dashboard/`) to prevent circular dependencies.
2. **Promotion to Global**: If a component inside a feature (e.g. `features/auth/components/avatar.tsx`) ends up being used across multiple different features, it should be refactored and moved to the global `components/` directory (e.g., `components/common/avatar.tsx`).
3. **App Router Integration**: Keep page layouts, routes, and loading wrappers in the root `app/` folder. The pages inside `app/` should simply import and render feature components.
