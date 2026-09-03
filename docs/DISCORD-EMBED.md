# Discord embed bar (copy-on-update)

Theme Designer authors **CSS tokens**. Discord embeds are **not CSS**. This page
is only the teaching bridge: copy one hex into a bot’s `embedBar` / `embedBarInt`.

Do **not** add Discord manifests under `profiles/` — those files are **dashboard**
product surfaces (`id` + `theme` + `render` + `sections`). A bot theme is a
different JSON shape and lives in the Bot Seed repo (`profiles/discord-bot.example.json`).

## Copy recipe

1. Edit `tokens/brand-tokens.css` until `--brand-accent` is your color.
2. Convert to Discord’s integer bar:

```js
parseInt("5865F2", 16) // 5793266 — example blurple
```

3. Paste into the consuming bot’s `resources/assets.json` (or Bot Seed’s copy of
   `assets.example.json`). Bots never `@import` this repo.

Anatomy (1×1 thumb, 16×9 hero, flat bar, no brown): documented in Bot Seed
`docs/STYLE-SPEC.md` when that seed is cloned. House production tokens stay in
private `www-theme-kit/profiles/discord-bot.json` — not a clone dependency.

## Related

- Dashboard copy path: [`GETTING-STARTED.md`](GETTING-STARTED.md) → `dashboard/themes/`
- Agency desk neon (lore vs Discord runtime): Agency repo + optional Bot Seed loft JSON
- Voice (prose): Voice Seed registers `discordVisual` (chrome) vs `botGreeter` (words)
