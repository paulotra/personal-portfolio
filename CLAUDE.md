# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Nuxt 4** (Vue 3, file-based routing)
- **Tailwind CSS** via `@nuxtjs/tailwindcss`
- **Storybook 10** (`@storybook/vue3-vite`) with vitest integration

## Commands

```bash
npm run dev           # Nuxt dev server (http://localhost:3000)
npm run build         # Production build
npm run preview       # Preview production build
npm run storybook     # Storybook dev server (http://localhost:6006)
npm run build-storybook
npx vitest            # Run Storybook/component tests
```

## Project Structure

```
app/
  app.vue             # Root layout
public/               # Static assets
stories/              # Storybook stories and example components
.storybook/
  main.ts             # Storybook config (vite builder, vue3-vite framework)
  preview.ts          # Global decorators/parameters
  vitest.setup.ts     # Vitest setup for Storybook tests
nuxt.config.ts        # Nuxt config (modules: tailwindcss)
vitest.config.ts      # Vitest config (browser mode via playwright)
```

## Notes

- Storybook runs independently of Nuxt (installed via Storybook CLI, not `@nuxtjs/storybook`)
- Vitest is configured in browser mode using Playwright/Chromium for story tests
- Tailwind uses the default config; add `tailwind.config.ts` to extend it
- Nuxt 4 uses the `app/` directory convention (pages in `app/pages/`, components in `app/components/`, etc.)