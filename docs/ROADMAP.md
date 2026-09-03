# theme-designer — Roadmap

This repo teaches palette and token authoring. Production changes happen in the house SSOTs below. Phases here describe what **theme-designer** may grow into; **Recommended edits** are maintainer actions for the three production kits.

---

## Phases (this repo)

### Phase 1 — Teaching starter (current)

Ship the minimum viable teaching surface:

- `tokens/brand-tokens.css` — editable `:root` with `--brand-*`, `--glass-*`, radii, `--dash-accent` aliases
- `palettes/example-palettes.json` — one documented example palette (`dusk-companion`)
- `profiles/default.json` + `profiles/README.md` — profile manifest pattern
- `icons/` — curated Font Awesome Free 6.7.2 SVGs (CC BY 4.0; not the full tree)
- `preview.html` — tokens + default profile + icon row (static; no build)
- `docs/PROTOCOL.md` — copy-on-update contract
- `docs/GETTING-STARTED.md` — clone path + folder map
- `docs/DISCORD-EMBED.md` — optional embed-bar hex copy (not a `profiles/` dashboard manifest; Bot Seed: [jenninexus/bot-seed](https://github.com/jenninexus/bot-seed))
- Public examples only; MIT; no private infra paths
- **Layout:** repo root *is* the kit. No `kit/` / `theme-kit/` nest. House kits stay private siblings.

### Phase 2 — Preview and copy tooling (later)

- **Richer previewer** — `preview.html` already shows swatches + icons; add sample dashboard chrome (collapse card, stat tile, accent button) without a build chain.
- **`scripts/copy-to-project.mjs`** — optional helper that copies `tokens/` + `palettes/` into a target dashboard or static HTML folder with a dated comment header (`/* copied from theme-designer @ … */`).
- **Example 6-color palettes schema** — formalize the `colors { cyan, purple, pink, indigo, blue, teal }` block used by www-theme-kit and dashboard alternates, with validation notes in JSON Schema or a small lint script.

### Phase 3 — Curriculum (later)

- Walkthrough docs: “brand kit → dashboard theme → editor swatch mirror”
- Optional: brand kit → Discord `embedBar` (see [`DISCORD-EMBED.md`](DISCORD-EMBED.md); Bot Seed is a separate product)
- Side-by-side diffs showing syna skin families vs standalone `--dash-*` chrome
- Checklist for naming collisions (`plasma-green` vs Plasma Drift, etc.)

---

## Recommended edits — house kits

These are **not** blockers for theme-designer Phase 1. They are the user-asked maintainer list for aligning production SSOTs.

### www-theme-kit

**This run**

- Register `dusk-companion`, `pets`, and `fin-template` in `profiles/dashboard.json` and `palettes/dashboard-palettes.json` so OSS dashboard profiles have a canonical registry entry (not just inline HTML themes).
- Fix **DASHBOARD-PALETTE-GUIDE** “Current Dashboards” table: `fin.html` uses **`aurora-finance`**, not Plasma Green. Plasma Green remains valid for agent dashboards (`agentgarbo.html`, `ruben.html`) — the table should reflect that split.

**Optional later**

- Add a generate/validate script for shared palette ids across `dashboard-palettes.json`, profile manifests, and emitted `dashboard/themes/{id}.css` files.
- Emit or verify `dashboard/themes/{id}.css` from the registry so copy-on-update has a single promotion path.

### syna-theme-kit

**This run**

- Keep `palettes/syna-palettes.json` as the authoring SSOT (already true in `docs/PROTOCOL.md` — do not revert the 2026-07-14 flow).
- Add a one-line pointer in `docs/PROTOCOL.md` to public **theme-designer** as the teaching sibling — not a production dependency, not a merge target.
- **Do not merge** `syna-theme-kit/profiles/dashboard.json` (Syna overlay / live consumers) with `www-theme-kit/profiles/dashboard.json` (OSS seed map). They answer different questions; cross-link in docs only.

**Optional later**

- Document which dashboard palette ids are Syna-adjacent vs dashboard-only in `PROFILES.md`.

### syn-themes

**This run**

- Resync `palettes/all-palettes.json` Martian / `sg-martian` / `mg-website` hexes **from** syna-theme-kit (mirror pass, not authoring).
- Reaffirm: **never author palettes here** — mirror only.
- Storefront copy: no Cross-Project Protocol tables naming Synabrain, Synagen, or Syqo. Keep listing claims to the six shipped editor themes.

**Optional later**

- Automate mirror diff in CI (kit → syn-themes) with a fail-on-drift check.

---

## What theme-designer will not become

- A fourth production SSOT competing with syna-theme-kit or www-theme-kit
- A private infra dependency (no `@import` paths into household or www-theme-kit trees)
- A home for real client brand hex tables — clones replace the example `dusk-companion` palette locally

When a palette graduates, it moves **out** via copy-on-update into the correct house kit or a project’s `themes/` folder — not by expanding this repo’s scope.
