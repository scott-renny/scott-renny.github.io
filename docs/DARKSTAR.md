# DARKSTAR public design

The approved portfolio uses a mountain-led dark layout; the journal uses a forest masthead and light reading layout. The homepage, journal index and 17 articles use self-contained HTML/CSS and inline shared interaction code. Supporting public pages retain the earlier public design adapter. Vendored UCU files, dashboard/help tools and GitHub profile are unchanged.

Portfolio visuals are recorded screenshots, explicitly labelled synthetic demos/source previews, or source-grounded Mermaid diagrams. Planned Cerberus/Ares architecture is labelled planned. Journal covers are AI-generated editorial illustrations, reused across related topics; they are not equipment photographs or operational evidence. Raster assets are shared files in assets/images and assets/darkstar. Brand vectors remain in assets/brand.

The core pages use separate local theme preferences for portfolio and journal, responsive keyboard-operable navigation, and journal search/category filters. Mermaid imports version 11.4.1 from jsDelivr with strict security and readable source fallback if unavailable. Diagram rendering needs internet access. No build service or telemetry integration is added.

All 17 original article bodies are preserved. Public URLs and existing repository publishing configuration are retained. Automated review passed 131 image/content assertions and runtime/module syntax checks; user approved full local pages. Live deployment and desktop/mobile interaction checks remain separate validation steps.

Rollback: revert the website PR merge commit. No data migration or runtime infrastructure change is involved.
