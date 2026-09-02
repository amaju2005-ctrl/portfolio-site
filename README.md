# Abhishek Majumdar portfolio

A personal portfolio about startups, venture capital, innovation, social impact, and thoughtful storytelling.

## Local development

This project uses Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Build targets

The repository supports two deployment targets from the same source:

```bash
# Current Sites deployment
npm run build:sites

# Native Next.js build for Vercel
npm run build:vercel
```

The default `npm run build` remains the Sites build. Vercel reads `vercel.json` and runs the native Next.js build automatically.

## Add the repository to GitHub

The existing `origin` remote is used by Sites. Add GitHub as a second remote so both deployment paths keep working:

```bash
git remote add github https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u github main
```

Replace the example URL with the empty GitHub repository you create. If a `github` remote already exists, update it with `git remote set-url github YOUR-REPOSITORY-URL`.

## Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Keep the detected framework as Next.js.
3. Leave the root directory at the repository root.
4. Deploy. No environment variables are required for the current portfolio.

Future pushes to the connected production branch will deploy automatically. Other branches and pull requests will receive preview deployments.

## Contact and project links

- [Book a founder conversation or podcast appearance](https://calendar.app.google/s9nLFUV84N37rw9n9)
- [Nutrition Logger prototype](https://nutrition-logger-9gzaaj3vg-amaju2005-ctrls-projects.vercel.app/)
- [75 Day Hard, built with Base44](https://75dayhard.base44.app/login?from_url=https%3A%2F%2F75dayhard.base44.app%2F)
- [Atomic Goals, built with Base44](https://atomicgoals.base44.app)
