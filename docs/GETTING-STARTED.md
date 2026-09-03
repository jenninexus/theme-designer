# Getting started — theme-designer

Clone this repo, edit the example tokens, copy the `:root` block into *your* project. There is no build step and no secrets.

House production kits (`www-theme-kit`, `syna-theme-kit`) stay **outside** this repo. Do not add `kit/` or `theme-kit/` here — the **repo root is the starter**.

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
5. Icons: copy SVGs from [`icons/`](../icons/README.md) **or** use CDN / `react-icons/fa6`. Jen DJ keeps Phosphor. Never vendor the full Font Awesome tree.
6. Law: [`PROTOCOL.md`](PROTOCOL.md) (copy-on-update, no `@import` of private kits).

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
- **Inspiration, not a dependency** — study the pattern; copy-on-update when you promote. Do not `@import` private kit paths.

Name collisions matter: dashboard `plasma-green` (`#00e879`) ≠ Synagraphic Plasma Drift (`#e050a0`). Document your ids.

When the palette is ready for a house product, promote it through the matching private kit — do not grow this teaching repo into a fourth production SSOT.

## Related

- [`PROTOCOL.md`](PROTOCOL.md) — copy-on-update contract + stack table + icon sets
- [`ROADMAP.md`](ROADMAP.md) — phases (maintainers)
- [`DISCORD-EMBED.md`](DISCORD-EMBED.md) — optional embed-bar hex copy
- [`icons/README.md`](../icons/README.md) — FA Free subset (CC BY 4.0)
