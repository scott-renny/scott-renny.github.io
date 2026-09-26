# Scott Renny — Engineering Journal & Portfolio

Source for [scott-renny.github.io](https://scott-renny.github.io), my cybersecurity engineering journal and project portfolio.

![Portfolio](https://img.shields.io/badge/type-portfolio-blue) ![Cybersecurity](https://img.shields.io/badge/focus-cybersecurity-2EA44F) ![Infrastructure](https://img.shields.io/badge/focus-infrastructure-orange) ![Automation](https://img.shields.io/badge/focus-automation-purple)

The site highlights evidence-backed projects, engineering journal entries, current learning, and links to the corresponding GitHub repositories.

## Structure

- `index.html` — portfolio landing page
- `assets/` — shared styles, scripts and vendored design system
  - `assets/vendor/ucu/` — Unified Console UI (UCU) design tokens/components, vendored as static files (see `VENDORED.md` in that folder)
  - `assets/css/style.css` — shared site chrome (header, hero, sections, cards) built on UCU tokens
  - `assets/css/journal-app.css` — Journal-specific list/article styling, also built on UCU tokens
- `dashboard/` — curated public project-status view
- `journal/` — engineering journal entries
- `certifications/`, `resume/` — supporting pages

## Design system

This site and the Cybersecurity Journal are visually built on the **Unified
Console UI (UCU)** — the same shared design tokens and components used
across the Cyber Operations Center dashboard family (Projects, Learning, AI
Job Search, COC Hub, etc.). UCU is vendored here as static CSS/JS files
(`assets/vendor/ucu/`) with no build-time or runtime dependency on the UCU
repository, so this site stays independently deployable and free to host on
GitHub Pages.

Per UCU's own guidance for public-facing sites, the Portfolio and Journal
reuse UCU's tokens, typography, cards, buttons, badges and status
indicators, but intentionally do **not** use the UCU application shell
(sidebar/console navigation) — this is a public site with a conventional
header/nav/footer, not an internal dashboard.

## Maintenance

Project status and technology claims should match the corresponding repository documentation. Links should point to published repositories or pages; unfinished downloads are described explicitly rather than exposed as placeholders.

The public dashboard is a sanitized portfolio snapshot. Private project names, detailed execution queues, personal logistics and internal operational data remain in the private control dashboard.
