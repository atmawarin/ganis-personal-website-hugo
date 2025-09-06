# Ganis Personal Website (Hugo)

Static site built with Hugo (extended), using a custom theme in-repo. Content is in Indonesian and deployed via Netlify.

## Overview
- Generator: Hugo static site, no external theme module
- Base URL: `https://atmawarin.com/` (set in `hugo.yaml`)
- Sections: `articles`, `reading`, `questions-and-ideas`, `running`, `favourite`, `about`, `newsletter`
- Taxonomies: `tag` (articles), `category` (reading)
- Assets: custom CSS/JS via Hugo Pipes in `assets/`; static files in `static/`

## Requirements
- Hugo Extended: 0.132.2 (pinned in `netlify.toml`)
  - macOS/Homebrew: `brew install hugo`
  - Verify: `hugo version` (should show extended and ≥ 0.132.2)

## Local Development
- Start dev server with drafts: `hugo server -D`
- Build production bundle locally: `hugo --gc --minify`
  - Output is written to `public/` (ignored by Git and not committed)

## Content Structure
- `content/articles/*.md`: long-form posts
- `content/reading/*.md`: book notes/reading entries
- `content/questions-and-ideas/*.md`: short thoughts/ideas
- `content/running/*.md`: running posts
- Section landing copy: `content/<section>/_index.md`

### Front Matter Examples (YAML)
Article:
```yaml
---
title: "Post Title"
description: "One-liner for SEO + lists"
cover: images/articles/cover.jpg
date: 2025-02-18
# optional: tags, weight
tags: ["design", "writing"]
weight: 10
---
```

Reading:
```yaml
---
title: "⭐️ Book Title"
description: "Short blurb"
cover: images/reading/book.jpg
publishDate: 2025-02-18
authors: "Author Name"
categories: ["self-mastery & growth"]
status: 🟢
---
```

Notes
- Image paths are relative to the site root. Place files under `static/images/...`.
- `weight` is used for prev/next ordering in article pages (lower weight appears first).

## Theming & Layouts
- Base template: `layouts/_default/baseof.html`
- Homepage: `layouts/index.html`
- Articles: `layouts/articles/list.html`, `layouts/articles/single.html`
- Partials: `layouts/partials/head.html`, `header.html`, `footer.html`
- CSS/JS: processed via Hugo Pipes in `layouts/partials/head.html`
  - CSS: `assets/css/main.css`
  - JS: `assets/js/global.js`, `assets/js/plugins/*`

## SEO & Social
- Open Graph: Hugo internal template + `og:image` from `.Params.image` or `.Params.cover`
- Twitter cards: `summary_large_image` when cover is present
- Page `<title>` set in `layouts/partials/head.html`

## Deployment (Netlify)
Netlify builds from source and publishes `public/`.
- Config: `netlify.toml`
  - Build command: `hugo --gc --minify --baseURL $URL`
  - Publish dir: `public`
  - Environment: `HUGO_VERSION = 0.132.2`, `HUGO_ENV = production`
  - Deploy previews use `--baseURL $DEPLOY_PRIME_URL`
- Git: `public/` is not committed. Netlify generates it during the build.

## Menus & Settings
- Config: `hugo.yaml`
  - Menus: `menus.main` (header) and `menus.footer`
  - Social: `params.social.*`
  - Footer/About/Newsletter copy under `params.footer.*`

## Common Tasks
- New article: `hugo new articles/my-post.md` then edit front matter/content
- New reading note: `hugo new reading/book-title.md`
- Run locally: `hugo server -D`
- Production build: `hugo --gc --minify`

## Notes
- GitHub Pages workflow was removed; Netlify is the canonical deploy.
- If changing Hugo version, update `netlify.toml` and ensure your local binary matches.
