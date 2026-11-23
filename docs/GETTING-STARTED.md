# Getting started — theme-designer

Clone this repo, edit the example tokens, copy the `:root` block into *your* project. There is no build step and no secrets.

The **repo root is the starter**. Keep project assets and configuration in the checkout that ships them.

## Open the demo

```bash
npx --yes http-server -p 5191 -c-1 -o /preview.html .
```

Any static server works. Confirm tokens, `profiles/default.json`, and the icon row.

## Author, then copy

1. Edit `tokens/brand-tokens.css`. Start with `--brand-accent`.
2. Optional: mirror metadata in `palettes/example-palettes.json` and `profiles/default.json`.
3. Copy the finished `:root` into your app (dashboard `themes/your-theme.css`, host tokens, etc.).
4. Alias dashboard chrome: `--dash-accent: var(--brand-accent);`
5. Icons: copy SVGs from [`icons/`](../icons/README.md) **or** use CDN / `react-icons/fa6`. Never vendor the full Font Awesome tree.
6. Law: [`PROTOCOL.md`](PROTOCOL.md) (copy-on-update).

Dashboard paste example:

```css
/* In dashboard/themes/my-brand.css — after copying tokens/brand-tokens.css :root */
:root {
  --brand-accent: #your-hex;
  --dash-accent: var(--brand-accent);
}
```

## Folder map

```
theme-designer/                  ← public product = helper + this starter
├── preview.html                 ← local demo (tokens + default profile + icons)
├── tokens/brand-tokens.css      ← start here — :root custom properties
├── palettes/example-palettes.json
├── profiles/default.json
├── icons/                       ← curated Font Awesome Free SVGs (not the full 6.7.2 tree)
└── docs/                        ← PROTOCOL · this file · ROADMAP · DISCORD-EMBED
```

## What this repo is for

- **Brand-kit lab** — edit until the colors feel like *your* product.
- **Dashboard theme designer** — copy `:root` into [dashboard](https://github.com/jenninexus/dashboard) `themes/*.css`.
- **Inspiration, not a dependency** — study the pattern; copy-on-update when you promote. Keep runtime styles in the consuming project.

Name collisions matter: dashboard `plasma-green` (`#00e879`) ≠ Synagraphic Plasma Drift (`#e050a0`). Document your ids.

When a palette is ready for production, add it to the design system that owns the consuming project's tokens.

## Related

- [`PROTOCOL.md`](PROTOCOL.md) — copy-on-update contract + stack table + icon sets
- [`PRODUCT.md`](PRODUCT.md) — clone promise + store placement (seed-family until mini-devlog)
- [`ROADMAP.md`](ROADMAP.md) — phases (maintainers)
- [`DISCORD-EMBED.md`](DISCORD-EMBED.md) — optional embed-bar hex copy
- [`icons/README.md`](../icons/README.md) — FA Free subset (CC BY 4.0)
