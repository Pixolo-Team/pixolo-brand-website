# Pixolo Brand Website - Copilot Instructions

## Project Overview

This is the brand website for Pixolo Technologies, built with Astro 5.15.3 and Tailwind CSS v4. The project is a static site generator setup using TypeScript, featuring a modern component-based architecture with animations, custom fonts, and responsive design.

**Repository Size:** ~243MB (primarily due to node_modules)  
**Source Files:** 16 files (.astro and .ts files in src/)  
**Build Output:** Static HTML site in `dist/`  
**Node.js Version:** v20.19.5  
**npm Version:** 10.8.2

## Build & Development Workflow

### Initial Setup

**ALWAYS run npm install before any build or dev commands:**
```bash
npm install
```

This takes approximately 30-40 seconds and installs 389+ packages. The project does NOT commit lock files (package-lock.json is in .gitignore).

### Available Commands

The project has 4 npm scripts (no linting, testing, or formatting scripts):

1. **Development Server:**
   ```bash
   npm run dev
   ```
   Starts Astro dev server on http://localhost:4321 (default)

2. **Production Build:**
   ```bash
   npm run build
   ```
   - Takes ~1-2 seconds
   - Outputs to `dist/` directory
   - Generates 2 static pages: `/` and `/about/`
   - Shows a harmless warning about unused imports from vite

3. **Preview Built Site:**
   ```bash
   npm run preview
   ```
   Previews the production build locally

4. **Astro CLI:**
   ```bash
   npm run astro
   ```
   Direct access to Astro CLI commands

### Clean Build Workflow

To ensure a clean build after making changes:
```bash
rm -rf dist .astro && npm run build
```

The `.astro/` directory contains generated TypeScript types and should be cleaned before rebuilds.

### Build Validation

After making code changes:
1. Always run `npm run build` to verify the build succeeds
2. Build time should remain ~1-2 seconds
3. Check for any new warnings or errors beyond the expected vite warning
4. Verify `dist/` directory is created with correct structure

### Known Build Behaviors

- **Warning (expected):** Vite warning about unused imports from "@astrojs/internal-helpers/remote" in node_modules - this is safe to ignore
- **TypeScript checking:** The project does NOT have `@astrojs/check` installed, so `astro check` will fail. TypeScript checking is not part of the validation workflow.
- **No tests:** There are no test files or test infrastructure in this project
- **No linting:** No ESLint, Prettier, or other linting tools are configured

## Project Architecture

### Directory Structure

```
/
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md    # PR checklist template
│   └── copilot-instructions.md     # This file
├── .vscode/
│   ├── extensions.json             # Recommends astro-build.astro-vscode
│   └── launch.json                 # Debug config for dev server
├── public/                         # Static assets (copied to dist/)
│   ├── brand-logo/                 # PNG logos (default, dark, light)
│   ├── fonts/                      # Neometric font family (.otf files)
│   ├── icons/                      # SVG icons (20+ client/brand icons)
│   ├── images/                     # PNG images
│   ├── videos/                     # Video files (stars.mp4)
│   ├── favicon-dark.png
│   ├── favicon-light.png
│   ├── favicon.svg
│   └── 3d-ball-1.svg
├── src/
│   ├── assets/                     # Build-time assets
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/                 # Reusable Astro components
│   │   ├── Badge.astro
│   │   ├── BottomCTA.astro
│   │   ├── BrandLogo.astro
│   │   ├── MenuBar.astro
│   │   ├── Navbar.astro
│   │   ├── RoundedButton.astro
│   │   ├── ServiceItem.astro
│   │   └── ToolBadge.astro
│   ├── data/                       # TypeScript data files
│   │   └── services.ts             # Services array export
│   ├── icons/                      # Custom SVG icons for astro-icon
│   │   ├── building.svg
│   │   └── service-icon.svg
│   ├── layouts/                    # Layout components
│   │   └── Layout.astro            # Main layout with navbar, fonts, meta
│   ├── pages/                      # Route pages (file-based routing)
│   │   ├── index.astro             # Homepage
│   │   └── about.astro             # About page (empty placeholder)
│   ├── sections/                   # Page sections
│   │   └── home/
│   │       ├── About.astro         # Empty file
│   │       ├── Clients.astro
│   │       ├── Hero.astro
│   │       └── Service.astro
│   └── styles/                     # Global styles
│       ├── global.css              # Base styles, fonts, color variables
│       └── animations.css          # Animation classes
├── astro.config.mjs                # Astro configuration
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript config (extends astro/tsconfigs/strict)
├── .gitignore                      # Ignores dist, .astro, node_modules, lock files
└── README.md                       # Brief project description
```

### Key Configuration Files

**astro.config.mjs:**
- Integrations: `astro-icon` for SVG icons
- Vite plugin: `@tailwindcss/vite` for Tailwind CSS v4
- No SSR, no adapters - static site generation only

**tsconfig.json:**
- Extends `astro/tsconfigs/strict`
- Includes all TypeScript files and generated `.astro/types.d.ts`
- Excludes `dist/` directory

**package.json:**
- Type: "module" (ES modules)
- Dependencies: @tailwindcss/vite, astro-icon, tailwindcss
- DevDependencies: astro
- No test, lint, or format scripts

### Styling System

**Tailwind CSS v4** is configured via Vite plugin (not standalone config file).

**Custom CSS Variables:**
- Neutral colors: `--color-n-50` through `--color-n-950` (responsive to color scheme)
- Blue shades: `--blue-50` through `--blue-950`
- Violet shades: `--violet-50` through `--violet-950`
- Variables reverse in dark mode (light becomes dark, dark becomes light)

**Custom Font: Neometric**
- 9 weights loaded via @font-face (100-900)
- Files in `public/fonts/` as .otf format
- Applied globally via `font-family: "Neometric", sans-serif`

**Animation Classes:**
- `.anim-fade-up-quick`, `.anim-fade-in-up`, `.anim-fade-in-right`
- Triggered via Intersection Observer in Layout.astro
- Becomes visible when `.anim-visible` class is added (20% threshold)

### Component Patterns

**Astro Components** (`.astro` files):
- Use `---` frontmatter for imports and logic
- TypeScript interfaces via `interface Props {}`
- Props destructured with defaults: `const { prop = "default" } = Astro.props as Props`
- Components are in `src/components/`, sections in `src/sections/`

**Data-driven rendering:**
- Data files in `src/data/` (e.g., services.ts)
- Iterate with `.map()` in JSX-like syntax

**Image handling:**
- Use Astro's `Image` component from `astro:assets`
- Reference public images: `<Image src="/images/name.png" ... />`
- Include width, height, loading="lazy", decoding="async"

### Routing

File-based routing via `src/pages/`:
- `index.astro` → `/`
- `about.astro` → `/about/`

No dynamic routes currently configured.

## PR Checklist & Quality Standards

The `.github/PULL_REQUEST_TEMPLATE.md` defines expected quality standards:

**Developer Self-Review:**
- Test across breakpoints (sm/md/lg/xl)
- Verify hover, focus, animation states
- No unused/commented code
- Images optimized
- Use Tailwind/Theme tokens
- Local build runs successfully
- SonarLint clean (if available in your IDE)

**Design/QC Review:**
- Match Figma designs visually
- Handle all breakpoints
- Implement hover/focus/disabled states
- Empty and error states (if applicable)
- No console errors
- Test light & dark mode

When making changes, always verify the build succeeds and consider these quality standards.

## Making Code Changes

### Recommended Workflow

1. **Understand the change needed** - review existing patterns in similar files
2. **Make minimal changes** - modify only what's necessary
3. **Test the build immediately:**
   ```bash
   npm run build
   ```
4. **For visual changes**, start dev server and verify:
   ```bash
   npm run dev
   ```
5. **Check responsive behavior** at different breakpoints if applicable
6. **Verify no new errors** in build output

### Common Change Types

**Adding a new page:**
1. Create new `.astro` file in `src/pages/`
2. Import Layout: `import Layout from "../layouts/Layout.astro"`
3. Wrap content in `<Layout>` component
4. Build to verify routing works

**Adding a new component:**
1. Create `.astro` file in `src/components/`
2. Define Props interface if needed
3. Use TypeScript for type safety
4. Follow existing patterns (see ServiceItem.astro, Badge.astro)

**Adding styles:**
1. Use Tailwind utility classes (preferred)
2. Reference CSS variables:
   - Neutral: `bg-n-50`, `text-n-950`
   - Blue: `bg-blue-500`, `text-blue-700`
   - Violet: `bg-violet-500`, `text-violet-700`
3. For global styles, add to `src/styles/global.css`
4. For animations, add to `src/styles/animations.css`

**Adding static assets:**
1. Place in `public/` directory (fonts, images, icons, videos)
2. Reference with absolute paths: `/images/name.png`
3. Files are copied as-is to `dist/` during build

### TypeScript Patterns

The project uses TypeScript but WITHOUT type checking in the build:
- Type annotations in frontmatter and interfaces
- No need to run `tsc` or `astro check`
- Focus on runtime correctness over compile-time checking

### Dependencies

When adding dependencies:
1. Use npm: `npm install <package>`
2. Check compatibility with Astro 5.x
3. Update imports in code
4. Test build immediately
5. Note that lock files are gitignored

## Trust These Instructions

These instructions have been thoroughly validated by:
- Running fresh `npm install`
- Testing `npm run build` multiple times
- Testing clean builds (`rm -rf dist .astro && npm run build`)
- Verifying all npm scripts work correctly
- Checking all configuration files
- Reviewing the entire project structure

**Only perform additional searches if:**
- These instructions are incomplete for your specific task
- You encounter errors not documented here
- You need to verify information that seems outdated

When in doubt, test the build first - it's fast (~1-2 seconds) and will catch most issues immediately.
