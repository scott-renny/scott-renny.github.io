# Vendored: Unified Console UI (UCU)

These files (`tokens.css`, `base.css`, `components.css`, `theme.js`) are
copied verbatim from the private `unified-console-ui` design-system
repository, per option 1 in its `docs/CONSUMING-UCU.md` ("copy the files
into the consuming app's own static assets directory").

- Source: `scott-renny/unified-console-ui`
- Vendored at commit: `85a7cf5`
- UCU version: v0.1.0

This site does not build against or depend on the UCU repository at
runtime — these are static copies so the Portfolio/Journal stay
independently deployable. Re-copy these four files (and bump the commit
above) when UCU is updated and the change should propagate here.

Do not edit these files directly; site-specific styling lives in
`assets/css/*.css`, loaded after these and built on top of the `--ucu-*`
tokens.
