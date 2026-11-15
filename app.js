// ============================================================
// Image Nook v2 — click-to-pick prompt maker
//
// How a style is put together:
//   STYLES[n]        the card: name, look, which options show as quick chips
//   NOOK_FIELDS[key] every option the style supports (fields.js + NEW_FIELDS)
//   style.build()    the JSON version of the prompt (builders.js / buildNewStyleJSON)
//   buildProse()     the plain-paragraph version, written from the same values
//
// To add a style: add its fields to NEW_FIELDS and one entry to STYLES.
// ============================================================

'use strict';

const VERSION = '2.0.0';
const AUTO_TEXT = 'chosen to suit the subject';
const NO_SUBJECT = '[YOUR SUBJECT]';
const ASPECTS = ['1:1', '4:5', '3:4', '2:3', '9:16', '4:3', '3:2', '16:9'];

// ------------------------------------------------------------
// Options for the newer styles (same shape as fields.js)
// ------------------------------------------------------------

const opt = (list) => list.map(o => Array.isArray(o) ? { v: o[0], l: o[1] } : { v: o, l: o.charAt(0).toUpperCase() + o.slice(1) });

const NEW_FIELDS = {
  linocut: [
    { id: 'lc-ink', label: 'Ink colours', kind: 'select', section: 'Print', def: 'black ink on cream paper', cph: 'e.g. teal and gold on kraft paper',
      options: opt([
        ['black ink on cream paper', 'Black on cream'],
        ['deep indigo ink on cream paper', 'Indigo on cream'],
        ['two-colour reduction print in black and rust red', 'Black + rust red'],
        ['two-colour print in forest green and mustard', 'Green + mustard'],
        ['three-colour layered print in navy, coral and ochre', 'Navy + coral + ochre']
      ]) },
    { id: 'lc-border', label: 'Border', kind: 'select', section: 'Print', def: 'rough hand-carved border around the image', cph: 'e.g. circular medallion frame',
      options: opt([
        ['rough hand-carved border around the image', 'Carved border'],
        ['no border, the image floats on the paper', 'No border'],
        ['arched window frame', 'Arched frame']
      ]) },
    { id: 'lc-scene', label: 'Around the subject', kind: 'select', section: 'Print', def: '__auto__', cph: 'e.g. mushrooms and ferns',
      options: opt([
        ['__auto__', 'Auto'],
        ['botanical leaves and flowers', 'Leaves and flowers'],
        ['night sky with stars and a moon', 'Night sky'],
        ['waves and water', 'Waves'],
        ['nothing, subject only', 'Subject only']
      ]) }
  ],
  colouring: [
    { id: 'cb-detail', label: 'Detail level', kind: 'select', section: 'Page', def: 'medium detail, a mix of large and small areas', cph: 'e.g. very simple, for young children',
      options: opt([
        ['simple, large shapes that are easy to colour', 'Simple'],
        ['medium detail, a mix of large and small areas', 'Medium'],
        ['intricate, with lots of small pattern areas', 'Intricate']
      ]) },
    { id: 'cb-line', label: 'Line weight', kind: 'select', section: 'Page', def: 'medium outlines', cph: 'e.g. very thick marker-like lines',
      options: opt([
        ['bold, thick outlines', 'Bold'],
        ['medium outlines', 'Medium'],
        ['fine, delicate outlines', 'Fine']
      ]) },
    { id: 'cb-background', label: 'Background', kind: 'select', section: 'Page', def: 'a simple scene around the subject', cph: 'e.g. mandala pattern behind the subject',
      options: opt([
        ['plain white, subject only', 'Subject only'],
        ['a simple scene around the subject', 'Simple scene'],
        ['a full-page pattern filling every corner', 'Full-page pattern'],
        ['a decorative border frame', 'Border frame']
      ]) },
    { id: 'cb-vibe', label: 'Vibe', kind: 'select', section: 'Page', def: 'cute and cosy', cph: 'e.g. spooky but friendly',
      options: opt([
        ['cute and cosy', 'Cute and cosy'],
        ['whimsical and magical', 'Whimsical'],
        ['bold and graphic', 'Bold and graphic'],
        ['botanical and calm', 'Botanical and calm']
      ]) }
  ],
  tarot: [
    { id: 'tc-title', label: 'Card title', kind: 'text', section: 'Card', def: '', ph: 'e.g. THE STAR' },
    { id: 'tc-numeral', label: 'Numeral at the top', kind: 'text', section: 'Card', def: '', ph: 'e.g. XVII', hint: 'optional' },
    { id: 'tc-palette', label: 'Palette', kind: 'select', section: 'Card', def: 'muted vintage ochre, dusty blue, brick red and cream', cph: 'e.g. teal, copper and bone',
      options: opt([
        ['muted vintage ochre, dusty blue, brick red and cream', 'Muted vintage'],
        ['celestial deep navy, gold and cream', 'Celestial navy + gold'],
        ['botanical sage, terracotta, plum and cream', 'Botanical'],
        ['black and gold only', 'Black + gold'],
        ['pastel lavender, peach, mint and cream', 'Pastel']
      ]) },
    { id: 'tc-border', label: 'Border', kind: 'select', section: 'Card', def: 'ornate hand-drawn border with corner flourishes', cph: 'e.g. border of mushrooms and moths',
      options: opt([
        ['ornate hand-drawn border with corner flourishes', 'Ornate flourishes'],
        ['simple double-line border', 'Simple double line'],
        ['art nouveau arch with floral vines', 'Art nouveau arch'],
        ['celestial border with stars and moon phases', 'Stars and moon phases']
      ]) },
    { id: 'tc-symbols', label: 'Symbols', kind: 'select', section: 'Card', def: '__auto__', cph: 'e.g. keys, moths and candles',
      options: opt([
        ['__auto__', 'Auto'],
        ['sun, moon and stars', 'Sun, moon, stars'],
        ['flowers and vines', 'Flowers and vines'],
        ['swords, cups, wands or coins', 'Suit symbols'],
        ['none, keep it minimal', 'Minimal']
      ]) }
  ],
  pixel: [
    { id: 'px-res', label: 'Pixel size', kind: 'select', section: 'Pixels', def: 'medium resolution, like a 64x64 sprite scaled up', cph: 'e.g. 128x128 portrait',
      options: opt([
        ['chunky low resolution, like a 32x32 sprite scaled up', 'Chunky'],
        ['medium resolution, like a 64x64 sprite scaled up', 'Medium'],
        ['detailed, like a 16-bit game scene', 'Detailed']
      ]) },
    { id: 'px-palette', label: 'Palette', kind: 'select', section: 'Pixels', def: 'warm cosy cream, terracotta, sage and soft brown', cph: 'e.g. sunset orange and purple',
      options: opt([
        ['warm cosy cream, terracotta, sage and soft brown', 'Warm cosy'],
        ['moonlit deep blue, lavender and pale yellow', 'Moonlit'],
        ['forest moss green, bark brown and mushroom red', 'Forest'],
        ['candy pastel pink, mint, butter yellow and sky blue', 'Candy pastel'],
        ['four shades of retro handheld green', 'Retro handheld green']
      ]) },
    { id: 'px-view', label: 'View', kind: 'select', section: 'Pixels', def: 'a single sprite on a plain background', cph: 'e.g. game title screen',
      options: opt([
        ['a single sprite on a plain background', 'Single sprite'],
        ['a small scene in side-on view', 'Side-on scene'],
        ['a top-down game view', 'Top-down'],
        ['an isometric room', 'Isometric room']
      ]) },
    { id: 'px-outline', label: 'Outline', kind: 'select', section: 'Pixels', def: 'a dark coloured outline around the subject', cph: 'e.g. white sticker outline',
      options: opt([
        ['a dark coloured outline around the subject', 'Dark coloured'],
        ['a black outline around the subject', 'Black'],
        ['no outline', 'None']
      ]) }
  ]
};

const FIELDS = Object.assign({}, NOOK_FIELDS, NEW_FIELDS);

// ------------------------------------------------------------
// Style registry
// ------------------------------------------------------------

const STYLES = [
  {
    key: 'riso', label: 'Riso Print', tagline: 'Chunky halftones, folk shapes',
    meta: ['3-4 ink layers', 'Halftone fills', 'Folk-art forms'],
    thumb: 'images/thumbs/riso-print.webp', swatch: ['#2f5d3a', '#b5cf5a', '#e2574c', '#f5eddc'],
    ids: { subject: 'r-subject', aspect: 'r-aspect' }, aspect: '1:1',
    quick: ['r-palette', 'r-scene', 'r-typo'],
    always: ['r-palette', 'r-background', 'r-framing', 'r-scene', 'r-typo', 'r-mood'],
    noun: 'Risograph screen-print illustration',
    look: 'Hand-pulled riso print look: 3 to 4 flat spot-colour ink layers with slight misregistration, chunky visible halftone dots for shading, heavy paper grain and mottled ink-rolled fills. Bold, simplified folk-art shapes defined by colour blocks with minimal outlines, flat with no perspective.',
    avoid: ['digital gradients', '3D rendering', 'photorealism', 'clean vector edges', 'glow or lens effects', 'airbrushed shading', 'anime line art'],
    build: buildRisoJSON
  },
  {
    key: 'painterly', label: 'Cosy Painterly Scene', tagline: 'Gouache light, quiet moments',
    meta: ['Gouache & pastel', 'Soft golden light', 'Ghibli-adjacent'],
    thumb: 'images/thumbs/cosy-painterly-scene.webp', swatch: ['#7d9a78', '#5f8f8f', '#f3e6c8', '#c9785a'],
    ids: { subject: 'p-subject', aspect: 'p-aspect' }, aspect: '9:16',
    quick: ['p-setting', 'p-time', 'p-palette'],
    always: ['p-palette', 'p-mood', 'p-framing'],
    noun: 'Cosy painterly scene',
    look: 'Digital painting that looks like gouache and soft pastel: visible painterly brushstrokes, soft dissolving edges, chalky matte texture and subtle paper grain, forms defined by colour and light with no outlines. Warm diffused light, soft cool-tinted shadows and gentle atmospheric haze. Rounded, simplified, gently chunky shapes in a lived-in, slightly weathered world; a quiet Ghibli-adjacent moment where the setting matters as much as the subject.',
    avoid: ['anime cel-shading', 'hard black outlines', 'flat vector art', 'photorealism', '3D render look', 'harsh contrast', 'neon colours', 'lens flare', 'text or watermarks'],
    build: buildPainterlyJSON
  },
  {
    key: 'storybook', label: 'Cute Whimsical Storybook', tagline: 'Soft, round and gentle',
    meta: ['Chunky rounded forms', 'Pastel storybook palette', 'Soft chalky texture'],
    thumb: 'images/thumbs/cute-whimsical-storybook.webp', swatch: ['#a9cfe8', '#a8c3a0', '#f8ecd4', '#f2b79a'],
    ids: { subject: 's-subject', aspect: 's-aspect' }, aspect: '1:1',
    quick: ['s-setting', 's-weather', 's-palette'],
    always: ['s-palette', 's-lighting', 's-linework'],
    noun: 'Cute whimsical storybook illustration',
    look: 'Soft digital painting with chunky rounded shapes and soft corners, like a cosy life-sim game postcard. Matte chalky pastel texture with visible grain and paper tooth, soft fuzzy edges, minimal soft shading with tinted shadows that are never grey or black. Simple centred composition with a clear silhouette, 2 to 4 flat layers, low detail and slightly chibi proportions. Any outlines are warm dark brown, never pure black.',
    noText: 'No text.',
    avoid: ['photorealism', '3D render look', 'crisp vector edges', 'heavy black outlines', 'cinematic lighting', 'hard cel shading', 'complex perspective', 'glossy or metallic finish', 'grunge'],
    skip: () => (getValue('s-linework').startsWith('none') ? ['s-linework-width'] : []),
    build: buildStorybookJSON
  },
  {
    key: 'kawaii', label: 'Kawaii Punk Pop', tagline: 'Y2K cute with an edge',
    meta: ['Y2K kawaii punk', 'Flat block colour', 'Sticker-sheet feel'],
    thumb: null, swatch: ['#8fd19e', '#f7a8c4', '#f7f2e8', '#2a241f', '#ffd447'],
    ids: { subject: 'k-subject', aspect: 'k-aspect' }, aspect: '1:1',
    quick: ['k-scheme', 'k-mood', 'k-bg-type', 'k-composition'],
    always: ['k-scheme', 'k-mood', 'k-bg-type', 'k-composition', 'k-line-weight', 'k-motifs'],
    words: { text: 'k-primary-text', toggle: { id: 'k-use-text', on: 'YES', off: 'NO' }, fields: ['k-typo-style'], ph: 'e.g. UGH!! or LOSER CLUB' },
    noun: 'Kawaii punk pop illustration',
    look: 'Y2K kawaii punk, cute meets edgy, like a zine page or sticker sheet: early 2000s web, tattoo flash and magical girl manga. Flat blocks of clean, separated colour with no gradients, black outlines with rounded corners, small hand-placed white shine marks and cheek blush ovals. If there is a character: chibi proportions with a big head and small body. Flat canvas, no perspective.',
    avoid: ['photorealism', '3D rendering', 'soft airbrush gradients', 'complex perspective', 'glossy chrome effects', 'muddy mixed colours', 'Disney or Pixar proportions', 'generic emoji faces', 'depth-of-field blur', 'watercolour bleeds'],
    build: buildKawaiiJSON
  },
  {
    key: 'retropop', label: 'Retro Pop Poster', tagline: 'Vintage ad, bold type',
    meta: ['1950s + 60s Japan', 'Halftone & misregister', 'Character-driven'],
    thumb: 'images/thumbs/retro-pop-poster.webp', swatch: ['#f2edd7', '#1e3a8f', '#e63b2e', '#ffffff'],
    ids: { subject: 'rp-subject', aspect: 'rp-aspect' }, aspect: '1:1',
    quick: ['rp-palette-preset', 'rp-era', 'rp-layout', 'rp-mascot'],
    always: ['rp-palette-preset', 'rp-era', 'rp-layout', 'rp-scene', 'rp-mascot', 'rp-motifs-group', 'rp-halftone-size', 'rp-badge-shape'],
    words: { text: 'rp-headline-text', label: 'Headline', fields: ['rp-headline-font', 'rp-headline-treatment'], extra: ['rp-subhead-text', 'rp-badge-text'], ph: 'e.g. ICE COLD! or NEW FLAVOUR' },
    noun: 'Retro pop poster illustration',
    look: 'Vintage screenprint poster blending 1950s American advertising with Japanese and Korean kitsch: flat blocks of limited colour with halftone dot shading, deep blue outlines, slight print misregistration and warm cream paper grain. Flat 2D with no perspective; playful, nostalgic, bold and handcrafted, with a matte printed finish.',
    avoid: ['photorealism', '3D render', 'gradient shading', 'realistic drop shadows', 'muted palette', 'blur', 'garbled lettering', 'modern minimalist flat vector', 'corporate clean look'],
    skip: () => {
      const s = [];
      if (!txt('rp-badge-text')) s.push('rp-badge-shape');
      if (getValue('rp-mascot') === 'no') s.push('rp-mascot');
      return s;
    },
    valueFor: {
      'rp-palette-preset': (v) => {
        const p = RETROPOP_PALETTES[v];
        return p ? `${v.replace(/_/g, ' ')} (background ${p.background}, primary ${p.primary}, accent ${p.accent}, highlight ${p.highlight})` : v;
      }
    },
    build: buildRetroPopJSON
  },
  {
    key: 'retrokawaii', label: 'Retro Kawaii', tagline: 'Wobbly lines, bright stickers',
    meta: ['Bold chunky outlines', 'Halftone & grain', 'Cute chibi mascots'],
    thumb: 'images/thumbs/retro-kawaii.webp', swatch: ['#e6332a', '#ffd23f', '#3fa7d6', '#f7f2e8', '#111111'],
    ids: { subject: 'rk-subject', aspect: 'rk-aspect' }, aspect: '1:1',
    quick: ['rk-color-mode', 'rk-palette', 'rk-layout', 'rk-background'],
    always: ['rk-color-mode', 'rk-palette', 'rk-accent', 'rk-layout', 'rk-background', 'rk-line-weight'],
    words: { text: 'rk-title-text', toggle: { id: 'rk-use-text', on: 'yes', off: 'no' }, fields: ['rk-lettering'], ph: "e.g. LET'S GO or YUM!" },
    noun: 'Cute hand-drawn retro kawaii sticker illustration',
    look: 'Thick, wobbly black outlines with rounded caps and corners; ultra-simplified blobby kawaii characters with oversized heads, tiny bodies and stubby mitten limbs; flat bright colour or black-and-white halftone, all on a grainy printed paper texture like a risograph sticker or zine cover. Joyful, childlike, retro cartoon meets streetwear sticker.',
    avoid: ['thin, clean or vector-perfect lines', 'gradients, soft shading or realistic lighting', '3D, photographic or painterly rendering', 'detailed faces, fingers or anatomy', 'muted or pastel-heavy palettes', 'smooth digital surfaces with no grain'],
    skip: () => (getValue('rk-color-mode') === 'monochrome' ? ['rk-palette'] : ['rk-accent']),
    build: buildRetroKawaiiJSON
  },
  {
    key: 'whimsystamp', label: 'Whimsy Vintage Stamp', tagline: 'Tiny faded postage art',
    meta: ['Riso-printed postage', 'Mid-century Japanese', 'Storybook-cute'],
    thumb: 'images/thumbs/whimsy-vintage-stamp.webp', swatch: ['#f3ead3', '#23345c', '#d9a0a0', '#9db59a', '#3d8b8b'],
    ids: { subject: 'ws-subject', aspect: 'ws-aspect' }, aspect: '4:5',
    quick: ['ws-palette', 'ws-bg-tone', 'ws-era', 'ws-edge'],
    always: ['ws-palette', 'ws-bg-tone', 'ws-era', 'ws-edge', 'ws-medium', 'ws-denomination', 'ws-denom-style'],
    noun: 'Vintage postage stamp illustration',
    look: 'A single postage stamp on a plain white background, printed like a vintage risograph or woodblock print: flat blocks of desaturated, slightly faded colour, no smooth gradients, minimal shading and matte tactile paper. The subject is simplified, soft-rounded and slightly chibi with a gentle expression; charming, calm and storybook-cute.',
    avoid: ['photorealism', '3D rendering or glossy CGI', 'smooth digital gradients', 'harsh saturated neon colours', 'busy backgrounds', 'modern flat-vector corporate look', 'glossy sheen'],
    skip: () => (getValue('ws-denom-style') === 'no denomination' ? ['ws-denomination'] : []),
    build: buildWhimsyStampJSON
  },
  {
    key: 'diecut', label: 'Cute Die-Cut Sticker', tagline: 'Bold outline, white border',
    meta: ['Die-cut vinyl sticker', 'Bold black outlines', 'Candy pastel pops'],
    thumb: null, swatch: ['#f9c6d4', '#c9b8f0', '#bfe6d0', '#ff4fa0', '#ffffff'],
    ids: { subject: 'ds-subject', aspect: 'ds-aspect' }, aspect: '1:1',
    quick: ['ds-bg', 'ds-texture', 'ds-lettering-style'],
    always: ['ds-bg', 'ds-texture'],
    words: { text: 'ds-text', toggle: { id: 'ds-text-present', on: 'yes', off: 'no' }, fields: ['ds-lettering-style', 'ds-lettering-layout'], ph: 'e.g. CALL ME ANTISOCIAL' },
    noun: 'Die-cut vinyl sticker',
    look: 'Flat 2D cartoon vector illustration with bold uniform black outlines, simple cel shading in one or two flat tones, and a thick offset white bubbly die-cut border hugging the silhouette. Candy pastel palette (lavender, baby pink, mint, sky blue, butter yellow) with hot pink, neon lime and coral pops. Small sparkles, stars and hearts scattered as accents. One isolated design centred on a flat solid-colour background with a generous margin; cheeky and cute.',
    avoid: ['photorealism', '3D render', 'gradient meshes or airbrushed shading', 'busy or detailed backgrounds', 'drop shadows on the sticker', 'thin or inconsistent linework', 'muddy or desaturated colours', 'watermarks, signatures or extra logos'],
    build: buildDieCutJSON
  },
  {
    key: 'cosmicfolk', label: 'Psychadelic Cosmic Folk-Art', tagline: 'Occult kitsch, candy neon',
    meta: ['Mid-century occult kitsch', 'Psychedelic candy neon', 'Flat poster clarity'],
    thumb: null, swatch: ['#3a1f5c', '#e7a6c5', '#b7e33b', '#ff3fa4', '#ffb347'],
    ids: { subject: 'pc-subject', aspect: 'pc-aspect' }, aspect: '2:3',
    quick: ['pc-setting', 'pc-story-beat', 'pc-mode', 'pc-symmetry'],
    always: ['pc-mode', 'pc-setting', 'pc-story-beat', 'pc-motifs-group', 'pc-symmetry', 'pc-scale'],
    words: { text: 'pc-type-text', toggle: { id: 'pc-type-present', on: 'yes', off: 'no' }, fields: ['pc-type-style', 'pc-type-placement', 'pc-type-color'], ph: 'e.g. COSMIC LULLABY' },
    noun: 'Retro cosmic psychedelic gouache poster illustration',
    look: 'Mid-century kitsch meets occult fairytale: chunky, simplified organic shapes with soft, slightly wobbly handmade edges and flat, bold colour blocks. A limited base of dusty pink, lavender, deep violet, midnight black and forest green with punchy candy-neon accents (chartreuse, hot magenta, buttery yellow, tangerine, electric cyan). Gouache and screenprint feel with fine speckle grain, chalky stipple shading, soft glowing halos and matte paper tooth. Minimal near-black or indigo linework on key silhouettes only. Flat, centred, poster-like composition with generous breathing room, 2 to 4 layers and minimal perspective.',
    avoid: ['photorealism', '3D render or CGI', 'highly detailed textures', 'realistic lighting or depth of field', 'lens flare', 'ultra-sharp vector edges', 'busy background clutter', 'complex perspective', 'tiny fussy detail', 'metallic glossy finish'],
    build: buildCosmicFolkJSON
  },
  {
    key: 'akiramanga', label: 'Retro Akira Manga', tagline: '80s manga colour plates',
    meta: ['Toriyama colour plates', 'Chibi retro-futurism', 'Faded vintage print'],
    thumb: null, swatch: ['#a8b58a', '#c9673f', '#f1e6cc', '#6fa3a0', '#1d1a17'],
    ids: { subject: 'am-subject', aspect: 'am-aspect' }, aspect: '1:1',
    quick: ['am-colour-mode', 'am-backdrop', 'am-energy'],
    always: ['am-colour-mode', 'am-backdrop', 'am-energy'],
    noun: 'Retro 1980s manga colour illustration',
    look: "Hand-inked late-1970s to 1980s shonen manga colour plate in the vein of Akira Toriyama, with a vintage printed-page feel. Bold, clean black ink outlines with heavier silhouettes and finer interior detail; fine parallel hatching and spot blacks instead of soft gradients. Rounded, slightly chibi characters with big expressive faces; bulbous, friendly retro-futuristic machines covered in rivets, pipes and grilles. Flat fills in muted, faded vintage tones (sage, olive, terracotta, burnt orange, cream, soft teal) with subtle paper grain, like a scan from an old manga volume. Subject isolated with generous empty space; whimsical, adventurous and nostalgic.",
    avoid: ['3D render', 'photorealism', 'soft airbrush gradients', 'glossy modern anime cel-shading', 'lens flare', 'neon colours', 'gritty realism', 'sketchy unfinished lines', 'outline glow'],
    build: buildAkiraMangaJSON
  },

  // ---------- newer styles ----------
  {
    key: 'linocut', label: 'Linocut Block Print', tagline: 'Carved lines, inky texture', isNew: true,
    meta: ['Hand-carved relief print', 'Gouge-mark shading', 'High contrast'],
    thumb: null, swatch: ['#1d1a17', '#f1e6cc', '#a8442f', '#2f4a3a'],
    ids: {}, aspect: '4:5',
    quick: ['lc-ink', 'lc-border', 'lc-scene'],
    always: ['lc-ink', 'lc-border'],
    noun: 'Linocut block print',
    lock: {
      medium: 'Hand-carved linocut, relief-printed in oil-based ink on soft cream printmaking paper',
      marks: 'Bold carved shapes with visible gouge marks and chatter lines left in the cut-away areas; shading is built from carved parallel lines and hatching, never gradients',
      ink: 'Slightly uneven, salty ink coverage with tiny specks of paper showing through and soft imperfect edges',
      shapes: 'Strong simplified silhouettes, high contrast between inked and bare paper, decorative folk-pattern fills'
    },
    noText: 'No text or lettering.',
    avoid: ['photorealism', '3D render', 'smooth gradients', 'clean vector edges', 'digital airbrush', 'glossy finish', 'thin pen linework'],
    build: buildNewStyleJSON
  },
  {
    key: 'colouring', label: 'Colouring Book Page', tagline: 'Clean outlines to colour in', isNew: true,
    meta: ['Black outlines only', 'Closed shapes', 'Print-ready white'],
    thumb: null, swatch: ['#ffffff', '#1d1a17', '#ffffff', '#1d1a17', '#ffffff'],
    ids: {}, aspect: '3:4',
    quick: ['cb-detail', 'cb-line', 'cb-background', 'cb-vibe'],
    always: ['cb-detail', 'cb-line', 'cb-background', 'cb-vibe'],
    noun: 'Black and white colouring book page',
    lock: {
      medium: 'Clean black outlines only on a pure white background: no colour, no grey, no shading and no solid black fills',
      shapes: 'Every shape is closed and clearly separated so it is easy to colour inside',
      linework: 'Smooth, confident lines with an even weight and a slightly thicker outer contour',
      layout: 'The whole subject fits inside the page with a clear margin all round'
    },
    noText: 'No text or lettering.',
    avoid: ['colour', 'grey tones', 'shading or gradients', 'cross-hatching', 'solid black areas', 'photorealism', '3D render', 'sketchy or broken lines', 'watermarks'],
    build: buildNewStyleJSON
  },
  {
    key: 'tarot', label: 'Mystic Tarot Card', tagline: 'Ornate borders, symbols', isNew: true,
    meta: ['Vintage card deck', 'Inked + flat colour', 'Symbolic staging'],
    thumb: null, swatch: ['#1f2a4d', '#d9a441', '#f1e6cc', '#a8442f', '#7d9a78'],
    ids: {}, aspect: '4:7',
    quick: ['tc-palette', 'tc-border', 'tc-symbols'],
    always: ['tc-palette', 'tc-border', 'tc-numeral'],
    words: { text: 'tc-title', label: 'Card title', where: 'on the title banner at the bottom of the card', none: 'Leave the title banner blank, with no text anywhere.', fields: [], ph: 'e.g. THE STAR' },
    noun: 'Illustrated tarot card',
    lock: {
      format: 'A single tall tarot card seen flat and front-on, with a decorative border and a title banner at the bottom',
      rendering: 'Hand-inked linework with flat, muted colour fills, like a vintage lithographed card deck',
      composition: 'Symbolic, centred, stage-like composition with one clear central figure or object and a few meaningful symbols',
      finish: 'Aged paper texture with slightly faded ink'
    },
    avoid: ['photorealism', '3D render', 'glossy finish', 'neon colours', 'modern flat corporate vector', 'busy cluttered background', 'extra or garbled text'],
    build: buildNewStyleJSON
  },
  {
    key: 'pixel', label: 'Cosy Pixel Art', tagline: 'Crisp 16-bit cosiness', isNew: true,
    meta: ['Hard-edged pixels', 'Limited palette', '16-bit game feel'],
    thumb: null, swatch: ['#f3e6c8', '#c9785a', '#7d9a78', '#6b4f3a', '#2b2d42'],
    ids: {}, aspect: '1:1',
    quick: ['px-res', 'px-palette', 'px-view'],
    always: ['px-res', 'px-palette', 'px-view', 'px-outline'],
    noun: 'Pixel art illustration',
    lock: {
      pixels: 'Crisp, hard-edged square pixels on a clearly visible, consistent pixel grid, with no anti-aliasing and no blur',
      colour: 'A small limited palette with deliberate dithering for shading',
      forms: 'Clean readable silhouette, chunky shapes and small highlights placed pixel by pixel',
      feel: 'Cosy 16-bit era game art'
    },
    noText: 'No text or lettering.',
    avoid: ['smooth gradients', 'anti-aliasing', 'blur', 'photorealism', '3D render', 'vector edges', 'mixed pixel sizes'],
    build: buildNewStyleJSON
  }
];

const STYLE_BY_KEY = Object.fromEntries(STYLES.map(s => [s.key, s]));
const FIELD_BY_ID = {};
Object.values(FIELDS).forEach(list => list.forEach(f => { FIELD_BY_ID[f.id] = f; }));

// ids with special meaning (subject box, shape chips, words box)
const SUBJECT_IDS = new Set(STYLES.map(s => s.ids.subject).filter(Boolean));
const ASPECT_IDS = new Set(STYLES.map(s => s.ids.aspect).filter(Boolean));
const WORD_TEXT_IDS = new Set(STYLES.filter(s => s.words).map(s => s.words.text));
const WORD_TOGGLES = {};
STYLES.forEach(s => { if (s.words && s.words.toggle) WORD_TOGGLES[s.words.toggle.id] = s; });

// ------------------------------------------------------------
// State
// ------------------------------------------------------------

const state = {
  style: 'riso',
  subject: '',
  aspect: null,          // null = use the style's own default shape
  aspectCustom: '',
  format: 'prose',
  values: {},            // field id -> chosen value ('__custom__' when typing your own)
  customs: {},           // field id -> custom text
  recipes: []
};

const store = {
  get(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private window: carry on without saving */ }
  }
};

const active = () => STYLE_BY_KEY[state.style];

function currentAspect() {
  if (state.aspect === '__custom__') return state.aspectCustom.trim() || active().aspect;
  return state.aspect || active().aspect;
}

function wordsText(st) {
  return st.words ? String(state.values[st.words.text] || '').trim() : '';
}

// ------------------------------------------------------------
// Value readers used by every builder
// ------------------------------------------------------------

function getValue(id) {
  if (ASPECT_IDS.has(id)) return currentAspect();
  if (WORD_TOGGLES[id]) {
    const st = WORD_TOGGLES[id];
    return wordsText(st) ? st.words.toggle.on : st.words.toggle.off;
  }
  const f = FIELD_BY_ID[id];
  if (!f) return '';
  const v = state.values[id] !== undefined ? state.values[id] : f.def;
  if (v === '__custom__') return (state.customs[id] || '').trim() || '(custom not specified)';
  if (v === '__auto__') return AUTO_TEXT;
  return v;
}

function txt(id) {
  if (SUBJECT_IDS.has(id)) return state.subject.trim();
  const f = FIELD_BY_ID[id];
  const v = state.values[id] !== undefined ? state.values[id] : (f ? f.def : '');
  return String(v || '').trim();
}

function checks(id) {
  const f = FIELD_BY_ID[id];
  const saved = state.values[id] || {};
  const out = {};
  f.items.forEach(it => { out[it.k] = saved[it.k] !== undefined ? saved[it.k] : it.on; });
  return out;
}

function checkedList(id) {
  const c = checks(id);
  return Object.keys(c).filter(k => c[k]);
}

function isDefault(f) {
  if (f.kind === 'checks') {
    const c = checks(f.id);
    return f.items.every(it => c[it.k] === it.on);
  }
  const v = state.values[f.id];
  return v === undefined || v === f.def;
}

// Fields the tweak drawer should not list (they have their own controls)
function isHiddenField(st, f) {
  return SUBJECT_IDS.has(f.id) || ASPECT_IDS.has(f.id) || WORD_TOGGLES[f.id] || (st.words && st.words.text === f.id);
}

// ------------------------------------------------------------
// JSON builder for the newer styles
// ------------------------------------------------------------

const snake = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

function buildNewStyleJSON() {
  const st = active();
  const choices = {};
  FIELDS[st.key].forEach(f => {
    if (st.words && st.words.text === f.id) return;
    const v = f.kind === 'select' ? getValue(f.id) : txt(f.id);
    choices[snake(f.label)] = v || null;
  });
  const out = {
    style: st.noun,
    subject: state.subject.trim() || NO_SUBJECT,
    style_lock: Object.assign({ _comment: 'Keep this block as written so every image matches the set.' }, st.lock),
    choices: choices
  };
  if (st.words) {
    const w = wordsText(st);
    out.lettering = w ? { text: w, placement: st.words.where || null, rule: 'spell exactly, add no other text' } : null;
  } else {
    out.lettering = null;
  }
  out.avoid = st.avoid;
  out.aspect_ratio = currentAspect();
  return out;
}

// ------------------------------------------------------------
// Plain-paragraph prompt
// ------------------------------------------------------------

const stripDot = (s) => String(s).trim().replace(/[.\s]+$/, '');
const sentenceCase = (s) => s.charAt(0) + s.slice(1).toLowerCase();
const lowerFirst = (s) => (/^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);

// How one option reads inside a sentence. Descriptive values are used as written;
// short code-like values (centered_portrait, LOW) use their friendly label instead.
function proseValue(st, f) {
  if (f.kind === 'checks') {
    const c = checks(f.id);
    const on = f.items.filter(it => c[it.k]).map(it => lowerFirst(it.l));
    return on.length ? on.join(', ') : 'none';
  }
  if (f.kind !== 'select') return stripDot(txt(f.id)) || null;
  const raw = state.values[f.id] !== undefined ? state.values[f.id] : f.def;
  if (raw === '__auto__' || raw === '__none__') return null;
  if (raw === '__custom__') return stripDot(state.customs[f.id] || '') || null;
  if (st.valueFor && st.valueFor[f.id]) return st.valueFor[f.id](raw);
  if (/\s/.test(raw)) return stripDot(raw);
  const o = f.options.find(x => x.v === raw);
  return stripDot(lowerFirst(o ? o.l : raw));
}

function buildProse() {
  const st = active();
  const subject = state.subject.trim() || NO_SUBJECT;
  const look = st.look || Object.values(st.lock).map(stripDot).join('. ') + '.';
  const parts = [`${st.noun} of ${stripDot(subject)}.`, look];

  const w = wordsText(st);
  const wordFields = st.words ? st.words.fields : [];
  const skip = new Set(st.skip ? st.skip() : []);
  const pairs = [];

  FIELDS[st.key].forEach(f => {
    if (isHiddenField(st, f) || skip.has(f.id)) return;
    if (wordFields.includes(f.id)) return;               // lettering options are written with the words
    if (!st.always.includes(f.id) && isDefault(f)) return;
    const val = proseValue(st, f);
    if (val) pairs.push(`${sentenceCase(f.label)}: ${val}.`);
  });
  if (pairs.length) parts.push(pairs.join(' '));

  if (st.words) {
    const extraText = (st.words.extra || []).some(id => txt(id));
    if (w) {
      let s = `${st.words.label || 'Lettering'}: the words "${w}"${st.words.where ? ' ' + st.words.where : ''}`;
      wordFields.forEach(id => {
        const f = FIELD_BY_ID[id];
        const val = proseValue(st, f);
        if (val) s += `; ${f.label.toLowerCase()}: ${val}`;
      });
      parts.push(s + '. Spell the text exactly and add no other words.');
    } else if (!extraText) {
      parts.push(st.words.none || 'No text or lettering.');
    }
  } else if (st.noText) {
    parts.push(st.noText);
  }

  parts.push(`Avoid: ${st.avoid.join(', ')}.`);
  parts.push(`Aspect ratio ${currentAspect()}.`);
  return parts.join('\n\n');
}

function currentPrompt() {
  return state.format === 'json' ? JSON.stringify(active().build(), null, 2) : buildProse();
}

// ------------------------------------------------------------
// Rendering helpers
// ------------------------------------------------------------

const $ = (id) => document.getElementById(id);

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => {
    if (v === null || v === undefined || v === false) return;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v === true ? '' : v);
  });
  (children || []).forEach(c => { if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
  return node;
}

function escapeHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightJSON(str) {
  return escapeHTML(str)
    .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
    .replace(/: "([^"]*)"/g, ': <span class="json-string">"$1"</span>')
    .replace(/^(\s*)"([^"]*)"(,?)$/gm, '$1<span class="json-string">"$2"</span>$3');
}

function highlightProse(str) {
  return escapeHTML(str)
    .replace(escapeHTML(NO_SUBJECT), `<span class="missing">${escapeHTML(NO_SUBJECT)}</span>`)
    .replace(/^(Avoid|Aspect ratio)/gm, '<span class="json-key">$1</span>');
}

// ------------------------------------------------------------
// Step 1: style cards + saved recipes
// ------------------------------------------------------------

function swatchBanner(colours) {
  const stops = colours.map((c, i) => `${c} ${(i / colours.length) * 100}% ${((i + 1) / colours.length) * 100}%`).join(', ');
  return el('span', { class: 'card-swatch', style: `background: linear-gradient(100deg, ${stops});`, 'aria-hidden': 'true' });
}

function renderCards() {
  const wrap = $('cards');
  wrap.textContent = '';
  STYLES.forEach((st, i) => {
    const banner = st.thumb
      ? el('img', { class: 'card-img', src: st.thumb, alt: '', loading: i < 6 ? 'eager' : 'lazy', width: 900, height: 234 })
      : swatchBanner(st.swatch);
    const card = el('button', {
      type: 'button', class: 'card' + (st.key === state.style ? ' active' : ''), 'data-style': st.key,
      'aria-pressed': st.key === state.style ? 'true' : 'false',
      onclick: () => pickStyle(st.key, true)
    }, [
      el('span', { class: 'card-banner' }, [banner]),
      el('span', { class: 'card-body' }, [
        el('span', { class: 'card-name', text: st.label }),
        el('span', { class: 'card-tag', text: st.tagline })
      ]),
      st.isNew ? el('span', { class: 'card-new', text: 'New' }) : null
    ]);
    wrap.appendChild(card);
  });
}

function renderRecipes() {
  const wrap = $('recipes');
  wrap.textContent = '';
  wrap.hidden = state.recipes.length === 0;
  if (!state.recipes.length) return;
  wrap.appendChild(el('span', { class: 'recipes-label', text: 'Your recipes' }));
  state.recipes.forEach((r, i) => {
    const st = STYLE_BY_KEY[r.style];
    if (!st) return;
    wrap.appendChild(el('span', { class: 'recipe' }, [
      el('button', { type: 'button', class: 'recipe-go', title: `${st.label} with your saved tweaks`, onclick: () => applyRecipe(r) }, [
        el('span', { class: 'recipe-star', 'aria-hidden': 'true', text: '★' }), r.name
      ]),
      el('button', { type: 'button', class: 'recipe-x', 'aria-label': `Delete recipe ${r.name}`, text: '×', onclick: () => {
        state.recipes.splice(i, 1); store.set('nook.recipes', state.recipes); renderRecipes();
      } })
    ]));
  });
}

function applyRecipe(r) {
  const st = STYLE_BY_KEY[r.style];
  FIELDS[st.key].forEach(f => { delete state.values[f.id]; delete state.customs[f.id]; });
  Object.assign(state.values, JSON.parse(JSON.stringify(r.values || {})));
  Object.assign(state.customs, r.customs || {});
  state.aspect = r.aspect || null;
  state.aspectCustom = r.aspectCustom || '';
  pickStyle(r.style, true);
}

function saveRecipe() {
  const st = active();
  const values = {}, customs = {};
  FIELDS[st.key].forEach(f => {
    if (st.words && st.words.text === f.id) return;      // words belong to one image, not the look
    if (state.values[f.id] !== undefined && !isDefault(f)) values[f.id] = state.values[f.id];
    if (state.values[f.id] === '__custom__') customs[f.id] = state.customs[f.id] || '';
  });
  const name = $('recipeName').value.trim() || `${st.label} ${state.recipes.filter(r => r.style === st.key).length + 1}`;
  state.recipes.push({ name, style: st.key, values, customs, aspect: state.aspect, aspectCustom: state.aspectCustom });
  store.set('nook.recipes', state.recipes);
  $('recipeName').value = '';
  renderRecipes();
  flash($('saveRecipe'), '✓ Saved');
}

// ------------------------------------------------------------
// Step 2: subject, words, shape, tweaks
// ------------------------------------------------------------

function renderAspects() {
  const wrap = $('aspectChips');
  wrap.textContent = '';
  const st = active();
  const list = ASPECTS.includes(st.aspect) ? ASPECTS : [st.aspect].concat(ASPECTS);
  const current = state.aspect || st.aspect;
  list.concat(['__custom__']).forEach(a => {
    const on = a === current;
    let icon = null;
    if (a !== '__custom__') {
      const [w, h] = a.split(':').map(Number);
      const max = 16;
      icon = el('span', { class: 'ratio-ico', 'aria-hidden': 'true', style: `width:${w >= h ? max : Math.round(max * w / h)}px;height:${h >= w ? max : Math.round(max * h / w)}px;` });
    }
    wrap.appendChild(el('button', {
      type: 'button', class: 'chip' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false',
      onclick: () => { state.aspect = a; renderAspects(); update(); if (a === '__custom__') $('aspectCustom').focus(); }
    }, [icon, a === '__custom__' ? 'Custom' : a]));
  });
  const custom = $('aspectCustom');
  custom.classList.toggle('active', state.aspect === '__custom__');
  custom.value = state.aspectCustom;
}

function setValue(f, v) {
  if (v === f.def) delete state.values[f.id]; else state.values[f.id] = v;
}

function customInput(f) {
  const input = el('input', {
    type: 'text', class: 'custom-input' + (state.values[f.id] === '__custom__' ? ' active' : ''),
    placeholder: f.cph || 'Type your own', 'aria-label': `Custom ${f.label}`, value: state.customs[f.id] || '',
    oninput: (e) => { state.customs[f.id] = e.target.value; update(); }
  });
  return input;
}

// A field shown as clickable chips (quick tweaks)
function chipField(f) {
  const current = state.values[f.id] !== undefined ? state.values[f.id] : f.def;
  const custom = customInput(f);
  const chips = el('div', { class: 'chips' });
  f.options.concat([{ v: '__custom__', l: 'Custom' }]).forEach(o => {
    const on = o.v === current;
    const btn = el('button', {
      type: 'button', class: 'chip' + (on ? ' on' : '') + (o.v === '__custom__' ? ' chip-custom' : ''), 'aria-pressed': on ? 'true' : 'false',
      onclick: () => {
        setValue(f, o.v);
        chips.querySelectorAll('.chip').forEach(c => { c.classList.remove('on'); c.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('on'); btn.setAttribute('aria-pressed', 'true');
        custom.classList.toggle('active', o.v === '__custom__');
        if (o.v === '__custom__') custom.focus();
        update();
      }
    }, [o.l]);
    chips.appendChild(btn);
  });
  return el('div', { class: 'field' }, [el('span', { class: 'label', text: f.label }), chips, custom]);
}

// A field shown as a compact dropdown / text box / pill toggles (all options)
function compactField(f) {
  if (f.kind === 'checks') {
    const c = checks(f.id);
    const group = el('div', { class: 'chips' });
    f.items.forEach(it => {
      const btn = el('button', {
        type: 'button', class: 'chip' + (c[it.k] ? ' on' : ''), 'aria-pressed': c[it.k] ? 'true' : 'false',
        onclick: () => {
          const now = checks(f.id);
          now[it.k] = !now[it.k];
          state.values[f.id] = now;
          btn.classList.toggle('on', now[it.k]); btn.setAttribute('aria-pressed', now[it.k] ? 'true' : 'false');
          update();
        }
      }, [it.l]);
      group.appendChild(btn);
    });
    return el('div', { class: 'field' }, [el('span', { class: 'label', text: f.label }), group]);
  }
  const labelKids = [f.label];
  if (f.hint) labelKids.push(el('span', { class: 'hint', text: f.hint }));
  if (f.kind !== 'select') {
    return el('div', { class: 'field' }, [
      el('label', { for: 'f-' + f.id }, labelKids),
      el('input', { type: 'text', id: 'f-' + f.id, placeholder: f.ph || '', value: txt(f.id), autocomplete: 'off',
        oninput: (e) => { setValue(f, e.target.value); update(); } })
    ]);
  }
  const current = state.values[f.id] !== undefined ? state.values[f.id] : f.def;
  const custom = customInput(f);
  const select = el('select', { id: 'f-' + f.id, onchange: (e) => {
    setValue(f, e.target.value);
    custom.classList.toggle('active', e.target.value === '__custom__');
    if (e.target.value === '__custom__') custom.focus();
    update();
  } });
  f.options.concat([{ v: '__custom__', l: 'Custom...' }]).forEach(o => {
    const node = el('option', { value: o.v, text: o.l });
    if (o.v === current) node.selected = true;
    select.appendChild(node);
  });
  return el('div', { class: 'field' }, [el('label', { for: 'f-' + f.id }, labelKids), select, custom]);
}

function renderTweaks() {
  const st = active();
  const quick = $('quickFields'), all = $('allFields');
  quick.textContent = ''; all.textContent = '';
  const fields = FIELDS[st.key].filter(f => !isHiddenField(st, f));

  st.quick.forEach(id => { quick.appendChild(chipField(FIELD_BY_ID[id])); });

  const rest = fields.filter(f => !st.quick.includes(f.id));
  let section = null, box = null;
  rest.forEach(f => {
    if (f.section !== section) {
      section = f.section;
      box = el('div', { class: 'opt-section' }, [el('div', { class: 'section-label', text: section })]);
      all.appendChild(box);
    }
    box.appendChild(compactField(f));
  });
  $('more').hidden = rest.length === 0;
}

function renderStylePanel() {
  const st = active();
  $('meta').innerHTML = st.meta.map(m => `<div class="badge">${escapeHTML(m)}</div>`).join('');

  const eg = FIELD_BY_ID[st.ids.subject];
  $('subject').placeholder = eg && eg.def ? `e.g. ${eg.def.charAt(0).toLowerCase() + eg.def.slice(1)}` : 'e.g. a sleepy fox curled in a teacup';

  const wf = $('wordsField');
  wf.hidden = !st.words;
  if (st.words) {
    $('wordsLabel').textContent = st.words.label || 'Words on the image';
    $('words').placeholder = st.words.ph || '';
    $('words').value = state.values[st.words.text] || '';
  }
  renderAspects();
  renderTweaks();
}

function pickStyle(key, scroll) {
  if (!STYLE_BY_KEY[key]) return;
  state.style = key;
  store.set('nook.last', { style: key, format: state.format });
  document.querySelectorAll('.card').forEach(c => {
    const on = c.dataset.style === key;
    c.classList.toggle('active', on); c.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  renderStylePanel();
  update();
  // On a phone the cards fill the screen, so bring the next step into view
  if (scroll && window.matchMedia('(max-width: 980px)').matches) {
    $('make').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }
}

// ------------------------------------------------------------
// Step 3: output
// ------------------------------------------------------------

function update() {
  const st = active();
  const text = currentPrompt();
  $('output').innerHTML = state.format === 'json' ? highlightJSON(text) : highlightProse(text);
  $('output').classList.toggle('prose', state.format !== 'json');
  document.querySelectorAll('.format-btn').forEach(b => {
    const on = b.dataset.format === state.format;
    b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  $('outputNote').textContent = state.format === 'json'
    ? 'JSON is the structured version. Handy when a tool follows the plain prompt too loosely.'
    : 'Plain prompts work in Gemini, ChatGPT, Midjourney and most other image tools.';

  const changed = FIELDS[st.key].filter(f => !isHiddenField(st, f) && !isDefault(f)).length;
  const count = $('tweakCount');
  count.hidden = changed === 0;
  count.textContent = changed === 1 ? '1 change' : `${changed} changes`;
  if (state.subject.trim()) $('nudge').hidden = true;
}

function flash(btn, label) {
  const orig = btn.dataset.label || btn.textContent;
  btn.dataset.label = orig;
  btn.textContent = label;
  btn.classList.add('copied');
  clearTimeout(btn._t);
  btn._t = setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1500);
}

// Copies straight away inside the click, so opening a new tab afterwards cannot block it
function copyText(text) {
  let ok = false;
  try {
    const ta = el('textarea', { readonly: true, style: 'position:fixed;top:0;left:0;opacity:0;' });
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    ok = document.execCommand('copy');
    document.body.removeChild(ta);
  } catch (e) { ok = false; }
  if (!ok && navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
}

function copyFrom(btn) {
  if (!state.subject.trim()) {
    $('nudge').hidden = false;
    $('subject').focus();
    $('subject').classList.remove('shake'); void $('subject').offsetWidth; $('subject').classList.add('shake');
    return false;
  }
  copyText(currentPrompt());
  flash(btn, '✓ Copied');
  return true;
}

// ------------------------------------------------------------
// Wire-up
// ------------------------------------------------------------

function init() {
  const last = store.get('nook.last', {});
  if (last.style && STYLE_BY_KEY[last.style]) state.style = last.style;
  if (last.format === 'json') state.format = 'json';
  state.recipes = store.get('nook.recipes', []).filter(r => r && STYLE_BY_KEY[r.style]);

  $('version').textContent = 'v' + VERSION;
  renderCards();
  renderRecipes();
  renderStylePanel();
  update();

  $('subject').addEventListener('input', (e) => { state.subject = e.target.value; update(); });
  $('subject').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); copyFrom($('copyBtn')); }
  });
  $('words').addEventListener('input', (e) => {
    const st = active();
    if (st.words) { state.values[st.words.text] = e.target.value; update(); }
  });
  $('aspectCustom').addEventListener('input', (e) => { state.aspectCustom = e.target.value; update(); });

  document.querySelectorAll('.format-btn').forEach(b => b.addEventListener('click', () => {
    state.format = b.dataset.format;
    store.set('nook.last', { style: state.style, format: state.format });
    update();
  }));

  $('copyBtn').addEventListener('click', (e) => copyFrom(e.currentTarget));
  document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', (e) => {
    if (copyFrom(e.currentTarget)) window.open(e.currentTarget.dataset.open, '_blank', 'noopener');
  }));

  $('saveRecipe').addEventListener('click', saveRecipe);
  $('recipeName').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); saveRecipe(); } });
  $('resetTweaks').addEventListener('click', () => {
    const st = active();
    FIELDS[st.key].forEach(f => {
      if (st.words && st.words.text === f.id) return;
      delete state.values[f.id]; delete state.customs[f.id];
    });
    state.aspect = null; state.aspectCustom = '';
    renderStylePanel();
    update();
  });
}

init();
