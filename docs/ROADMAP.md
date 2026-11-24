# theme-designer — Roadmap

This roadmap tracks the public palette and token authoring starter.

---

## Phases (this repo)

### Phase 1 — Teaching starter (shipped)

The published starter includes:

- `tokens/brand-tokens.css` — editable `:root` with `--brand-*`, `--glass-*`, radii, `--dash-accent` aliases
- `palettes/example-palettes.json` — one documented example palette (`dusk-companion`)
- `profiles/default.json` + `profiles/README.md` — profile manifest pattern
- `icons/` — curated Font Awesome Free 6.7.2 SVGs (CC BY 4.0; not the full tree)
- `preview.html` — tokens + default profile + icon row (static; no build)
- `docs/PROTOCOL.md` — copy-on-update contract
- `docs/GETTING-STARTED.md` — clone path + folder map
- `docs/DISCORD-EMBED.md` — optional embed-bar hex copy (not a `profiles/` dashboard manifest; Bot Seed: [jenninexus/bot-seed](https://github.com/jenninexus/bot-seed))
- Public examples only; MIT; no private infra paths
- **Layout:** repo root *is* the kit. No `kit/` / `theme-kit/` nest.

### Phase 2 — Preview and copy tooling (later)

- **Richer previewer** — `preview.html` already shows swatches + icons; add sample dashboard chrome (collapse card, stat tile, accent button) without a build chain.
- **`scripts/copy-to-project.mjs`** — optional helper that copies `tokens/` + `palettes/` into a target dashboard or static HTML folder with a dated comment header (`/* copied from theme-designer @ … */`).
- **Example 6-color palettes schema** — formalize the `colors { cyan, purple, pink, indigo, blue, teal }` block, with validation notes in JSON Schema or a small lint script.

### Phase 3 — Curriculum (later)

- Walkthrough docs: “brand kit → dashboard theme → editor swatch mirror”
- Optional: brand kit → Discord `embedBar` (see [`DISCORD-EMBED.md`](DISCORD-EMBED.md); Bot Seed is a separate product)
- Side-by-side diffs showing app skin families vs standalone `--dash-*` chrome
- Checklist for naming collisions (`plasma-green` vs Plasma Drift, etc.)

---

Production projects own their token registries and assets. Copy finished examples into the project that ships them.

## Store placement (JenniNexus)

Featured on [jenninexus.com/products#seed-family](https://jenninexus.com/products#seed-family)
until a mini-devlog blog exists. Do not add a `/products` catalog widget before that
post. Detail: [`PRODUCT.md`](PRODUCT.md).
