# theme-designer — Update Protocol

> **Who this is for:** Anyone learning to author a brand kit before promoting tokens to a production repo.  
> **Rule of thumb:** Author here → copy-on-update → never `@import` a kit path at runtime.

---

## The contract

1. **Author in theme-designer** — edit `tokens/brand-tokens.css`, `palettes/example-palettes.json`, and optional `profiles/*.json` until the palette is stable.
2. **Copy on update** — paste or script-copy the finished blocks into the target project (`dashboard/themes/`, host app tokens, design system registry, etc.).
3. **Keep runtime paths portable** — serve styles from the consuming project.
4. **Use one authoring source per token set** — maintain identifiers in the owning design system and mark distributed copies as generated.

---

## Stack table

| Repo | Stack | SSOT for | Relationship to theme-designer |
|------|-------|----------|--------------------------------|
| **dashboard** | Static HTML seed (OSS) | `themes/*.css`, profile manifests, scaffolder | Public landing zone for dashboard palettes. Copy `brand-tokens.css` → `themes/your-id.css`. |
| **theme-designer** (this repo) | Teaching starter | Example tokens + one palette + profile stub + icon subset | Sandbox only. **Repo root is the kit** — no nested `theme-kit/` folder. Not a runtime dependency for any shipping app. |
| **bot-seed** ([public](https://github.com/jenninexus/bot-seed)) | discord.js community bot | `embedBar` / `embedBarInt` in `assets.json` | Copy `--brand-accent` only. See [`DISCORD-EMBED.md`](DISCORD-EMBED.md). Not a `profiles/*.json` dashboard manifest. |

## Recommended icon sets

| Surface | Use | Do **not** |
|---------|-----|------------|
| **This repo** (public demo) | Three platform marks in the preview. See the [icon guide](../icons/README.md). | Vendor `fontawesome-free-6.7.2-web` |
| PHP / Bootstrap www | Local FA 6.7.2 tree or CDN | Copy the full tree into a kit |
| React hosts (most) | `react-icons/fa6` or a copied SVG subset | Mix FA + Phosphor in one product |

Use the project's existing icon delivery path. See [`icons/README.md`](../icons/README.md).

---

## Copy-on-update checklist

When promoting a palette id (example: `my-brand`):

- [ ] `:root` block copied to target `themes/my-brand.css` or inline `<style>`
- [ ] `--dash-accent` / `--dash-accent-2` alias your `--brand-accent` roles
- [ ] Register palette metadata in the design system that owns the running theme.
- [ ] Profile manifest `theme` field matches the CSS file id
- [ ] Name collision doc updated if your id resembles an existing theme (`plasma-green` ≠ Plasma Drift)
- [ ] Icons: select only the necessary SVGs and preserve their attribution
- [ ] No secrets, no private paths, no `@import` back to theme-designer in production HTML

---

## Breakpoints (reference)

The dashboard examples use Bootstrap-aligned cutoffs. **CSS custom properties cannot be used in `@media` queries** — use literal pixel values:

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

Keep the starter flat at the repository root and ship copied files with the consuming project.
