# Theme Designer — product

Free GitHub teaching seed for `--dash-*` tokens and copy-on-update palettes.
Public: [jenninexus/theme-designer](https://github.com/jenninexus/theme-designer).
Suggested tip $3 / $5. No paid installer. Not a production theme SSOT.

## Clone promise

A stranger can:

1. Clone and open `preview.html`
2. Edit `tokens/brand-tokens.css`
3. Copy the `:root` block into *their* dashboard or static HTML
4. Optionally copy embed-bar hex into a [Bot Seed](https://github.com/jenninexus/bot-seed) `embedBar`

The copied tokens work within the project's own stylesheet.

## Store placement

Until a **mini-devlog** exists on [jenninexus.com](https://jenninexus.com), this seed is
featured only on [the products seed-family band](https://jenninexus.com/products#seed-family)
(clone button). A catalog widget on `/products` ships **after** that short blog, with
Details + clone + tip (`cardWalkthrough: false`). Tags then: `products` · `tools` ·
`free-download`.

## Tip footer

```md
If this helped: [Patreon](https://www.patreon.com/c/JenniNexus) · [PayPal](https://paypal.me/jenninexus)
```

## Product logo and app icon

Keep the product wordmark and a square app mark in the owning product repository. Start with SVG for vector artwork and use a lossless PNG master for raster art. The starter's `icons/` directory provides control glyphs. App launcher, installer, favicon, and store artwork belong with the product that ships them.

Record the chosen artwork and the files each platform consumes in the product's packaging guide. Windows desktop packages use a multi-size ICO, and installable web apps declare their icon exports in the web manifest. [Windows app icons](https://learn.microsoft.com/en-us/windows/apps/design/iconography/app-icon-construction) · [PWA manifest icons](https://web.dev/learn/pwa/web-app-manifest)

## Not this product

- Production brand values belong with the product or its design system.
- Discord Gateway runtime → Bot Seed
- Voice registers → Voice Seed
- Packaging configuration belongs with the product.
