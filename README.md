<div align="center">

# Engineering Journal & Portfolio
### Cybersecurity · Infrastructure · Automation

![edition: public portfolio](https://img.shields.io/badge/edition-public%20portfolio-22d3ee?style=flat-square)
![hosting: GitHub Pages](https://img.shields.io/badge/hosting-GitHub%20Pages-2563eb?style=flat-square)

[Visit portfolio](https://scott-renny.github.io) · [Journal](https://scott-renny.github.io/journal/) · [License](LICENSE)

</div>

[Structure](#structure) · [Design system](#design-system) · [Maintenance](#maintenance) · [Latest project addition](#latest-project-addition)

---

Source for [scott-renny.github.io](https://scott-renny.github.io), my cybersecurity engineering journal and project portfolio.


The site highlights evidence-backed projects, engineering journal entries, current learning, and links to the corresponding GitHub repositories.

## Structure

- `index.html` — portfolio landing page
- `assets/` — shared styles, scripts and vendored design system
  - `assets/vendor/ucu/` — Unified Console UI (UCU) design tokens/components, vendored as static files (see `VENDORED.md` in that folder)
  - `assets/css/style.css` — shared site chrome (header, hero, sections, cards) built on UCU tokens
  - `assets/css/journal-app.css` — Journal-specific list/article styling, also built on UCU tokens
- `dashboard/` — curated public project-status view
- `journal/` — engineering journal entries
- `projects/` — evidence-backed project case studies
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
reuse UCU tokens, typography, cards, buttons, badges and status indicators
with the responsive public portfolio sidebar, theme toggle and accessible
navigation. This is a static public site; private dashboard operational data
and controls are excluded.

## Maintenance

Project status and technology claims should match the corresponding repository documentation. Links should point to published repositories or pages; unfinished downloads are described explicitly rather than exposed as placeholders.

The public dashboard is a sanitized portfolio snapshot. Private project names, detailed execution queues, personal logistics and internal operational data remain in the private control dashboard.

## Latest project addition

[COC USB #2 — DFIR and Incident Response](https://scott-renny.github.io/projects/coc-usb2-dfir-toolkit.html) adds guided investigations, Python/PowerShell acquired-evidence workflows, case logs, verified handoff and controlled generated-log retention. Source edition and a build journal are published alongside the existing USB #1 project. Latest installation is read-back verified; 128 local tests passed. Real-evidence, GUI/live-query/lab acceptance remains scoped.
