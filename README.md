# Image Nook — Chrome Extension

Generates structured JSON prompts for image generation across multiple
illustration styles. Currently supports:

1. **Riso Print** — risograph screen-print, halftone-heavy folk illustration
2. **Cosy Painterly Scene** — gouache/pastel, golden-hour, Ghibli-adjacent

Each style has its own tab. Each field has a "Custom..." option that reveals
a text input so you can override any preset.

## Install (Developer Mode)

1. Unzip the folder somewhere permanent (don't delete it — Chrome loads from this folder).
2. Open Chrome and go to `chrome://extensions`
3. Toggle **Developer mode** on (top-right).
4. Click **Load unpacked** and select the unzipped `image-nook` folder.
5. Click the puzzle-piece icon in your toolbar and pin "Image Nook".
6. Click the icon — the tool opens in a new tab.

## Updating

Replace the folder contents with the new files, then hit the refresh icon on
the extension card at `chrome://extensions`.

## File layout

```
image-nook/
├── manifest.json     ← extension config (v1.1.1)
├── background.js     ← opens the tool in a new tab on icon click
├── index.html        ← the UI (two tabs, two forms, one output panel)
├── styles.css        ← all styling
├── app.js            ← style registry + tab logic
└── icons/
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png  ← swap these for your own branding
```

## Adding a third style later

In `app.js`, add a new entry to the `STYLES` registry and a corresponding
`buildXJSON()` function. In `index.html`, add a tab button and a matching
`.tab-panel` form. The wire-up handles the rest.
