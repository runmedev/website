# Repository Guidelines

## Project Structure & Module Organization

This is the primary `runme.dev` website, built with Next.js, React, TypeScript, Tailwind CSS, and NextUI. App Router pages and layouts live in `app/`, with grouped routes such as `app/(root)/` and `app/(playground)/`. Reusable UI lives in `components/`, shared hooks in `hooks/`, utilities in `utils/`, and declarations in `types/`. Static assets are under `public/`, blog content is in `fsPosts/`, and project docs are in `docs/`. API handlers are split between `pages/api/` and `api/`.

## Build, Test, and Development Commands

Prefer named Runme targets from `runme list` when available:

- `runme run setup`: install dependencies with `npm install`. Node `>=22.0.0` is required.
- `runme run dev`: export local development env vars and start Next.js on port `3001`.
- `runme run npm-run-build`: create a production build and run `next-sitemap` via `postbuild`.
- `runme run totals`: refresh project totals using the GitHub token-backed Val.town endpoint.
- `npm run type-check`: run `tsc --noEmit`; use this directly because no Runme target exists yet.

## Coding Style & Naming Conventions

Use TypeScript for application code and keep `strict` mode clean. Prefer functional React components, typed props, and the existing path aliases such as `@/components/*`, `@/utils/*`, and `@/hooks/*`. Component files use PascalCase, for example `components/BlogImageLightbox.tsx`; hooks use `useSomething.ts`. Follow the existing two-space JSON formatting and Prettier configuration in `.prettierrc.json`. Use Tailwind utility classes and theme tokens from `tailwind.config.js`; keep shared global styles in `styles/`.

## Testing Guidelines

There is no dedicated unit test script in `package.json` today. For changes, run `npm run type-check` and `runme run npm-run-build` before opening a PR. When adding tests, colocate them near the code they cover and use names such as `ComponentName.test.tsx`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative commit subjects such as `Update Discord invite link` and occasional conventional prefixes like `fix:`. Keep subjects concise and focused. Sign off commits with `git commit --signoff` so each commit includes a `Signed-off-by` trailer.

Pull requests should include a clear summary, verification steps, linked issues when applicable, and screenshots or recordings for visible UI changes. Mention content, asset, sitemap, or environment variable changes reviewers need to validate.

## Security & Configuration Tips

Do not commit secrets or production credentials. API integrations such as Auth0, Mailchimp, Google services, analytics, and reCAPTCHA should read configuration from environment variables. Keep generated output like `.next/` out of review unless explicitly needed.
