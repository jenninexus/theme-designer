# Icons — curated Font Awesome Free subset

This folder is a **tiny, attributed SVG set** for the public teaching demo. It is **not** the full Font Awesome tree.

PHP and Bootstrap apps can use Font Awesome via a CDN or a local subset. React apps can use `react-icons/fa6`.

Recommended sets: [`docs/PROTOCOL.md`](../docs/PROTOCOL.md) § Recommended icon sets.

## What is here

| File | Typical use |
|------|-------------|
| `bars.svg` | Hamburger / menu |
| `xmark.svg` | Close |
| `magnifying-glass.svg` | Search |
| `gear.svg` | Settings |
| `sliders.svg` | Theme / filters |
| `palette.svg` | Palette / brand kit |
| `download.svg` | Export / copy |
| `star.svg` | Pin / favorite |
| `chevron-down.svg` | Expand |
| `circle-half-stroke.svg` | Light / dark toggle |

## License

Icons: **CC BY 4.0** — Font Awesome Free 6.7.2 by [Fonticons, Inc.](https://fontawesome.com)  
See each SVG comment + [Font Awesome Free license](https://fontawesome.com/license/free).

Keep the comment block inside each SVG when you copy an icon into your project.

## How to use in your kit

1. **Static HTML** — mask or `<img>` as in [`../preview.html`](../preview.html) (add `alt` or `aria-hidden` + a text label).
2. **PHP / Bootstrap** — link FA CSS from a CDN or your own subset; size webfont icons with `font-size`, never `width`/`height` on `i.fa-solid` (that clips `::before`).
3. **React** — `react-icons/fa6` (`FaBars`, `FaXmark`, …) or keep these SVGs. Use one icon family per product.

Serve local icon files from the project that uses them.
