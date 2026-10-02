# Tristan Samson — Colorist portfolio

Static one-page portfolio: full-screen reel, category menu, work grid with hover previews and a lightbox player.
No build step. Plain HTML, CSS and JavaScript, hosted on GitHub Pages.

## Editing content

Everything shown on the site lives in `js/content.js`:

- `name`, `role`, `tagline`, `description`, `email`, `phone`, `socials`
- `categories` — the menu entries and grid filters
- `hero.mp4` / `hero.poster` — the looping film behind the name
- `projects[]` — one entry per film

Each project takes either a Vimeo id (`vimeo: "123456789"`) or a direct file (`mp4: "https://…"`), plus an optional
short `preview` clip that plays on hover and a `poster` still. Credits with an empty string are hidden.

The current videos are open-licence Blender films used as placeholders. The project titles and credits are fictional
placeholders too.

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

GitHub Pages serves the `main` branch root. Pushing to `main` publishes the site.
