# Profiles — when to split

A **profile** ties together four things:

1. **Identity** — `id`, `name`, `description`
2. **Theme** — `theme` must match a palette/css id (e.g. `dusk-companion` → `tokens/brand-tokens.css` or `themes/dusk-companion.css`)
3. **Renderer** — `render` path to the HTML file that reads your JSON
4. **Sections** — what the dashboard panels track

`profiles/default.json` is a single-file stub for learning. That is enough while you are experimenting with colors in `tokens/`.

---

## Discord bots are a different profile kind

`profiles/*.json` here describe **dashboards** (`theme` + `render` + `sections`).
Do not add a `discord-bot` dashboard profile. Discord embed tokens belong in a
separate **Bot Seed** product (GitHub not public yet). Teaching bridge:
[`docs/DISCORD-EMBED.md`](../docs/DISCORD-EMBED.md).

## Keep one profile when

- You are still picking accent colors and have not chosen panel layout
- One HTML file serves every preview (even a hand-written `preview.html`)
- Example data lives in one `example-data.json`

---

## Split into `profiles/<your-id>/` when

- You ship a **distinct product surface** (SEO dashboard vs pet care vs finance — different sections and data shape)
- The HTML renderer differs (different `<script id="…">` injection id → update `dataInjection.scriptId`)
- The theme id is product-specific and should not share a generic `default` name in production
- You promote to [jenninexus/dashboard](https://github.com/jenninexus/dashboard) and need the scaffolder layout:

  ```
  profiles/<id>/
  ├── <id>.html
  ├── example-data.json
  └── profile.json
  ```

---

## House kit rule (do not merge)

- **syna-theme-kit** `profiles/dashboard.json` — Syna overlay, live React consumers
- **www-theme-kit** `profiles/dashboard.json` — OSS seed map for static HTML dashboards

These answer different questions. Cross-link in docs; **do not merge** the JSON files.

---

## Checklist for a new profile folder

1. Copy `default.json` → `profiles/<id>/profile.json`; set `id`, `theme`, `render`
2. Add `profiles/<id>/<id>.html` (or copy from dashboard profile templates)
3. Add `profiles/<id>/example-data.json` with fictional public data only
4. Register the theme id in your palette JSON and copy CSS to `themes/<theme>.css` in the target repo
5. Run the dashboard scaffolder if targeting OSS dashboard:  
   `npm run build-dashboard -- --profile <id> --name "Your Brand"`
