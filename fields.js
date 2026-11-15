// Auto-migrated from the v1 form panels: every option each style supports.
// Shape: { styleKey: [ {id, label, kind, section, options:[{v,l}], def, ...} ] }
const NOOK_FIELDS = {
 "riso": [
  {
   "id": "r-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "A barn owl perched on a fence post",
   "ph": "e.g. A barn owl perched on a fence post at dusk"
  },
  {
   "id": "r-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 5:7"
  },
  {
   "id": "r-palette",
   "label": "Colour Combination",
   "kind": "select",
   "section": "Palette & Surface",
   "options": [
    {
     "v": "Forest green + lime + coral red + cream",
     "l": "Forest green + lime + coral red + cream"
    },
    {
     "v": "Burnt orange + teal + dusty purple + cream",
     "l": "Burnt orange + teal + dusty purple + cream"
    },
    {
     "v": "Brick red + ochre + cream + black",
     "l": "Brick red + ochre + cream + black"
    },
    {
     "v": "Slate blue + rust + cream + black",
     "l": "Slate blue + rust + cream + black"
    },
    {
     "v": "Mustard + olive + brick + bone",
     "l": "Mustard + olive + brick + bone"
    },
    {
     "v": "Plum + sage + apricot + cream",
     "l": "Plum + sage + apricot + cream"
    },
    {
     "v": "Navy + coral + mustard + cream",
     "l": "Navy + coral + mustard + cream"
    }
   ],
   "def": "Forest green + lime + coral red + cream",
   "cph": "e.g. Deep teal + bone + warm grey + ochre"
  },
  {
   "id": "r-background",
   "label": "Background Treatment",
   "kind": "select",
   "section": "Palette & Surface",
   "options": [
    {
     "v": "Flat warm cream paper (#F5EDDC), subject panel sits on it with margin",
     "l": "Flat cream paper, panel with margin"
    },
    {
     "v": "Single saturated flat colour filling the entire frame",
     "l": "Single saturated flat colour, full bleed"
    },
    {
     "v": "Cream paper with subtle halftone speckle in the margins",
     "l": "Cream with halftone speckle margins"
    },
    {
     "v": "Two-tone split: top half saturated, bottom half cream",
     "l": "Two-tone horizon split"
    }
   ],
   "def": "Flat warm cream paper (#F5EDDC), subject panel sits on it with margin",
   "cph": "e.g. Deep oxblood paper with a single horizon band"
  },
  {
   "id": "r-framing",
   "label": "Framing",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "Subject contained within a soft-cornered square scene panel, panel sits on the cream background with margin around it",
     "l": "Soft-cornered scene panel"
    },
    {
     "v": "Full-bleed composition, subject fills the frame edge-to-edge",
     "l": "Full bleed, edge to edge"
    },
    {
     "v": "Decorative bordered frame with patterned edge motifs",
     "l": "Decorative bordered frame"
    },
    {
     "v": "Subject floats freely on the background, no panel",
     "l": "Floating, no panel"
    },
    {
     "v": "Stamp-like rectangular frame with perforated edges",
     "l": "Stamp-like with perforated edges"
    }
   ],
   "def": "Subject contained within a soft-cornered square scene panel, panel sits on the cream background with margin around it",
   "cph": "e.g. Circular medallion with decorative rope border"
  },
  {
   "id": "r-scene",
   "label": "Scene Elements",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "Simplified foliage, flowers, and small environmental motifs filling negative space",
     "l": "Foliage and flowers"
    },
    {
     "v": "Water, lily pads, reeds, and aquatic plants",
     "l": "Aquatic motifs"
    },
    {
     "v": "Rocks, grass tufts, and ground textures",
     "l": "Rocks and grass"
    },
    {
     "v": "Clouds, sun, stars, and weather motifs",
     "l": "Sky and weather"
    },
    {
     "v": "Geometric patterns, dots, and folk-art ornamental motifs",
     "l": "Folk-art geometric ornaments"
    },
    {
     "v": "Minimal — only the subject, no environmental elements",
     "l": "Minimal, subject only"
    }
   ],
   "def": "Simplified foliage, flowers, and small environmental motifs filling negative space",
   "cph": "e.g. Cogs, tools, and workshop ephemera"
  },
  {
   "id": "r-mood",
   "label": "Mood",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "Nostalgic, warm, handmade, folk-craft, vintage 1960s-70s print poster",
     "l": "Nostalgic folk-print poster"
    },
    {
     "v": "Playful, charming, slightly off-kilter children's book illustration",
     "l": "Playful children's book"
    },
    {
     "v": "Bold, graphic, mid-century European poster",
     "l": "Bold mid-century poster"
    },
    {
     "v": "Quiet, contemplative, woodblock-print influenced",
     "l": "Quiet woodblock influence"
    },
    {
     "v": "Energetic, busy, maximalist folk pattern",
     "l": "Energetic folk maximalism"
    }
   ],
   "def": "Nostalgic, warm, handmade, folk-craft, vintage 1960s-70s print poster",
   "cph": "e.g. Eerie, faded, like a forgotten almanac page"
  },
  {
   "id": "r-typo",
   "label": "Type Treatment",
   "kind": "select",
   "section": "Typography Accent",
   "options": [
    {
     "v": "Vertical katakana set alongside the scene panel, sometimes with a small Pokédex-style number block, in one of the ink colours",
     "l": "Vertical katakana with number block"
    },
    {
     "v": "Horizontal block-letter title across the top in one of the ink colours",
     "l": "Horizontal block-letter title"
    },
    {
     "v": "Small numbered tag in the corner, no other type",
     "l": "Numbered corner tag"
    },
    {
     "v": "No typography, image only",
     "l": "None, image only"
    }
   ],
   "def": "Vertical katakana set alongside the scene panel, sometimes with a small Pokédex-style number block, in one of the ink colours",
   "cph": "e.g. A curved banner ribbon with hand-lettered name"
  }
 ],
 "painterly": [
  {
   "id": "p-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "A sleepy fox curled on a stone windowsill",
   "ph": "e.g. A sleepy fox curled on a stone windowsill"
  },
  {
   "id": "p-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "9:16",
     "l": "9:16, Vertical"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    }
   ],
   "def": "9:16",
   "cph": "e.g. 5:7"
  },
  {
   "id": "p-setting",
   "label": "Setting",
   "kind": "select",
   "section": "Setting & Light",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "an overgrown garden, soft with weeds and wildflowers",
     "l": "Overgrown garden"
    },
    {
     "v": "a sleepy village shopfront with painted wood and window boxes",
     "l": "Village shopfront"
    },
    {
     "v": "a sunlit interior with worn rugs and tall windows",
     "l": "Sunlit interior"
    },
    {
     "v": "an alpine meadow with distant peaks",
     "l": "Alpine meadow"
    },
    {
     "v": "a shaded forest clearing with ferns and moss",
     "l": "Shaded forest"
    },
    {
     "v": "a stone courtyard with climbing ivy and a fountain",
     "l": "Stone courtyard"
    },
    {
     "v": "a cluttered attic studio with skylight and dust motes",
     "l": "Cluttered attic studio"
    },
    {
     "v": "a coastal cliff path with sea grass and salt air",
     "l": "Coastal cliff path"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. a lighthouse keeper's cottage at the edge of a cliff"
  },
  {
   "id": "p-time",
   "label": "Time of Day / Lighting",
   "kind": "select",
   "section": "Setting & Light",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "late afternoon golden hour, long warm shadows",
     "l": "Late afternoon (golden hour)"
    },
    {
     "v": "dappled morning light filtering through leaves",
     "l": "Dappled morning"
    },
    {
     "v": "overcast noon, soft diffuse grey light",
     "l": "Overcast noon"
    },
    {
     "v": "early dawn, cool blue and quiet",
     "l": "Early dawn"
    },
    {
     "v": "warm sunset, sky turning peach and rose",
     "l": "Warm sunset"
    },
    {
     "v": "blue hour twilight, lamps just lit",
     "l": "Blue hour twilight"
    },
    {
     "v": "moonlit night, soft silver glow and deep shadow",
     "l": "Moonlit night"
    },
    {
     "v": "bright clear midday, crisp shadows",
     "l": "Bright clear midday"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. just after a rain shower, light returning slowly"
  },
  {
   "id": "p-palette",
   "label": "Palette Emphasis",
   "kind": "select",
   "section": "Palette & Mood",
   "options": [
    {
     "v": "sage and forest greens with warm cream highlights",
     "l": "Sage greens & cream"
    },
    {
     "v": "muted teal and dusty terracotta with soft sky blue",
     "l": "Teal & terracotta"
    },
    {
     "v": "buttery yellow, soft pink and lavender accents",
     "l": "Buttery yellow & pink"
    },
    {
     "v": "coral red and forest green against cream",
     "l": "Coral & forest green"
    },
    {
     "v": "autumnal russet, ochre and deep moss",
     "l": "Autumnal russet"
    },
    {
     "v": "cool sage, lavender and soft cream",
     "l": "Cool sage & lavender"
    },
    {
     "v": "dusty plum, sage and ivory with copper accents",
     "l": "Plum & sage"
    }
   ],
   "def": "sage and forest greens with warm cream highlights",
   "cph": "e.g. seafoam, bone, soft coral and warm grey"
  },
  {
   "id": "p-mood",
   "label": "Mood Tone",
   "kind": "select",
   "section": "Palette & Mood",
   "options": [
    {
     "v": "cosy, peaceful, slightly nostalgic",
     "l": "Cosy & nostalgic"
    },
    {
     "v": "quietly magical, gently mysterious",
     "l": "Quietly magical"
    },
    {
     "v": "slightly melancholic, contemplative",
     "l": "Slightly melancholic"
    },
    {
     "v": "warm and inviting, gently social",
     "l": "Warm and inviting"
    },
    {
     "v": "sleepy and dreamlike",
     "l": "Sleepy and dreamlike"
    },
    {
     "v": "quietly adventurous, hopeful",
     "l": "Quietly adventurous"
    }
   ],
   "def": "cosy, peaceful, slightly nostalgic",
   "cph": "e.g. bittersweet, end-of-summer feeling"
  },
  {
   "id": "p-expression",
   "label": "Character Expression",
   "kind": "select",
   "section": "Character & Frame",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "calm and observant",
     "l": "Calm and observant"
    },
    {
     "v": "curious, head slightly tilted",
     "l": "Curious"
    },
    {
     "v": "sleepy, eyes half-closed",
     "l": "Sleepy"
    },
    {
     "v": "quietly mischievous, a small smile",
     "l": "Quietly mischievous"
    },
    {
     "v": "contemplative, looking into the distance",
     "l": "Contemplative"
    },
    {
     "v": "content, gently smiling",
     "l": "Content"
    },
    {
     "v": "alert but at ease",
     "l": "Alert but at ease"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. wary at first but warming up"
  },
  {
   "id": "p-framing",
   "label": "Composition Framing",
   "kind": "select",
   "section": "Character & Frame",
   "options": [
    {
     "v": "cinematic three-quarter angle, subject integrated naturally into setting",
     "l": "Cinematic three-quarter"
    },
    {
     "v": "slight low angle looking up, generous sky above",
     "l": "Slight low angle"
    },
    {
     "v": "intimate eye-level close, environment framing the subject",
     "l": "Intimate eye-level"
    },
    {
     "v": "wide environmental shot, subject small within a larger world",
     "l": "Wide environmental"
    },
    {
     "v": "overhead three-quarter, looking gently down",
     "l": "Overhead three-quarter"
    },
    {
     "v": "framed through a window or doorway, foreground silhouettes",
     "l": "Window / doorway frame"
    },
    {
     "v": "through-the-branches view, dappled foreground foliage",
     "l": "Through-the-branches"
    }
   ],
   "def": "cinematic three-quarter angle, subject integrated naturally into setting",
   "cph": "e.g. reflected in a still pond surface"
  }
 ],
 "storybook": [
  {
   "id": "s-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "A tiny hedgehog holding an acorn",
   "ph": "e.g. A tiny hedgehog holding an acorn"
  },
  {
   "id": "s-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "5:7",
     "l": "5:7, Storybook portrait"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 6:7"
  },
  {
   "id": "s-setting",
   "label": "Setting",
   "kind": "select",
   "section": "Scene",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "a cozy reading nook with cushions and tea",
     "l": "Cozy reading nook"
    },
    {
     "v": "a wildflower meadow under a soft sky",
     "l": "Wildflower meadow"
    },
    {
     "v": "a tiny mushroom forest clearing",
     "l": "Mushroom forest clearing"
    },
    {
     "v": "a village bakery window at dusk",
     "l": "Village bakery window"
    },
    {
     "v": "a starlit hillside with a small picnic blanket",
     "l": "Starlit hillside"
    },
    {
     "v": "a wooden treehouse with twinkling lanterns",
     "l": "Wooden treehouse"
    },
    {
     "v": "a tidy vegetable garden patch",
     "l": "Vegetable garden patch"
    },
    {
     "v": "a snowy cottage doorstep with warm light inside",
     "l": "Snowy cottage doorstep"
    },
    {
     "v": "a small windowsill with potted plants",
     "l": "Windowsill with plants"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. a riverbank with paper boats"
  },
  {
   "id": "s-action",
   "label": "Action",
   "kind": "select",
   "section": "Scene",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "reading a tiny book",
     "l": "Reading a tiny book"
    },
    {
     "v": "holding a steaming mug",
     "l": "Holding a steaming mug"
    },
    {
     "v": "watering a small plant",
     "l": "Watering a small plant"
    },
    {
     "v": "picking a single flower",
     "l": "Picking a flower"
    },
    {
     "v": "looking up at the stars",
     "l": "Looking up at the stars"
    },
    {
     "v": "hugging a small friend",
     "l": "Hugging a small friend"
    },
    {
     "v": "sleeping under a patchwork blanket",
     "l": "Sleeping under a blanket"
    },
    {
     "v": "baking something small",
     "l": "Baking something small"
    },
    {
     "v": "just sitting, quietly content",
     "l": "Sitting quietly content"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. catching a falling leaf"
  },
  {
   "id": "s-weather",
   "label": "Weather",
   "kind": "select",
   "section": "Scene",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "gentle rain with soft drops",
     "l": "Gentle rain"
    },
    {
     "v": "warm sunny afternoon",
     "l": "Warm sunny afternoon"
    },
    {
     "v": "snow falling lightly",
     "l": "Light snowfall"
    },
    {
     "v": "foggy morning haze",
     "l": "Foggy morning"
    },
    {
     "v": "soft breeze carrying leaves",
     "l": "Soft breeze with leaves"
    },
    {
     "v": "clear starry night",
     "l": "Clear starry night"
    },
    {
     "v": "overcast and calm",
     "l": "Overcast and calm"
    },
    {
     "v": "sunset glow, peach and lavender sky",
     "l": "Sunset glow"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. cherry blossom petals drifting down"
  },
  {
   "id": "s-prop1",
   "label": "Prop 1",
   "kind": "select",
   "section": "Props",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "a steaming mug of tea",
     "l": "Steaming mug of tea"
    },
    {
     "v": "a small wildflower",
     "l": "Small wildflower"
    },
    {
     "v": "a tiny open book",
     "l": "Tiny open book"
    },
    {
     "v": "a glowing paper lantern",
     "l": "Glowing paper lantern"
    },
    {
     "v": "a patchwork blanket",
     "l": "Patchwork blanket"
    },
    {
     "v": "a single firefly",
     "l": "Single firefly"
    },
    {
     "v": "a polished river stone",
     "l": "Polished river stone"
    },
    {
     "v": "a slice of pie on a plate",
     "l": "Slice of pie"
    },
    {
     "v": "a little knitted scarf",
     "l": "Knitted scarf"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. a tiny brass key"
  },
  {
   "id": "s-prop2",
   "label": "Prop 2",
   "kind": "select",
   "section": "Props",
   "options": [
    {
     "v": "__auto__",
     "l": "Auto"
    },
    {
     "v": "a few drifting leaves",
     "l": "Drifting leaves"
    },
    {
     "v": "small floating petals",
     "l": "Floating petals"
    },
    {
     "v": "a curious snail nearby",
     "l": "Curious snail nearby"
    },
    {
     "v": "a tiny mushroom or two",
     "l": "Tiny mushrooms"
    },
    {
     "v": "a pair of soft slippers",
     "l": "Soft slippers"
    },
    {
     "v": "a small basket of berries",
     "l": "Basket of berries"
    },
    {
     "v": "a music note floating in the air",
     "l": "Floating music note"
    },
    {
     "v": "a heart-shaped pebble",
     "l": "Heart-shaped pebble"
    },
    {
     "v": "none",
     "l": "None, keep it minimal"
    }
   ],
   "def": "__auto__",
   "cph": "e.g. a small folded paper crane"
  },
  {
   "id": "s-palette",
   "label": "Colour Scheme",
   "kind": "select",
   "section": "Palette & Light",
   "options": [
    {
     "v": "pastel sky blue, sage green and warm cream",
     "l": "Pastel sky & sage"
    },
    {
     "v": "soft peach, muted teal and warm cream",
     "l": "Peach & teal"
    },
    {
     "v": "buttery yellow, sage green and soft coral",
     "l": "Buttery yellow & coral"
    },
    {
     "v": "warm orange, dusty red and warm cream",
     "l": "Warm orange & dusty red"
    },
    {
     "v": "pale pink, soft lavender and sage",
     "l": "Pale pink & lavender"
    },
    {
     "v": "dusty mint, buttery cream and peach",
     "l": "Dusty mint & peach"
    },
    {
     "v": "cool periwinkle, soft yellow and cream",
     "l": "Periwinkle & soft yellow"
    },
    {
     "v": "autumn russet, cream and sage with coral accents",
     "l": "Autumn russet & sage"
    }
   ],
   "def": "pastel sky blue, sage green and warm cream",
   "cph": "e.g. mossy green, cream and warm clay"
  },
  {
   "id": "s-lighting",
   "label": "Lighting Mood",
   "kind": "select",
   "section": "Palette & Light",
   "options": [
    {
     "v": "diffuse, soft, dreamy ambient light",
     "l": "Soft dreamy ambient"
    },
    {
     "v": "warm golden afternoon glow",
     "l": "Warm golden afternoon"
    },
    {
     "v": "soft overcast daylight, gentle and even",
     "l": "Soft overcast daylight"
    },
    {
     "v": "dreamy twilight haze",
     "l": "Dreamy twilight haze"
    },
    {
     "v": "gentle moonlight, cool and quiet",
     "l": "Gentle moonlight"
    },
    {
     "v": "warm hearth firelight, glowing from one side",
     "l": "Hearth firelight"
    },
    {
     "v": "sun-dappled morning, broken light through leaves",
     "l": "Sun-dappled morning"
    },
    {
     "v": "sunset glow, coral and lavender",
     "l": "Sunset coral & lavender"
    }
   ],
   "def": "diffuse, soft, dreamy ambient light",
   "cph": "e.g. soft glow from a single candle"
  },
  {
   "id": "s-linework",
   "label": "Linework Style",
   "kind": "select",
   "section": "Linework",
   "options": [
    {
     "v": "minimal, only where essential",
     "l": "Minimal"
    },
    {
     "v": "soft and fuzzy, blending into the colour",
     "l": "Soft and fuzzy"
    },
    {
     "v": "none, forms defined by colour alone",
     "l": "None"
    }
   ],
   "def": "minimal, only where essential",
   "cph": "e.g. dotted hand-drawn lines, only on the subject"
  },
  {
   "id": "s-linework-width",
   "label": "Linework Width",
   "kind": "select",
   "section": "Linework",
   "options": [
    {
     "v": "thin, delicate lines",
     "l": "Thin"
    },
    {
     "v": "thick, confident lines",
     "l": "Thick"
    },
    {
     "v": "heavy, bold strokes",
     "l": "Heavy"
    }
   ],
   "def": "thin, delicate lines",
   "cph": "e.g. variable, thin in light, thicker in shadow"
  }
 ],
 "kawaii": [
  {
   "id": "k-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "A scowling chibi cat clutching a melting heart",
   "ph": "e.g. A scowling chibi cat clutching a melting heart"
  },
  {
   "id": "k-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 5:7"
  },
  {
   "id": "k-composition",
   "label": "Composition",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "centered_portrait",
     "l": "Centered portrait"
    },
    {
     "v": "scattered_object_collage",
     "l": "Scattered object collage"
    },
    {
     "v": "poster_layout",
     "l": "Poster layout"
    },
    {
     "v": "sticker_sheet",
     "l": "Sticker sheet"
    },
    {
     "v": "nested_panels",
     "l": "Nested panels"
    },
    {
     "v": "symmetrical_mirror",
     "l": "Symmetrical mirror"
    }
   ],
   "def": "centered_portrait",
   "cph": "e.g. diagonal stack with overlapping shapes"
  },
  {
   "id": "k-framing",
   "label": "Framing",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "thick_black_border",
     "l": "Thick black border"
    },
    {
     "v": "inner_box_frame",
     "l": "Inner box frame"
    },
    {
     "v": "no_frame",
     "l": "No frame"
    },
    {
     "v": "torn_edge",
     "l": "Torn edge"
    }
   ],
   "def": "thick_black_border",
   "cph": "e.g. perforated postage stamp edge"
  },
  {
   "id": "k-negative-space",
   "label": "Negative Space",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "LOW",
     "l": "Low, densely packed"
    },
    {
     "v": "MEDIUM",
     "l": "Medium, balanced"
    },
    {
     "v": "HIGH",
     "l": "High, lots of breathing room"
    }
   ],
   "def": "LOW",
   "cph": "e.g. asymmetric, heavy bottom-left"
  },
  {
   "id": "k-mood",
   "label": "Mood",
   "kind": "select",
   "section": "Vibe & Linework",
   "options": [
    {
     "v": "playful",
     "l": "Playful"
    },
    {
     "v": "melancholic",
     "l": "Melancholic"
    },
    {
     "v": "chaotic",
     "l": "Chaotic"
    },
    {
     "v": "dreamy",
     "l": "Dreamy"
    },
    {
     "v": "angry-cute",
     "l": "Angry-cute"
    },
    {
     "v": "unsettling",
     "l": "Unsettling"
    }
   ],
   "def": "playful",
   "cph": "e.g. bittersweet, post-breakup zine page"
  },
  {
   "id": "k-line-weight",
   "label": "Line Weight",
   "kind": "select",
   "section": "Vibe & Linework",
   "options": [
    {
     "v": "hairline",
     "l": "Hairline"
    },
    {
     "v": "medium",
     "l": "Medium"
    },
    {
     "v": "bold",
     "l": "Bold"
    },
    {
     "v": "extra_bold",
     "l": "Extra bold"
    },
    {
     "v": "varied",
     "l": "Varied"
    }
   ],
   "def": "hairline",
   "cph": "e.g. thick on subject, hairline on motifs"
  },
  {
   "id": "k-line-texture",
   "label": "Line Texture",
   "kind": "select",
   "section": "Vibe & Linework",
   "options": [
    {
     "v": "clean_vector",
     "l": "Clean vector"
    },
    {
     "v": "slightly_rough_ink",
     "l": "Slightly rough ink"
    },
    {
     "v": "grainy_brush",
     "l": "Grainy brush"
    },
    {
     "v": "wobbly_hand_drawn",
     "l": "Wobbly hand-drawn"
    }
   ],
   "def": "clean_vector",
   "cph": "e.g. dotted halftone fill instead of solid line"
  },
  {
   "id": "k-outline",
   "label": "Outline Treatment",
   "kind": "select",
   "section": "Vibe & Linework",
   "options": [
    {
     "v": "single_line",
     "l": "Single line"
    },
    {
     "v": "double_offset_shadow",
     "l": "Double offset shadow"
    },
    {
     "v": "chunky_sticker_outline",
     "l": "Chunky sticker outline"
    },
    {
     "v": "none",
     "l": "None"
    }
   ],
   "def": "single_line",
   "cph": "e.g. dashed cut-line, like a coupon"
  },
  {
   "id": "k-scheme",
   "label": "Colour Scheme",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "green grid + pink + cream",
     "l": "Green grid + pink + cream"
    },
    {
     "v": "orange + blue + cream",
     "l": "Orange + blue + cream"
    },
    {
     "v": "yellow + black + white",
     "l": "Yellow + black + white"
    },
    {
     "v": "red + blue + yellow primary pop",
     "l": "Red + blue + yellow primary pop"
    },
    {
     "v": "lilac + pink + cream pastel",
     "l": "Lilac + pink + cream pastel"
    },
    {
     "v": "salmon + grey + black",
     "l": "Salmon + grey + black"
    },
    {
     "v": "teal + grey + black",
     "l": "Teal + grey + black"
    },
    {
     "v": "monochrome + single accent",
     "l": "Monochrome + single accent"
    }
   ],
   "def": "green grid + pink + cream",
   "cph": "e.g. acid green + magenta + cream"
  },
  {
   "id": "k-color-count",
   "label": "Colour Count",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "2",
     "l": "2 colours"
    },
    {
     "v": "3",
     "l": "3 colours"
    },
    {
     "v": "4",
     "l": "4 colours"
    },
    {
     "v": "5",
     "l": "5 colours"
    }
   ],
   "def": "2",
   "cph": "e.g. 6, with one bright spot accent"
  },
  {
   "id": "k-saturation",
   "label": "Saturation",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "muted_pastel",
     "l": "Muted pastel"
    },
    {
     "v": "mid",
     "l": "Mid"
    },
    {
     "v": "punchy_primary",
     "l": "Punchy primary"
    }
   ],
   "def": "muted_pastel",
   "cph": "e.g. faded vintage, sun-bleached"
  },
  {
   "id": "k-bg-type",
   "label": "Background Type",
   "kind": "select",
   "section": "Background & Texture",
   "options": [
    {
     "v": "grid_lines",
     "l": "Grid lines"
    },
    {
     "v": "checkerboard",
     "l": "Checkerboard"
    },
    {
     "v": "halftone_dots",
     "l": "Halftone dots"
    },
    {
     "v": "solid_color",
     "l": "Solid colour"
    },
    {
     "v": "torn_paper",
     "l": "Torn paper"
    },
    {
     "v": "scattered_motifs",
     "l": "Scattered motifs"
    }
   ],
   "def": "grid_lines",
   "cph": "e.g. notebook ruled lines, blue and red margin"
  },
  {
   "id": "k-grain",
   "label": "Grain / Print Overlay",
   "kind": "select",
   "section": "Background & Texture",
   "options": [
    {
     "v": "subtle_paper",
     "l": "Subtle paper"
    },
    {
     "v": "medium_risograph",
     "l": "Medium risograph"
    },
    {
     "v": "heavy_print",
     "l": "Heavy print"
    },
    {
     "v": "none",
     "l": "None"
    }
   ],
   "def": "subtle_paper",
   "cph": "e.g. faded photocopy, generation-loss feel"
  },
  {
   "id": "k-halftone",
   "label": "Halftone Dots",
   "kind": "select",
   "section": "Background & Texture",
   "options": [
    {
     "v": "yes_background",
     "l": "Yes, in background"
    },
    {
     "v": "yes_shadows",
     "l": "Yes, in shadows"
    },
    {
     "v": "accent_only",
     "l": "Accent only"
    },
    {
     "v": "no",
     "l": "None"
    }
   ],
   "def": "yes_background",
   "cph": "e.g. heavy dots inside the subject's body only"
  },
  {
   "id": "k-motifs",
   "label": "Scattered Motifs",
   "kind": "select",
   "section": "Motifs & Character",
   "options": [
    {
     "v": "4-point sparkle stars, small circles and bubbles",
     "l": "Sparkles + bubbles"
    },
    {
     "v": "5-point classic stars, tiny scattered hearts",
     "l": "Stars + hearts"
    },
    {
     "v": "8-point starburst, lightning bolts",
     "l": "Starbursts + lightning"
    },
    {
     "v": "spirals and squiggles, drippy melting edges",
     "l": "Spirals + drippy edges"
    },
    {
     "v": "lightning bolts, 4-point sparkle stars, drippy melting edges",
     "l": "Lightning + sparkles + drips"
    },
    {
     "v": "tiny scattered hearts, 4-point sparkle stars, small circles",
     "l": "Hearts + sparkles + bubbles"
    }
   ],
   "def": "4-point sparkle stars, small circles and bubbles",
   "cph": "e.g. teardrops, safety pins, broken hearts"
  },
  {
   "id": "k-eyes",
   "label": "Character Eyes",
   "kind": "select",
   "section": "Motifs & Character",
   "options": [
    {
     "v": "large_with_star_pupils",
     "l": "Large with star pupils"
    },
    {
     "v": "spiral_pupils",
     "l": "Spiral pupils"
    },
    {
     "v": "sparkle_pupils",
     "l": "Sparkle pupils"
    },
    {
     "v": "closed_eyelashes",
     "l": "Closed with eyelashes"
    },
    {
     "v": "x_eyes_dizzy",
     "l": "X-eyes (dizzy)"
    },
    {
     "v": "not_applicable",
     "l": "N/A, no character"
    }
   ],
   "def": "large_with_star_pupils",
   "cph": "e.g. tearful with shine highlight"
  },
  {
   "id": "k-expression",
   "label": "Expression",
   "kind": "select",
   "section": "Motifs & Character",
   "options": [
    {
     "v": "smug",
     "l": "Smug"
    },
    {
     "v": "gritted_teeth",
     "l": "Gritted teeth"
    },
    {
     "v": "tearful",
     "l": "Tearful"
    },
    {
     "v": "blank_stare",
     "l": "Blank stare"
    },
    {
     "v": "grinning",
     "l": "Grinning"
    },
    {
     "v": "sleepy",
     "l": "Sleepy"
    },
    {
     "v": "not_applicable",
     "l": "N/A, no character"
    }
   ],
   "def": "smug",
   "cph": "e.g. pouty with one raised eyebrow"
  },
  {
   "id": "k-hair",
   "label": "Hair Style",
   "kind": "select",
   "section": "Motifs & Character",
   "options": [
    {
     "v": "spiky_black_chunks",
     "l": "Spiky black chunks"
    },
    {
     "v": "rounded_bob",
     "l": "Rounded bob"
    },
    {
     "v": "bunches_with_clips",
     "l": "Bunches with clips"
    },
    {
     "v": "propeller_hat",
     "l": "Propeller hat"
    },
    {
     "v": "not_applicable",
     "l": "N/A, no character"
    }
   ],
   "def": "spiky_black_chunks",
   "cph": "e.g. long pigtails with star ties"
  },
  {
   "id": "k-use-text",
   "label": "Include Text?",
   "kind": "select",
   "section": "Typography & UI",
   "options": [
    {
     "v": "YES",
     "l": "Yes"
    },
    {
     "v": "NO",
     "l": "No"
    }
   ],
   "def": "YES",
   "cph": "e.g. only a small barcode-style label"
  },
  {
   "id": "k-primary-text",
   "label": "Primary Text",
   "kind": "text",
   "section": "Typography & UI",
   "def": "",
   "ph": "e.g. UGH!! or LOSER CLUB"
  },
  {
   "id": "k-typo-style",
   "label": "Typography Style",
   "kind": "select",
   "section": "Typography & UI",
   "options": [
    {
     "v": "balloon_chunky",
     "l": "Balloon chunky"
    },
    {
     "v": "graffiti_spray",
     "l": "Graffiti spray"
    },
    {
     "v": "marker_cartoon",
     "l": "Marker cartoon"
    },
    {
     "v": "retro_pixel_error",
     "l": "Retro pixel error"
    },
    {
     "v": "japanese_kana_balloon",
     "l": "Japanese kana balloon"
    },
    {
     "v": "comic_burst",
     "l": "Comic burst"
    },
    {
     "v": "price_tag_scrawl",
     "l": "Price-tag scrawl"
    }
   ],
   "def": "balloon_chunky",
   "cph": "e.g. brutalist newspaper headline serif"
  },
  {
   "id": "k-ui",
   "label": "UI Element (optional)",
   "kind": "select",
   "section": "Typography & UI",
   "options": [
    {
     "v": "none",
     "l": "None"
    },
    {
     "v": "retro_dialog_box",
     "l": "Retro dialog box"
    },
    {
     "v": "error_window_with_close_button",
     "l": "Error window with close button"
    },
    {
     "v": "speech_bubble",
     "l": "Speech bubble"
    },
    {
     "v": "barcode",
     "l": "Barcode"
    },
    {
     "v": "price_tag",
     "l": "Price tag"
    },
    {
     "v": "chain_links",
     "l": "Chain links"
    },
    {
     "v": "keychain_hardware",
     "l": "Keychain hardware"
    }
   ],
   "def": "none",
   "cph": "e.g. a tape cassette label sticker"
  }
 ],
 "retropop": [
  {
   "id": "rp-subject",
   "label": "Primary Subject",
   "kind": "textarea",
   "section": "Subject & Scene",
   "def": "A bottle of cola bursting with liquid",
   "ph": "e.g. anthropomorphic coffee cup mascot bursting with steam"
  },
  {
   "id": "rp-scene",
   "label": "Scene Context",
   "kind": "select",
   "section": "Subject & Scene",
   "options": [
    {
     "v": "studio product shot, flat backdrop",
     "l": "Studio product shot"
    },
    {
     "v": "sun-soaked beach scene with parasol",
     "l": "Beach scene"
    },
    {
     "v": "retro diner counter with checkered floor",
     "l": "Retro diner counter"
    },
    {
     "v": "kaiju attack on a stylised city skyline",
     "l": "Kaiju attack on city"
    },
    {
     "v": "market stall with hand-painted signs",
     "l": "Market stall"
    },
    {
     "v": "vintage living room with patterned wallpaper",
     "l": "Vintage living room"
    },
    {
     "v": "open road with palm trees and convertible",
     "l": "Open road with palm trees"
    },
    {
     "v": "empty stage with stage lights and curtain",
     "l": "Empty stage with lights"
    }
   ],
   "def": "studio product shot, flat backdrop",
   "cph": "e.g. neon-lit izakaya alley at midnight"
  },
  {
   "id": "rp-mascot",
   "label": "Include Mascot?",
   "kind": "select",
   "section": "Subject & Scene",
   "options": [
    {
     "v": "no",
     "l": "No mascot"
    },
    {
     "v": "cute anthropomorphic character with simple round eyes, blushed cheeks, expressive pose",
     "l": "Cute anthropomorphic character"
    },
    {
     "v": "vintage advertising mascot with friendly waving pose",
     "l": "Vintage advertising mascot"
    },
    {
     "v": "kaiju-style cute monster mascot",
     "l": "Kaiju-cute monster mascot"
    },
    {
     "v": "diner-counter waitress or chef mascot",
     "l": "Diner waitress / chef mascot"
    }
   ],
   "def": "no",
   "cph": "e.g. a smiling sun with sunglasses, giving a thumbs-up"
  },
  {
   "id": "rp-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 5:7"
  },
  {
   "id": "rp-layout",
   "label": "Layout",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "centered_hero",
     "l": "Centered hero"
    },
    {
     "v": "diagonal_dynamic",
     "l": "Diagonal dynamic"
    },
    {
     "v": "stacked_typography_top",
     "l": "Stacked typography (top)"
    },
    {
     "v": "product_with_burst_callouts",
     "l": "Product with burst callouts"
    },
    {
     "v": "character_left_type_right",
     "l": "Character left, type right"
    },
    {
     "v": "framed_window",
     "l": "Framed window"
    }
   ],
   "def": "centered_hero",
   "cph": "e.g. tilted three-panel comic-strip layout"
  },
  {
   "id": "rp-negative-space",
   "label": "Negative Space",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "minimal",
     "l": "Minimal, densely packed"
    },
    {
     "v": "moderate",
     "l": "Moderate, balanced"
    },
    {
     "v": "generous",
     "l": "Generous, airy and open"
    }
   ],
   "def": "minimal",
   "cph": "e.g. asymmetric with empty top-right corner"
  },
  {
   "id": "rp-motifs-group",
   "label": "Decorative Motifs",
   "kind": "checks",
   "section": "Composition",
   "hint": "pick any",
   "items": [
    {
     "k": "sparkles",
     "l": "Sparkles",
     "on": true
    },
    {
     "k": "starbursts",
     "l": "Starbursts",
     "on": true
    },
    {
     "k": "halftone_dots_background",
     "l": "Halftone dots BG",
     "on": true
    },
    {
     "k": "checkerboard_stripes",
     "l": "Checkerboard stripes",
     "on": false
    },
    {
     "k": "burst_badges",
     "l": "Burst badges",
     "on": true
    },
    {
     "k": "bubbles_or_droplets",
     "l": "Bubbles / droplets",
     "on": false
    },
    {
     "k": "speed_lines",
     "l": "Speed lines",
     "on": false
    }
   ]
  },
  {
   "id": "rp-line-weight",
   "label": "Line Weight",
   "kind": "select",
   "section": "Linework",
   "options": [
    {
     "v": "thin",
     "l": "Thin"
    },
    {
     "v": "medium",
     "l": "Medium"
    },
    {
     "v": "medium_bold",
     "l": "Medium bold"
    },
    {
     "v": "heavy",
     "l": "Heavy"
    },
    {
     "v": "variable",
     "l": "Variable, thick to thin"
    }
   ],
   "def": "thin",
   "cph": "e.g. heavy on subject, hairline on background"
  },
  {
   "id": "rp-line-style",
   "label": "Line Style",
   "kind": "select",
   "section": "Linework",
   "options": [
    {
     "v": "consistent_clean",
     "l": "Consistent and clean"
    },
    {
     "v": "tapered_brushy",
     "l": "Tapered, brushy"
    },
    {
     "v": "rough_woodcut",
     "l": "Rough woodcut"
    },
    {
     "v": "mixed_weight_hand_inked",
     "l": "Mixed weight, hand-inked"
    }
   ],
   "def": "consistent_clean",
   "cph": "e.g. broken dashes, like an embroidery pattern"
  },
  {
   "id": "rp-stroke-treatment",
   "label": "Stroke Treatment",
   "kind": "select",
   "section": "Linework",
   "options": [
    {
     "v": "solid",
     "l": "Solid"
    },
    {
     "v": "broken_print_misregister",
     "l": "Broken, print misregister"
    },
    {
     "v": "rough_edges",
     "l": "Rough edges"
    }
   ],
   "def": "solid",
   "cph": "e.g. doubled at corners, classic two-pass print"
  },
  {
   "id": "rp-palette-mode",
   "label": "Palette Mode",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "duotone",
     "l": "Duotone (2 inks)"
    },
    {
     "v": "duotone_plus_accent",
     "l": "Duotone plus accent (3 inks)"
    },
    {
     "v": "tritone",
     "l": "Tritone"
    },
    {
     "v": "limited_quad",
     "l": "Limited quad (4 inks)"
    }
   ],
   "def": "duotone",
   "cph": "e.g. five-colour separation, all opaque"
  },
  {
   "id": "rp-palette-preset",
   "label": "Palette Preset",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "classic_riso",
     "l": "Classic Riso, cream, deep blue, vermillion"
    },
    {
     "v": "soft_pastel",
     "l": "Soft Pastel, blush, navy, coral"
    },
    {
     "v": "midnight",
     "l": "Midnight, black, mustard, cherry red"
    },
    {
     "v": "mint_cherry",
     "l": "Mint Cherry, mint cream, forest, deep red"
    },
    {
     "v": "ocean_sun",
     "l": "Ocean Sun, cream, navy, amber"
    },
    {
     "v": "monochrome_blue",
     "l": "Monochrome Blue, cream, deep blue, light blue"
    }
   ],
   "def": "classic_riso",
   "cph": "e.g. olive, brick, bone — 1970s feel"
  },
  {
   "id": "rp-registration",
   "label": "Print Registration",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "perfect",
     "l": "Perfect, clean alignment"
    },
    {
     "v": "slightly_offset_print",
     "l": "Slightly offset (authentic riso)"
    },
    {
     "v": "heavy_misregister",
     "l": "Heavy misregister"
    }
   ],
   "def": "perfect",
   "cph": "e.g. only the red plate is offset, blue stays clean"
  },
  {
   "id": "rp-halftone-size",
   "label": "Halftone Dot Size",
   "kind": "select",
   "section": "Texture & Print Wear",
   "options": [
    {
     "v": "fine",
     "l": "Fine"
    },
    {
     "v": "medium",
     "l": "Medium"
    },
    {
     "v": "coarse",
     "l": "Coarse, visible dots"
    },
    {
     "v": "none",
     "l": "None, no halftone"
    }
   ],
   "def": "fine",
   "cph": "e.g. coarse on background only, fine on subject"
  },
  {
   "id": "rp-paper-grain",
   "label": "Paper Grain",
   "kind": "select",
   "section": "Texture & Print Wear",
   "options": [
    {
     "v": "subtle",
     "l": "Subtle"
    },
    {
     "v": "medium",
     "l": "Medium"
    },
    {
     "v": "heavy_vintage",
     "l": "Heavy vintage"
    },
    {
     "v": "none",
     "l": "None"
    }
   ],
   "def": "subtle",
   "cph": "e.g. heavy on edges only, faded toward centre"
  },
  {
   "id": "rp-vintage-wear",
   "label": "Vintage Wear",
   "kind": "select",
   "section": "Texture & Print Wear",
   "options": [
    {
     "v": "none",
     "l": "None, looks freshly printed"
    },
    {
     "v": "minimal",
     "l": "Minimal, small ink spots"
    },
    {
     "v": "moderate",
     "l": "Moderate, visible age"
    },
    {
     "v": "heavy_distressed",
     "l": "Heavy distressed, folds, tears, foxing"
    }
   ],
   "def": "none",
   "cph": "e.g. coffee-stain ring in one corner"
  },
  {
   "id": "rp-headline-text",
   "label": "Headline Text",
   "kind": "text",
   "section": "Typography",
   "def": "",
   "ph": "e.g. ICE COLD! or NEW FLAVOUR"
  },
  {
   "id": "rp-headline-font",
   "label": "Headline Font Style",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "bold_condensed_sans",
     "l": "Bold condensed sans"
    },
    {
     "v": "vintage_serif_display",
     "l": "Vintage serif display"
    },
    {
     "v": "groovy_bubble_70s",
     "l": "Groovy bubble (70s)"
    },
    {
     "v": "italic_script_handwritten",
     "l": "Italic script (handwritten)"
    },
    {
     "v": "blocky_japanese_kanji",
     "l": "Blocky Japanese kanji"
    },
    {
     "v": "western_slab_serif",
     "l": "Western slab serif"
    },
    {
     "v": "art_deco_geometric",
     "l": "Art deco geometric"
    },
    {
     "v": "stencil_industrial",
     "l": "Stencil industrial"
    }
   ],
   "def": "bold_condensed_sans",
   "cph": "e.g. wooden type, old circus poster"
  },
  {
   "id": "rp-headline-treatment",
   "label": "Headline Treatment",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "solid_with_slight_print_offset",
     "l": "Solid, slight print offset"
    },
    {
     "v": "outlined_only",
     "l": "Outlined only"
    },
    {
     "v": "drop_shadow_offset_red",
     "l": "Drop shadow offset red"
    },
    {
     "v": "warped_arc",
     "l": "Warped arc"
    },
    {
     "v": "wavy_distorted",
     "l": "Wavy / distorted"
    },
    {
     "v": "stacked_two_color",
     "l": "Stacked two-colour"
    }
   ],
   "def": "solid_with_slight_print_offset",
   "cph": "e.g. each letter rotated alternately, hand-cut feel"
  },
  {
   "id": "rp-subhead-text",
   "label": "Subheading Text",
   "kind": "text",
   "section": "Typography",
   "def": "",
   "ph": "e.g. The taste you can't resist!"
  },
  {
   "id": "rp-badge-text",
   "label": "Badge Text",
   "kind": "text",
   "section": "Typography",
   "def": "",
   "ph": "e.g. BEST! or 100% ORGANIC"
  },
  {
   "id": "rp-badge-shape",
   "label": "Badge Shape",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "starburst",
     "l": "Starburst"
    },
    {
     "v": "circle",
     "l": "Circle"
    },
    {
     "v": "banner",
     "l": "Banner"
    },
    {
     "v": "rounded_rectangle",
     "l": "Rounded rectangle"
    },
    {
     "v": "shield",
     "l": "Shield"
    },
    {
     "v": "bottle_cap",
     "l": "Bottle cap"
    },
    {
     "v": "none",
     "l": "None, no badge"
    }
   ],
   "def": "starburst",
   "cph": "e.g. ribbon scroll with tied ends"
  },
  {
   "id": "rp-era",
   "label": "Era Reference",
   "kind": "select",
   "section": "Era, Border & Language",
   "options": [
    {
     "v": "1950s_american_advertising",
     "l": "1950s American advertising"
    },
    {
     "v": "1960s_japanese_pop",
     "l": "1960s Japanese pop"
    },
    {
     "v": "1960s_japanese_pop_meets_50s_american_diner",
     "l": "60s Japan + 50s diner"
    },
    {
     "v": "1970s_psychedelic_groovy",
     "l": "1970s psychedelic groovy"
    },
    {
     "v": "1980s_city_pop",
     "l": "1980s city pop"
    },
    {
     "v": "korean_modern_kitsch",
     "l": "Korean modern kitsch"
    },
    {
     "v": "french_midcentury_poster",
     "l": "French midcentury poster"
    }
   ],
   "def": "1950s_american_advertising",
   "cph": "e.g. early 90s Hong Kong cinema poster"
  },
  {
   "id": "rp-secondary-lang",
   "label": "Secondary Language",
   "kind": "select",
   "section": "Era, Border & Language",
   "options": [
    {
     "v": "none",
     "l": "None"
    },
    {
     "v": "japanese_katakana",
     "l": "Japanese katakana"
    },
    {
     "v": "japanese_kanji",
     "l": "Japanese kanji"
    },
    {
     "v": "korean_hangul",
     "l": "Korean hangul"
    },
    {
     "v": "french",
     "l": "French"
    },
    {
     "v": "chinese_simplified",
     "l": "Chinese (simplified)"
    }
   ],
   "def": "none",
   "cph": "e.g. cyrillic block letters"
  },
  {
   "id": "rp-border",
   "label": "Border Style",
   "kind": "select",
   "section": "Era, Border & Language",
   "options": [
    {
     "v": "none",
     "l": "None"
    },
    {
     "v": "thin_keyline",
     "l": "Thin keyline"
    },
    {
     "v": "thick_frame",
     "l": "Thick frame"
    },
    {
     "v": "ticket_stub_edge",
     "l": "Ticket-stub perforated edge"
    }
   ],
   "def": "none",
   "cph": "e.g. art deco corner ornaments, no full frame"
  }
 ],
 "retrokawaii": [
  {
   "id": "rk-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "a smiling coffee cup with little friends",
   "ph": "e.g. a smiling coffee cup, a fox riding a skateboard, a city skyline"
  },
  {
   "id": "rk-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 5:7"
  },
  {
   "id": "rk-color-mode",
   "label": "Colour Mode",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "full_colour",
     "l": "Full colour, flat bright fills"
    },
    {
     "v": "monochrome",
     "l": "Monochrome, black on cream"
    }
   ],
   "def": "full_colour",
   "cph": "e.g. two-tone, navy and cream only"
  },
  {
   "id": "rk-palette",
   "label": "Palette",
   "kind": "select",
   "section": "Colour",
   "hint": "used in full colour",
   "options": [
    {
     "v": "bright red, sunshine yellow, grass green, sky blue",
     "l": "Red, yellow, green, blue (primary pop)"
    },
    {
     "v": "hot pink, orange, sunshine yellow, purple",
     "l": "Pink, orange, yellow, purple (candy)"
    },
    {
     "v": "bright red, orange, grass green on cream",
     "l": "Red, orange, green (festive)"
    },
    {
     "v": "sky blue, hot pink, sunshine yellow",
     "l": "Blue, pink, yellow (playful)"
    },
    {
     "v": "grass green, bright red, grey",
     "l": "Green, red, grey"
    },
    {
     "v": "full bright spectrum, many bold colours",
     "l": "Full bright spectrum"
    }
   ],
   "def": "bright red, sunshine yellow, grass green, sky blue",
   "cph": "e.g. teal, coral and mustard only"
  },
  {
   "id": "rk-accent",
   "label": "Monochrome Accent",
   "kind": "select",
   "section": "Colour",
   "hint": "used in monochrome",
   "options": [
    {
     "v": "none",
     "l": "None, pure black on cream"
    },
    {
     "v": "hot pink",
     "l": "Hot pink spot colour"
    },
    {
     "v": "sunshine yellow",
     "l": "Sunshine yellow spot colour"
    },
    {
     "v": "bright red",
     "l": "Bright red spot colour"
    },
    {
     "v": "sky blue",
     "l": "Sky blue spot colour"
    }
   ],
   "def": "none",
   "cph": "e.g. lime green spot colour"
  },
  {
   "id": "rk-line-weight",
   "label": "Line Weight",
   "kind": "select",
   "section": "Linework & Form",
   "options": [
    {
     "v": "heavy and uniform, bold black outlines",
     "l": "Heavy & uniform (signature)"
    },
    {
     "v": "extra heavy, very chunky outlines",
     "l": "Extra heavy"
    },
    {
     "v": "medium-bold outlines",
     "l": "Medium-bold"
    },
    {
     "v": "varied weight, thick on subject, thinner on details",
     "l": "Varied weight"
    }
   ],
   "def": "heavy and uniform, bold black outlines",
   "cph": "e.g. uneven, fattening at the corners"
  },
  {
   "id": "rk-face",
   "label": "Face Style",
   "kind": "select",
   "section": "Linework & Form",
   "options": [
    {
     "v": "small oval or dot eyes with a single white highlight, tiny triangle nose, simple curved mouth",
     "l": "Dot eyes + tiny nose (classic)"
    },
    {
     "v": "u-shaped happy eyes, content closed smile",
     "l": "Happy u-eyes"
    },
    {
     "v": "big round eyes with shine, small w mouth",
     "l": "Big shiny eyes, w mouth"
    },
    {
     "v": "half-closed sleepy or smug eyes",
     "l": "Sleepy / smug eyes"
    },
    {
     "v": "mixed simple expressions across a group",
     "l": "Mixed (group)"
    },
    {
     "v": "not applicable — no characters",
     "l": "N/A, no characters"
    }
   ],
   "def": "small oval or dot eyes with a single white highlight, tiny triangle nose, simple curved mouth",
   "cph": "e.g. one big eye, one tiny eye, goofy"
  },
  {
   "id": "rk-faces-everywhere",
   "label": "Everything Has a Face?",
   "kind": "select",
   "section": "Linework & Form",
   "options": [
    {
     "v": "yes",
     "l": "Yes, objects, weather & scenery get faces too"
    },
    {
     "v": "no",
     "l": "No, only the main characters"
    }
   ],
   "def": "yes",
   "cph": "e.g. only the sun and clouds get faces"
  },
  {
   "id": "rk-grain",
   "label": "Print Grain",
   "kind": "select",
   "section": "Texture",
   "options": [
    {
     "v": "visible paper grain and ink noise across all fills",
     "l": "Visible riso grain (signature)"
    },
    {
     "v": "heavy vintage photocopy grain",
     "l": "Heavy photocopy grain"
    },
    {
     "v": "light subtle grain",
     "l": "Light subtle grain"
    },
    {
     "v": "clean, minimal grain",
     "l": "Clean, minimal grain"
    }
   ],
   "def": "visible paper grain and ink noise across all fills",
   "cph": "e.g. faded toner with white speckle dropouts"
  },
  {
   "id": "rk-halftone",
   "label": "Halftone Use",
   "kind": "select",
   "section": "Texture",
   "options": [
    {
     "v": "dot patterns used for shading and to fill larger shapes",
     "l": "Shading & large fills"
    },
    {
     "v": "halftone in shadows only",
     "l": "Shadows only"
    },
    {
     "v": "halftone in the background only",
     "l": "Background only"
    },
    {
     "v": "heavy halftone throughout, comic-print feel",
     "l": "Heavy throughout"
    },
    {
     "v": "no halftone, flat only",
     "l": "None"
    }
   ],
   "def": "dot patterns used for shading and to fill larger shapes",
   "cph": "e.g. coarse dots only on cheeks"
  },
  {
   "id": "rk-background",
   "label": "Background",
   "kind": "select",
   "section": "Texture",
   "options": [
    {
     "v": "off-white or cream paper",
     "l": "Off-white / cream paper"
    },
    {
     "v": "a single flat bright colour",
     "l": "Single flat bright colour"
    },
    {
     "v": "pure white",
     "l": "Pure white"
    },
    {
     "v": "hot pink flat fill",
     "l": "Hot pink fill"
    },
    {
     "v": "bright red flat fill",
     "l": "Bright red fill"
    },
    {
     "v": "sky blue flat fill",
     "l": "Sky blue fill"
    }
   ],
   "def": "off-white or cream paper",
   "cph": "e.g. muted lavender paper"
  },
  {
   "id": "rk-layout",
   "label": "Layout",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "centred, badge or sticker-like, often a tight group of characters",
     "l": "Centred badge / sticker"
    },
    {
     "v": "single character mascot, centred",
     "l": "Single mascot, centred"
    },
    {
     "v": "tight group of characters huddled together",
     "l": "Tight character group"
    },
    {
     "v": "scattered cluster, sticker-sheet style",
     "l": "Scattered sticker-sheet"
    },
    {
     "v": "comic panel scene",
     "l": "Comic panel scene"
    }
   ],
   "def": "centred, badge or sticker-like, often a tight group of characters",
   "cph": "e.g. circular emblem with characters in a ring"
  },
  {
   "id": "rk-framing",
   "label": "Framing",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "characters peek over a banner, label or bottom edge",
     "l": "Peeking over a banner / edge"
    },
    {
     "v": "no frame, characters float on the background",
     "l": "No frame, floating"
    },
    {
     "v": "inside a rounded sticker outline",
     "l": "Rounded sticker outline"
    },
    {
     "v": "thick comic-style panel border",
     "l": "Thick panel border"
    }
   ],
   "def": "characters peek over a banner, label or bottom edge",
   "cph": "e.g. bursting out of a torn paper hole"
  },
  {
   "id": "rk-decoration",
   "label": "Decoration",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "small sparkles, stars, motion lines, sweat drops and starburst bursts",
     "l": "Sparkles, stars & bursts"
    },
    {
     "v": "sparkles and stars only",
     "l": "Sparkles & stars only"
    },
    {
     "v": "motion lines and action bursts",
     "l": "Motion lines & bursts"
    },
    {
     "v": "sweat drops and emotion marks",
     "l": "Sweat drops & emotion marks"
    },
    {
     "v": "minimal, almost no decoration",
     "l": "Minimal decoration"
    }
   ],
   "def": "small sparkles, stars, motion lines, sweat drops and starburst bursts",
   "cph": "e.g. tiny floating hearts and music notes"
  },
  {
   "id": "rk-negative-space",
   "label": "Negative Space",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "generous, clean and uncluttered",
     "l": "Generous & clean (signature)"
    },
    {
     "v": "moderate, balanced",
     "l": "Moderate"
    },
    {
     "v": "tight, packed and busy",
     "l": "Tight & busy"
    }
   ],
   "def": "generous, clean and uncluttered",
   "cph": "e.g. empty top, dense cluster at the bottom"
  },
  {
   "id": "rk-use-text",
   "label": "Include Text?",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "no",
     "l": "No"
    },
    {
     "v": "yes",
     "l": "Yes"
    }
   ],
   "def": "no",
   "cph": "e.g. only a tiny signature"
  },
  {
   "id": "rk-title-text",
   "label": "Title Text",
   "kind": "text",
   "section": "Typography",
   "def": "",
   "ph": "e.g. LET'S GO or YUM!"
  },
  {
   "id": "rk-lettering",
   "label": "Lettering Treatment",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "hand-drawn chunky rounded display caps with slight irregularity",
     "l": "Chunky rounded caps"
    },
    {
     "v": "hand-drawn caps sitting inside a starburst",
     "l": "Inside a starburst"
    },
    {
     "v": "hand-drawn caps inside a rounded speech bubble",
     "l": "Inside a speech bubble"
    },
    {
     "v": "lettering on a banner the characters hold",
     "l": "On a held banner"
    }
   ],
   "def": "hand-drawn chunky rounded display caps with slight irregularity",
   "cph": "e.g. wobbly caps with star dots between words"
  }
 ],
 "whimsystamp": [
  {
   "id": "ws-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "a sleepy fox curled in a teacup",
   "ph": "e.g. a sleepy fox curled in a teacup"
  },
  {
   "id": "ws-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "4:5",
     "l": "4:5, Portrait"
    },
    {
     "v": "5:4",
     "l": "5:4, Landscape (wide scenes)"
    },
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    }
   ],
   "def": "4:5",
   "cph": "e.g. 5:7"
  },
  {
   "id": "ws-motif",
   "label": "Optional Motif",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "none — no extra motif",
     "l": "None"
    },
    {
     "v": "a Rapunzel-style long braid",
     "l": "Rapunzel braid"
    },
    {
     "v": "a Red Riding Hood cloak",
     "l": "Red Riding Hood cloak"
    },
    {
     "v": "a starry night backdrop",
     "l": "Starry night"
    },
    {
     "v": "pond reeds and water lilies",
     "l": "Pond reeds"
    },
    {
     "v": "cherry blossom branches",
     "l": "Cherry blossom"
    },
    {
     "v": "floating paper lanterns",
     "l": "Paper lanterns"
    },
    {
     "v": "autumn leaves drifting",
     "l": "Autumn leaves"
    },
    {
     "v": "a crescent moon and small clouds",
     "l": "Crescent moon"
    }
   ],
   "def": "none — no extra motif",
   "cph": "e.g. a trail of footprints in the snow"
  },
  {
   "id": "ws-medium",
   "label": "Medium",
   "kind": "select",
   "section": "Art Style",
   "options": [
    {
     "v": "vintage risograph / woodblock screen-print look",
     "l": "Riso / woodblock print"
    },
    {
     "v": "vintage risograph print, soft and slightly fuzzy",
     "l": "Pure vintage riso"
    },
    {
     "v": "traditional woodblock print, slightly chunky shapes",
     "l": "Pure woodblock"
    },
    {
     "v": "lithograph poster print, fine grain",
     "l": "Lithograph poster"
    },
    {
     "v": "hand-pulled silkscreen on paper",
     "l": "Hand-pulled silkscreen"
    }
   ],
   "def": "vintage risograph / woodblock screen-print look",
   "cph": "e.g. linocut print on hand-made paper"
  },
  {
   "id": "ws-imperfection",
   "label": "Print Imperfection",
   "kind": "select",
   "section": "Art Style",
   "options": [
    {
     "v": "slight off-register print layers, hand-printed wobble, organic edges",
     "l": "Slight off-register (signature)"
    },
    {
     "v": "heavily misregistered layers, vintage misprint feel",
     "l": "Heavy misregister"
    },
    {
     "v": "clean registration, minimal wobble",
     "l": "Clean registration"
    },
    {
     "v": "faded ink with patchy coverage",
     "l": "Faded patchy ink"
    }
   ],
   "def": "slight off-register print layers, hand-printed wobble, organic edges",
   "cph": "e.g. one layer offset, the others perfectly aligned"
  },
  {
   "id": "ws-era",
   "label": "Era Feel",
   "kind": "select",
   "section": "Art Style",
   "options": [
    {
     "v": "mid-century Japanese postage illustration, nostalgic and warm",
     "l": "Mid-century Japanese postage"
    },
    {
     "v": "1950s American commemorative stamp",
     "l": "1950s American commemorative"
    },
    {
     "v": "1960s European fairytale poster",
     "l": "1960s European fairytale"
    },
    {
     "v": "Victorian botanical print",
     "l": "Victorian botanical"
    },
    {
     "v": "1970s storybook illustration",
     "l": "1970s storybook"
    },
    {
     "v": "Edo-period ukiyo-e softness",
     "l": "Edo-period ukiyo-e softness"
    }
   ],
   "def": "mid-century Japanese postage illustration, nostalgic and warm",
   "cph": "e.g. early Soviet children's book print"
  },
  {
   "id": "ws-palette",
   "label": "Palette Combination",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "deep navy, dusty rose, sage and warm cream",
     "l": "Navy, rose, sage & cream"
    },
    {
     "v": "teal, muted mustard, soft lavender and warm cream",
     "l": "Teal, mustard, lavender & cream"
    },
    {
     "v": "sage green, dusty rose, deep navy on warm cream",
     "l": "Sage, rose & navy on cream"
    },
    {
     "v": "muted mustard, teal and deep navy",
     "l": "Mustard, teal & navy"
    },
    {
     "v": "soft lavender, sage and dusty rose",
     "l": "Lavender, sage & rose"
    },
    {
     "v": "deep navy and warm cream only (duotone)",
     "l": "Navy & cream (duotone)"
    },
    {
     "v": "teal, dusty rose, muted mustard and cream",
     "l": "Teal, rose, mustard & cream"
    }
   ],
   "def": "deep navy, dusty rose, sage and warm cream",
   "cph": "e.g. olive, brick and bone with a single mustard accent"
  },
  {
   "id": "ws-color-count",
   "label": "Colour Count",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "3",
     "l": "3 colours"
    },
    {
     "v": "4",
     "l": "4 colours"
    },
    {
     "v": "5",
     "l": "5 colours"
    }
   ],
   "def": "3",
   "cph": "e.g. 2 inks plus a gold metallic accent"
  },
  {
   "id": "ws-bg-tone",
   "label": "Dominant Background Tone",
   "kind": "select",
   "section": "Colour",
   "options": [
    {
     "v": "warm cream / off-white paper",
     "l": "Warm cream paper"
    },
    {
     "v": "soft sage green",
     "l": "Soft sage"
    },
    {
     "v": "dusty rose",
     "l": "Dusty rose"
    },
    {
     "v": "deep navy",
     "l": "Deep navy"
    },
    {
     "v": "soft lavender",
     "l": "Soft lavender"
    },
    {
     "v": "muted mustard",
     "l": "Muted mustard"
    },
    {
     "v": "teal",
     "l": "Teal"
    }
   ],
   "def": "warm cream / off-white paper",
   "cph": "e.g. pale terracotta"
  },
  {
   "id": "ws-grain",
   "label": "Paper Grain",
   "kind": "select",
   "section": "Texture & Linework",
   "options": [
    {
     "v": "visible paper grain and tooth throughout",
     "l": "Visible grain (signature)"
    },
    {
     "v": "heavy textured paper, very tactile",
     "l": "Heavy textured paper"
    },
    {
     "v": "subtle grain, soft and gentle",
     "l": "Subtle gentle grain"
    },
    {
     "v": "smooth paper, minimal grain",
     "l": "Smooth, minimal grain"
    }
   ],
   "def": "visible paper grain and tooth throughout",
   "cph": "e.g. cotton-rag paper with deckled edges"
  },
  {
   "id": "ws-ink",
   "label": "Ink Texture",
   "kind": "select",
   "section": "Texture & Linework",
   "options": [
    {
     "v": "speckled riso ink texture, subtle mottling in flat areas",
     "l": "Speckled riso ink (signature)"
    },
    {
     "v": "heavy speckle, very mottled coverage",
     "l": "Heavy speckle"
    },
    {
     "v": "even matte ink, light mottling",
     "l": "Even matte ink"
    },
    {
     "v": "dry-brush patchy ink, lots of paper showing through",
     "l": "Dry-brush patchy"
    }
   ],
   "def": "speckled riso ink texture, subtle mottling in flat areas",
   "cph": "e.g. ink pools heavier at shape edges"
  },
  {
   "id": "ws-linework",
   "label": "Linework",
   "kind": "select",
   "section": "Texture & Linework",
   "options": [
    {
     "v": "loose hand-drawn outlines, occasionally broken or absent where flat colour shapes do the work",
     "l": "Loose hand-drawn"
    },
    {
     "v": "confident hand-drawn outlines on every shape",
     "l": "Confident on every shape"
    },
    {
     "v": "minimal outlines, shapes mostly defined by colour",
     "l": "Minimal, colour-defined"
    },
    {
     "v": "no outlines at all, pure colour blocks",
     "l": "No outlines, colour only"
    },
    {
     "v": "thin wobbly woodcut-style lines",
     "l": "Thin wobbly woodcut"
    }
   ],
   "def": "loose hand-drawn outlines, occasionally broken or absent where flat colour shapes do the work",
   "cph": "e.g. tapered brush lines, thicker on the subject"
  },
  {
   "id": "ws-focal",
   "label": "Focal Point Placement",
   "kind": "select",
   "section": "Composition & Framing",
   "options": [
    {
     "v": "subject centred, framed by decorative environment",
     "l": "Centred & framed"
    },
    {
     "v": "subject slightly off-centre, environment fills the rest",
     "l": "Slightly off-centre"
    },
    {
     "v": "subject low in the frame, sky above",
     "l": "Low in frame, sky above"
    },
    {
     "v": "subject high in the frame, ground below",
     "l": "High in frame, ground below"
    },
    {
     "v": "subject left, decorative elements right",
     "l": "Left, decoration right"
    }
   ],
   "def": "subject centred, framed by decorative environment",
   "cph": "e.g. subject peering in from one corner"
  },
  {
   "id": "ws-framing-elements",
   "label": "Framing Elements",
   "kind": "select",
   "section": "Composition & Framing",
   "options": [
    {
     "v": "vines and flowers wrapping the scene",
     "l": "Vines & flowers"
    },
    {
     "v": "stars and small bubbles scattered around",
     "l": "Stars & bubbles"
    },
    {
     "v": "scrollwork and decorative flourishes",
     "l": "Scrollwork flourishes"
    },
    {
     "v": "pond reeds and water lilies at the edges",
     "l": "Reeds at the edges"
    },
    {
     "v": "clouds and distant hills as a backdrop",
     "l": "Clouds & distant hills"
    },
    {
     "v": "branches and falling leaves",
     "l": "Branches & falling leaves"
    },
    {
     "v": "grasses, small flowers and pebbles at the base",
     "l": "Grasses at the base"
    },
    {
     "v": "minimal — almost no framing elements",
     "l": "Minimal"
    }
   ],
   "def": "vines and flowers wrapping the scene",
   "cph": "e.g. constellations and tiny shooting stars"
  },
  {
   "id": "ws-negative-space",
   "label": "Negative Space",
   "kind": "select",
   "section": "Composition & Framing",
   "options": [
    {
     "v": "generous, calm, uncluttered",
     "l": "Generous & calm (signature)"
    },
    {
     "v": "moderate, balanced",
     "l": "Moderate balance"
    },
    {
     "v": "tight, densely illustrated edge-to-edge",
     "l": "Tight & dense"
    }
   ],
   "def": "generous, calm, uncluttered",
   "cph": "e.g. open sky above, dense detail below"
  },
  {
   "id": "ws-edge",
   "label": "Stamp Edge",
   "kind": "select",
   "section": "Stamp Frame",
   "options": [
    {
     "v": "classic white perforated / scalloped postage-stamp border on all sides",
     "l": "Classic perforated edge"
    },
    {
     "v": "finely perforated edge, like a modern stamp",
     "l": "Fine modern perforation"
    },
    {
     "v": "boldly scalloped edge, exaggerated and chunky",
     "l": "Bold chunky scallop"
    },
    {
     "v": "straight die-cut edge, no perforations",
     "l": "Straight die-cut"
    },
    {
     "v": "torn-paper edge, rough and uneven",
     "l": "Torn-paper edge"
    }
   ],
   "def": "classic white perforated / scalloped postage-stamp border on all sides",
   "cph": "e.g. wavy zig-zag edge, like a postage label"
  },
  {
   "id": "ws-inner-border",
   "label": "Inner Border Colour",
   "kind": "select",
   "section": "Stamp Frame",
   "options": [
    {
     "v": "thin teal rule just inside the perforations",
     "l": "Teal rule"
    },
    {
     "v": "thin sage green rule just inside the perforations",
     "l": "Sage rule"
    },
    {
     "v": "thin deep navy rule just inside the perforations",
     "l": "Navy rule"
    },
    {
     "v": "thin dusty rose rule just inside the perforations",
     "l": "Rose rule"
    },
    {
     "v": "thin muted mustard rule just inside the perforations",
     "l": "Mustard rule"
    },
    {
     "v": "no inner border rule",
     "l": "No inner border"
    }
   ],
   "def": "thin teal rule just inside the perforations",
   "cph": "e.g. double-line rule, two thin colours"
  },
  {
   "id": "ws-denomination",
   "label": "Denomination Number",
   "kind": "text",
   "section": "Stamp Frame",
   "def": "100",
   "ph": "e.g. 100, 470, ¥80"
  },
  {
   "id": "ws-denom-style",
   "label": "Denomination Style",
   "kind": "select",
   "section": "Stamp Frame",
   "options": [
    {
     "v": "small serif numerals in a contrasting colour, bottom-right corner",
     "l": "Small serif, bottom-right"
    },
    {
     "v": "stylised numerals in a contrasting colour, bottom-left corner",
     "l": "Stylised, bottom-left"
    },
    {
     "v": "bold display numerals, bottom-right corner",
     "l": "Bold display, bottom-right"
    },
    {
     "v": "hand-lettered numerals, slightly wobbly",
     "l": "Hand-lettered wobbly"
    },
    {
     "v": "no denomination",
     "l": "No denomination"
    }
   ],
   "def": "small serif numerals in a contrasting colour, bottom-right corner",
   "cph": "e.g. art-deco numerals in a small circle badge"
  }
 ],
 "diecut": [
  {
   "id": "ds-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "a chunky retro rotary phone",
   "ph": "e.g. a chunky retro rotary phone, or a sleepy cat riding a steam train"
  },
  {
   "id": "ds-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 5:7"
  },
  {
   "id": "ds-props",
   "label": "Props & Doodles",
   "kind": "text",
   "section": "Subject & Format",
   "hint": "optional",
   "def": "",
   "ph": "e.g. tiny kiss marks, a peace-sign hand, green slime puddle"
  },
  {
   "id": "ds-text-present",
   "label": "Include Text?",
   "kind": "select",
   "section": "Text & Lettering",
   "options": [
    {
     "v": "yes",
     "l": "Yes, sticker with lettering"
    },
    {
     "v": "no",
     "l": "No, illustration only"
    }
   ],
   "def": "yes",
   "cph": "e.g. only a tiny tagline at the bottom"
  },
  {
   "id": "ds-text",
   "label": "Text Content",
   "kind": "text",
   "section": "Text & Lettering",
   "def": "",
   "ph": "e.g. CALL ME ANTISOCIAL"
  },
  {
   "id": "ds-lettering-style",
   "label": "Lettering Style",
   "kind": "select",
   "section": "Text & Lettering",
   "options": [
    {
     "v": "mixed",
     "l": "Mixed (script + bubble caps), default"
    },
    {
     "v": "chunky_multicolour_bubble",
     "l": "Chunky multicolour bubble"
    },
    {
     "v": "bouncy_black_cursive",
     "l": "Bouncy black cursive"
    },
    {
     "v": "wobbly_hand_drawn",
     "l": "Wobbly hand-drawn"
    },
    {
     "v": "bold_condensed_sans",
     "l": "Bold condensed sans"
    }
   ],
   "def": "mixed",
   "cph": "e.g. graffiti tag with star dots"
  },
  {
   "id": "ds-lettering-layout",
   "label": "Lettering Layout",
   "kind": "select",
   "section": "Text & Lettering",
   "options": [
    {
     "v": "stacked_centred",
     "l": "Stacked centred"
    },
    {
     "v": "curved_around_subject",
     "l": "Curved around subject"
    },
    {
     "v": "integrated_with_illustration",
     "l": "Integrated with illustration"
    }
   ],
   "def": "stacked_centred",
   "cph": "e.g. diagonal across the top corner"
  },
  {
   "id": "ds-bg",
   "label": "Background Colour",
   "kind": "select",
   "section": "Background & Texture",
   "options": [
    {
     "v": "soft pastel pink",
     "l": "Soft pastel pink"
    },
    {
     "v": "lavender",
     "l": "Lavender"
    },
    {
     "v": "baby pink",
     "l": "Baby pink"
    },
    {
     "v": "mint green",
     "l": "Mint green"
    },
    {
     "v": "sky blue",
     "l": "Sky blue"
    },
    {
     "v": "butter yellow",
     "l": "Butter yellow"
    },
    {
     "v": "hot pink",
     "l": "Hot pink (pop)"
    },
    {
     "v": "coral",
     "l": "Coral (pop)"
    },
    {
     "v": "neon lime green",
     "l": "Neon lime green (pop)"
    }
   ],
   "def": "soft pastel pink",
   "cph": "e.g. pale peach"
  },
  {
   "id": "ds-texture",
   "label": "Texture",
   "kind": "select",
   "section": "Background & Texture",
   "options": [
    {
     "v": "clean_flat_vector",
     "l": "Clean flat vector"
    },
    {
     "v": "subtle_halftone_grain",
     "l": "Subtle halftone grain (kawaii feel)"
    }
   ],
   "def": "clean_flat_vector",
   "cph": "e.g. light paper grain with a print speckle"
  }
 ],
 "cosmicfolk": [
  {
   "id": "pc-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "a sleepy crescent moon with a tiny face",
   "ph": "e.g. a sleepy crescent moon with a tiny face, or a folk-art owl perched on a comet"
  },
  {
   "id": "pc-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "5:7",
     "l": "5:7, Print portrait"
    },
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    }
   ],
   "def": "2:3",
   "cph": "e.g. 5:7"
  },
  {
   "id": "pc-description",
   "label": "Subject Description",
   "kind": "text",
   "section": "Subject & Format",
   "hint": "optional",
   "def": "",
   "ph": "e.g. key features, materials, era, vibe"
  },
  {
   "id": "pc-pose",
   "label": "Pose / Orientation",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "front_view",
     "l": "Front view"
    },
    {
     "v": "3_4_view",
     "l": "3/4 view"
    },
    {
     "v": "side_view",
     "l": "Side view"
    },
    {
     "v": "top_down",
     "l": "Top down"
    },
    {
     "v": "floating",
     "l": "Floating"
    }
   ],
   "def": "front_view",
   "cph": "e.g. tilted back, gazing upward"
  },
  {
   "id": "pc-expression",
   "label": "Expression / Character",
   "kind": "text",
   "section": "Subject & Format",
   "hint": "optional",
   "def": "",
   "ph": "e.g. dreamy half-smile, mischievous, serene"
  },
  {
   "id": "pc-mode",
   "label": "Scene Mode",
   "kind": "select",
   "section": "Scene",
   "options": [
    {
     "v": "spot_illustration",
     "l": "Spot illustration"
    },
    {
     "v": "poster_scene",
     "l": "Poster scene"
    }
   ],
   "def": "spot_illustration",
   "cph": "e.g. centred emblem on a flat field"
  },
  {
   "id": "pc-setting",
   "label": "Setting",
   "kind": "select",
   "section": "Scene",
   "hint": "optional",
   "options": [
    {
     "v": "cosmic_void",
     "l": "Cosmic void"
    },
    {
     "v": "desert_night",
     "l": "Desert night"
    },
    {
     "v": "candy_sky",
     "l": "Candy sky"
    },
    {
     "v": "occult_stage",
     "l": "Occult stage"
    },
    {
     "v": "simple_flat_backdrop",
     "l": "Simple flat backdrop"
    },
    {
     "v": "__none__",
     "l": "none / unspecified"
    }
   ],
   "def": "cosmic_void",
   "cph": "e.g. moonlit tarot-tent interior"
  },
  {
   "id": "pc-props",
   "label": "Props",
   "kind": "text",
   "section": "Scene",
   "hint": "optional, 0-3, comma separated",
   "def": "",
   "ph": "e.g. crescent moon, hand mirror, single tulip"
  },
  {
   "id": "pc-story-beat",
   "label": "Story Beat",
   "kind": "select",
   "section": "Scene",
   "hint": "optional",
   "options": [
    {
     "v": "whimsical",
     "l": "Whimsical"
    },
    {
     "v": "eerie_cute",
     "l": "Eerie cute"
    },
    {
     "v": "magical",
     "l": "Magical"
    },
    {
     "v": "sci_fi_kitsch",
     "l": "Sci-fi kitsch"
    },
    {
     "v": "folkloric",
     "l": "Folkloric"
    },
    {
     "v": "__none__",
     "l": "none / unspecified"
    }
   ],
   "def": "whimsical",
   "cph": "e.g. quiet ritual at midnight"
  },
  {
   "id": "pc-bg-complexity",
   "label": "Background Complexity",
   "kind": "select",
   "section": "Scene",
   "options": [
    {
     "v": "low_to_medium",
     "l": "Low to medium"
    },
    {
     "v": "low",
     "l": "Low"
    },
    {
     "v": "medium",
     "l": "Medium"
    }
   ],
   "def": "low_to_medium",
   "cph": "e.g. low with a single framing motif"
  },
  {
   "id": "pc-motifs-group",
   "label": "Decorative Motifs",
   "kind": "checks",
   "section": "Motifs",
   "hint": "used sparingly, for visual rhythm",
   "items": [
    {
     "k": "sparkly_starbursts",
     "l": "Sparkly starbursts",
     "on": true
    },
    {
     "k": "dot_constellations",
     "l": "Dot constellations",
     "on": true
    },
    {
     "k": "soft_smoke_swirls_or_nebula_ribbons",
     "l": "Smoke swirls / nebula ribbons",
     "on": true
    },
    {
     "k": "simple_beams_or_glow_halation",
     "l": "Beams / glow halation",
     "on": true
    },
    {
     "k": "concentric_circles_or_orbit_dots",
     "l": "Concentric circles / orbit dots",
     "on": true
    },
    {
     "k": "ornate_flamed_border_frame",
     "l": "Ornate flamed border frame",
     "on": false
    }
   ]
  },
  {
   "id": "pc-symmetry",
   "label": "Symmetry",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "loose_symmetry",
     "l": "Loose symmetry"
    },
    {
     "v": "none",
     "l": "None"
    },
    {
     "v": "strong_symmetry",
     "l": "Strong symmetry"
    }
   ],
   "def": "loose_symmetry",
   "cph": "e.g. mirrored left-right, free top-bottom"
  },
  {
   "id": "pc-scale",
   "label": "Scale",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "hero_object_large",
     "l": "Hero object large"
    },
    {
     "v": "object_mid",
     "l": "Object mid"
    },
    {
     "v": "object_small_with_big_negative_space",
     "l": "Object small, big negative space"
    }
   ],
   "def": "hero_object_large",
   "cph": "e.g. small subject low in the frame"
  },
  {
   "id": "pc-type-present",
   "label": "Include Typography?",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "yes",
     "l": "Yes, poster with lettering"
    },
    {
     "v": "no",
     "l": "No, illustration only"
    }
   ],
   "def": "yes",
   "cph": "e.g. only a small maker's mark"
  },
  {
   "id": "pc-type-text",
   "label": "Headline / Text Content",
   "kind": "text",
   "section": "Typography",
   "def": "",
   "ph": "e.g. COSMIC LULLABY"
  },
  {
   "id": "pc-type-style",
   "label": "Lettering Style",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "psychedelic_groovy",
     "l": "Psychedelic groovy"
    },
    {
     "v": "retro_serif_display",
     "l": "Retro serif display"
    },
    {
     "v": "hand_inked_wobbly",
     "l": "Hand-inked wobbly"
    },
    {
     "v": "chunky_rounded_sans",
     "l": "Chunky rounded sans"
    },
    {
     "v": "occult_blackletter_lite",
     "l": "Occult blackletter (lite)"
    }
   ],
   "def": "psychedelic_groovy",
   "cph": "e.g. melted 70s bubble caps"
  },
  {
   "id": "pc-type-placement",
   "label": "Placement / Layout",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "arched_top",
     "l": "Arched across top"
    },
    {
     "v": "banner_bottom",
     "l": "Banner along bottom"
    },
    {
     "v": "stacked_centred",
     "l": "Stacked centred"
    },
    {
     "v": "curved_around_subject",
     "l": "Curved around subject"
    },
    {
     "v": "integrated_with_illustration",
     "l": "Integrated with illustration"
    }
   ],
   "def": "arched_top",
   "cph": "e.g. split across top and bottom"
  },
  {
   "id": "pc-type-color",
   "label": "Text Colour",
   "kind": "select",
   "section": "Typography",
   "options": [
    {
     "v": "near_black",
     "l": "Near black"
    },
    {
     "v": "deep_indigo",
     "l": "Deep indigo"
    },
    {
     "v": "chartreuse_beam_green",
     "l": "Chartreuse beam green"
    },
    {
     "v": "hot_magenta",
     "l": "Hot magenta"
    },
    {
     "v": "buttery_yellow",
     "l": "Buttery yellow"
    },
    {
     "v": "tangerine_orange",
     "l": "Tangerine orange"
    },
    {
     "v": "electric_cyan",
     "l": "Electric cyan"
    },
    {
     "v": "matches_palette",
     "l": "Matches palette"
    }
   ],
   "def": "near_black",
   "cph": "e.g. cream with a magenta drop shadow"
  }
 ],
 "akiramanga": [
  {
   "id": "am-subject",
   "label": "Subject",
   "kind": "textarea",
   "section": "Subject & Format",
   "def": "a round little astronaut on a bulbous retro scooter",
   "ph": "e.g. a round little astronaut on a bulbous retro scooter, or a friendly pod-craft kicking up dust"
  },
  {
   "id": "am-aspect",
   "label": "Aspect Ratio",
   "kind": "select",
   "section": "Subject & Format",
   "options": [
    {
     "v": "1:1",
     "l": "1:1, Square"
    },
    {
     "v": "4:5",
     "l": "4:5, Portrait (Instagram)"
    },
    {
     "v": "5:7",
     "l": "5:7, Print portrait"
    },
    {
     "v": "2:3",
     "l": "2:3, Poster portrait"
    },
    {
     "v": "3:4",
     "l": "3:4, Portrait classic"
    },
    {
     "v": "4:3",
     "l": "4:3, Landscape classic"
    },
    {
     "v": "3:2",
     "l": "3:2, Photo landscape"
    },
    {
     "v": "16:9",
     "l": "16:9, Widescreen"
    },
    {
     "v": "9:16",
     "l": "9:16, Vertical / Story"
    }
   ],
   "def": "1:1",
   "cph": "e.g. 5:7"
  },
  {
   "id": "am-colour-mode",
   "label": "Colour Mode",
   "kind": "select",
   "section": "Colour & Print",
   "options": [
    {
     "v": "full_vintage_colour",
     "l": "Full vintage colour"
    },
    {
     "v": "duotone_yellow_black",
     "l": "Duotone, yellow + black"
    },
    {
     "v": "duotone_red_violet",
     "l": "Duotone, red + violet"
    },
    {
     "v": "blue_monochrome",
     "l": "Blue monochrome"
    }
   ],
   "def": "full_vintage_colour",
   "cph": "e.g. duotone teal + warm brown"
  },
  {
   "id": "am-backdrop",
   "label": "Backdrop",
   "kind": "select",
   "section": "Composition",
   "hint": "optional",
   "options": [
    {
     "v": "none",
     "l": "None, plain cream background"
    },
    {
     "v": "flat_coloured_rectangle",
     "l": "Flat coloured rectangle"
    },
    {
     "v": "hatched_square_panel",
     "l": "Hatched square panel"
    }
   ],
   "def": "none",
   "cph": "e.g. half-tone sunburst panel"
  },
  {
   "id": "am-energy",
   "label": "Motion / Energy",
   "kind": "select",
   "section": "Composition",
   "options": [
    {
     "v": "dynamic_three_quarter_with_motion",
     "l": "Dynamic 3/4 with motion"
    },
    {
     "v": "static_three_quarter",
     "l": "Static 3/4, grounded"
    },
    {
     "v": "head_on_hero_pose",
     "l": "Head-on hero pose"
    },
    {
     "v": "high_speed_action",
     "l": "High-speed action"
    }
   ],
   "def": "dynamic_three_quarter_with_motion",
   "cph": "e.g. mid-jump with comic dust burst"
  }
 ]
};
