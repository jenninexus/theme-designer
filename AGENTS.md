# theme-designer — agents

Teaching starter only. **Law:** [`docs/PROTOCOL.md`](docs/PROTOCOL.md). **How-to:** [`docs/GETTING-STARTED.md`](docs/GETTING-STARTED.md).

[`CLAUDE.md`](CLAUDE.md) is a pointer to this file. Codex and other agents should read **this** file — do not recreate a project `.codex/` skill mirror.

- Repo **root is the kit** — no nested `kit/` or `theme-kit/`.
- Copy-on-update into the user’s project. Keep the target project's styles self-contained.
- Discord: copy `--brand-accent` hex only ([`docs/DISCORD-EMBED.md`](docs/DISCORD-EMBED.md)). Do not add `profiles/discord-bot.json`.
- Icons: curated FA Free SVGs in `icons/` (CC BY 4.0). Use the icon library already in your project. Never vendor `fontawesome-free-6.7.2-web`.
- Keep this repo focused on reusable teaching examples.

## Public examples (tracked)

| Path | Role |
|------|------|
| [`profiles/default.json`](profiles/default.json) | Starter profile manifest |
| [`profiles/README.md`](profiles/README.md) | When to split a profile |
| [`palettes/example-palettes.json`](palettes/example-palettes.json) | Example palette registry (`dusk-companion`) |

## Local workspace

Keep editor settings and local notes in gitignored paths. See the [product guide](docs/PRODUCT.md) for the starter and store placement.
