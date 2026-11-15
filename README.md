# Image Nook

Pick a style, say what to draw, copy a ready-made prompt. Works with Gemini,
ChatGPT, Midjourney or any other AI image tool.

It is a plain web page: open the GitHub Pages link and bookmark it. Nothing to
install, and updates appear on the next visit.

## Using it

1. **Pick a style** card.
2. **Say what to draw** (and, for styles with lettering, any words to show).
3. **Copy**, or copy and open Gemini / ChatGPT in one click, then paste.

Optional extras:

- **Tweak the look** - a few click-to-pick chips per style, plus "All options"
  for everything the style supports. Every option has a Custom choice.
- **Save as recipe** - keeps a set of tweaks as a one-click button. Recipes are
  stored in your own browser, so each person has their own.
- **Plain prompt / JSON** - plain paragraphs by default; JSON is the structured
  version of the same prompt.

## Files

```
index.html     page markup
styles.css     all styling
fields.js      every option for the original ten styles
builders.js    JSON builders for the original ten styles
app.js         style registry, newer styles, plain-prompt writer, UI
images/thumbs    square card thumbnails, one per style (<style key>.webp)
images/examples  larger example of each style, shown beside the form
manifest.json, background.js, icons/   lets the same folder load as a Chrome extension
```

## Adding a style

In `app.js`, add the style's options to `NEW_FIELDS` and one entry to `STYLES`
(name, tagline, swatch colours, the locked look, quick-tweak ids, avoid list).
The card, chips, plain prompt and JSON all come from that entry.
Drop a 320px thumbnail and a 1024px example into the two image folders, named
after the style key; without them the card shows colour stripes instead.

## Still works as a Chrome extension

Load the folder unpacked at `chrome://extensions` (Developer mode) and the
toolbar icon opens the same page.
