# theme-designer

**A kit for making your kit.**

`theme-designer` is a public teaching starter — not a third production theme SSOT. It shows how to author **your own** brand tokens, palette JSON, and profile manifests, then copy them into the projects you ship.

House SSOTs stay where they belong:

| Repo | Role |
|------|------|
| [jenninexus/syna-theme-kit](https://github.com/monofinitystudio/syna-theme-kit) | React · Dockview · Synagen accents — palettes, skins, typed tokens (house SSOT; private) |
| www-theme-kit | PHP · Bootstrap · standalone HTML `--dash-*` chrome (**private infra** — not a public GitHub product) |
| [jenninexus/syn-themes](https://github.com/jenninexus/syn-themes) | VS Code / Cursor extension — palette **mirror** only |
| [jenninexus/dashboard](https://github.com/jenninexus/dashboard) | Public OSS seed — copies tokens into `themes/*.css` |

Use **theme-designer** when you want a sandbox to learn the pattern before touching a real repo.

---

## What you can do with this repo

**As a brand-kit lab** — edit `tokens/brand-tokens.css` and `palettes/example-palettes.json` until the colors feel like *your* product, not ours.

**As a dashboard theme designer** — copy the finished `:root` block into a [dashboard](https://github.com/jenninexus/dashboard) profile or scaffolder output. Override `--brand-accent` (and friends) in one place; the dashboard chrome picks it up via `--dash-accent` aliases.

**As inspiration, not a dependency** — study how www-theme-kit structures standalone HTML `--dash-*` chrome and how syna-theme-kit structures palette JSON + skin families. Do **not** `@import` private kit paths from here. **Copy-on-update** when you promote a palette to production.

---

## Quick start

1. **Clone or copy this folder** (no build step, no secrets, public examples only).

2. **Open the demo** — `npx --yes http-server -p 5191 -c-1 -o /preview.html .` (any static server). Confirm tokens, `profiles/default.json`, and the icon row.

3. **Edit the example palette** in `tokens/brand-tokens.css`. Replace the pink dusk example values with your brand. Start with `--brand-accent` — everything else can follow.

4. **Copy into a dashboard** — paste the `:root` block from `tokens/brand-tokens.css` into your dashboard HTML `<style>` or into `themes/your-theme.css` in a [dashboard](https://github.com/jenninexus/dashboard) checkout:

   ```css
   /* In dashboard/themes/my-brand.css — after copying tokens/brand-tokens.css :root */
   :root {
     --brand-accent: #your-hex;   /* your override */
     --dash-accent: var(--brand-accent);
   }
   ```

5. **Optional** — mirror palette metadata in `palettes/example-palettes.json` and a profile stub in `profiles/default.json` so your team knows which theme id maps to which product surface.

6. **Icons** — copy SVGs from [`icons/`](icons/README.md) or use CDN / `react-icons/fa6` in an app. Do not vendor the full Font Awesome folder.

7. **Read the protocol** — [`docs/PROTOCOL.md`](docs/PROTOCOL.md) explains author-here → copy-on-update. [`docs/ROADMAP.md`](docs/ROADMAP.md) lists recommended edits for the three house kits (for maintainers, not learners).

---

## Folder map

The **repo root is the starter kit.** Do not add `kit/` or `theme-kit/` — that would look like a fourth production SSOT competing with the private house kits.

```
theme-designer/                  ← public product = helper + this starter
├── preview.html                 ← local demo (tokens + default profile + icons)
├── tokens/brand-tokens.css      ← start here — :root custom properties
├── palettes/example-palettes.json ← one example palette + schema notes
├── profiles/
│   ├── default.json             ← starter profile manifest
│   └── README.md                ← when to split a profile
├── icons/                       ← curated Font Awesome Free SVGs (not the full 6.7.2 tree)
└── docs/
    ├── PROTOCOL.md              ← copy-on-update rules + stack table
    └── ROADMAP.md               ← phases + house-kit recommendations
```

Private house kits stay **outside** this repo (www-theme-kit · syna-theme-kit). They are network-private infra — never nested here, never `@import`ed from a public seed.

---

## Rules

- **MIT license** — see [`LICENSE`](LICENSE).
- **No secrets** — example data only; never commit `.env`, private paths, or household finance hex tables.
- **No `@import` of kit paths** — production repos vendored-copy tokens; they do not link back to private infra at runtime.
- **Name collisions matter** — dashboard `plasma-green` (`#00e879`) ≠ Synagraphic Plasma Drift (`#e050a0`). Document your ids; do not reuse confusing names.

---

## Related projects

- [jenninexus/dashboard](https://github.com/jenninexus/dashboard) — profile-based static dashboards (SEO, finances, health, pets)
- [jenninexus/syn-themes](https://github.com/jenninexus/syn-themes) — cyberpunk editor themes; storefront swatches mirror kit palettes

When your palette is ready for production, promote it through the appropriate house SSOT — not by growing this teaching repo into a fourth kit.
