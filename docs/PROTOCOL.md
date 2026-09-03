# theme-designer — Update Protocol

> **Who this is for:** Anyone learning to author a brand kit before promoting tokens to a production repo.  
> **Rule of thumb:** Author here → copy-on-update → never `@import` a kit path at runtime.

---

## The contract

1. **Author in theme-designer** — edit `tokens/brand-tokens.css`, `palettes/example-palettes.json`, and optional `profiles/*.json` until the palette is stable.
2. **Copy on update** — paste or script-copy the finished blocks into the target project (`dashboard/themes/`, host app tokens, www-theme-kit registry, etc.).
3. **Never link private kits** — do not `@import url('C:/Github/www-theme-kit/...')` or similar. Production surfaces must be self-contained or vendored.
4. **One SSOT per stack** — when promoted, the house kit owns the id; delete duplicate authoring in downstream repos or mark them as generated.

---

## Stack table

| Repo | Stack | SSOT for | Relationship to theme-designer |
|------|-------|----------|--------------------------------|
| **syna-theme-kit** | React · Dockview · Synagen | `palettes/syna-palettes.json`, skins, typed `design-tokens.ts`, per-app profiles | Production target for Syna-family accents. Learn palette JSON shape here; promote by copy. |
| **www-theme-kit** | PHP · Bootstrap · standalone HTML | `--dash-*` chrome, `dashboard-palettes.json`, dashboard profile map | Production target for static dashboard chrome. Learn `--dash-accent` aliases here; promote by copy. |
| **syn-themes** | VS Code / Cursor extension | `themes/*.json` editor colors; `palettes/all-palettes.json` **mirror** | Downstream consumer only. Never author palette hexes here first. |
| **dashboard** | Static HTML seed (OSS) | `themes/*.css`, profile manifests, scaffolder | Public landing zone for dashboard palettes. Copy `brand-tokens.css` → `themes/your-id.css`. |
| **theme-designer** (this repo) | Teaching starter | Example tokens + one palette + profile stub + icon subset | Sandbox only. **Repo root is the kit** — no nested `theme-kit/` folder. Not a runtime dependency for any shipping app. |
| **bot-seed** (planned public) | discord.js community bot | `embedBar` / `embedBarInt` in `assets.json` | Copy `--brand-accent` only. See [`DISCORD-EMBED.md`](DISCORD-EMBED.md). Not a `profiles/*.json` dashboard manifest. |

## Recommended icon sets

| Surface | Use | Do **not** |
|---------|-----|------------|
| **This repo** (public demo) | Curated FA Free 6.7.2 SVGs in [`icons/`](../icons/README.md) (CC BY 4.0) | Vendor `fontawesome-free-6.7.2-web` |
| PHP / Bootstrap www | Local FA 6.7.2 tree or CDN (house machines) | Copy the full tree into a kit |
| React hosts (most) | `react-icons/fa6` or a copied SVG subset | Mix FA + Phosphor in one product |
| Jen DJ | Phosphor (`@phosphor-icons/react`) | Swap the mixer to Font Awesome |
| pdf-designer print | Inline a few SVGs | Weigh the webfont into a PDF |

House FA trees stay **off this public repo** (CDN, a local copy you already own, or `react-icons/fa6`). See [`icons/README.md`](../icons/README.md).

---

## Copy-on-update checklist

When promoting a palette id (example: `my-brand`):

- [ ] `:root` block copied to target `themes/my-brand.css` or inline `<style>`
- [ ] `--dash-accent` / `--dash-accent-2` alias your `--brand-accent` roles
- [ ] Palette metadata added to the **correct** house registry (www-theme-kit and/or syna-theme-kit — not both unless intentionally shared)
- [ ] Profile manifest `theme` field matches the CSS file id
- [ ] Name collision doc updated if your id resembles an existing theme (`plasma-green` ≠ Plasma Drift)
- [ ] Icons: copy only the SVGs you need from `icons/` (CC BY 4.0 FA Free) — never the full Font Awesome tree
- [ ] No secrets, no private paths, no `@import` back to theme-designer in production HTML

**Maintainer visibility:** this teaching repo is already public. Never flip `www-theme-kit` or `syna-theme-kit` public without an explicit yes from the owner in-chat.

---

## Breakpoints (reference)

Dashboard and www-theme-kit share Bootstrap-aligned cutoffs. **CSS custom properties cannot be used in `@media` queries** — use literal pixel values:

| Name | Max width |
|------|-----------|
| xs | `389.98px` |
| sm | `575.98px` |
| md | `767.98px` |
| lg | `991.98px` |

Example:

```css
@media (max-width: 767.98px) {
  .dash-grid { grid-template-columns: 1fr; }
}
```

Token values for spacing and radii live in `:root`; breakpoint widths stay hard-coded in media queries.

---

## Teaching sibling pointer (for house kit maintainers)

Add to syna-theme-kit `docs/PROTOCOL.md` (one line):

> Public learners: [jenninexus/theme-designer](https://github.com/jenninexus/theme-designer) — teaching starter for brand kits; not a production dependency.

Do not wire theme-designer into build graphs, submodules, or runtime imports.

Layout rule for maintainers: keep the public starter **flat at repo root**. Adding `theme-designer/kit/` or `theme-kit/` would duplicate the product name and invite copying private www/syna kits into the public tree. Those kits stay in their own private repos (`www-theme-kit`, `syna-theme-kit`).
