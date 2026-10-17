# DARKSTAR public design layer

The public portfolio and journal use the approved copper orbital identity, neutral light/dark themes and an editorial header. The portfolio defaults to dark; reading/supporting pages default to light. A saved theme choice applies across pages using the existing `ucu-theme` storage key.

`assets/css/darkstar.css` is a public-site adapter over unchanged UCU vendor files. The vendor snapshot and its hashes remain intact. No private dashboard or telemetry integration is changed. Shared navigation is repeated in static HTML so it works without a content injection/build service. On mobile, Menu expands the navigation; Escape closes it and returns focus. Without JavaScript, the navigation is made available through a noscript style.

Brand vectors are in `assets/brand`. Fonts use installed Space Grotesk/Inter when available, with Segoe UI and system fallbacks. No new font download, widget, framework or publishing service is required. The orbital illustration is static and nonessential; reduced-motion preferences disable existing smooth scrolling and transitions.

The article bodies, URLs, metadata, project records, search/filter selectors, vendored components and publishing model are retained. Status figures are not live telemetry. Rollback is a revert of this presentation commit; there is no data migration.

Validation before merge: open the portfolio and journal at desktop and mobile sizes, search/filter the journal, follow an article and its return link, operate navigation and theme by keyboard, verify theme persistence, inspect both themes and print output. No private source or operational settings belong in the public deployment.
