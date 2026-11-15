// JSON builders for the original ten styles, carried over from v1.
// They read values through getValue / txt / checks (defined in app.js)
// so the locked style descriptions stay exactly as written.
// ============================================================
// Style 1: Riso Print
// ============================================================

function buildRisoJSON() {
  return {
    style: "Risograph screen-print illustration",
    subject: txt('r-subject') || NO_SUBJECT,
    aspect_ratio: getValue('r-aspect'),
    medium: {
      appearance: "Hand-pulled risograph or silkscreen print on uncoated paper",
      ink_layers: "3 to 4 spot colours, no CMYK process printing",
      registration: "Slight intentional misregistration between colour layers"
    },
    color_palette: {
      approach: "Tight limited palette of 3-4 colours per composition",
      characteristics: "Earthy, slightly desaturated, vintage poster feel",
      combination: getValue('r-palette'),
      background: getValue('r-background')
    },
    linework: {
      primary: "Minimal hard outlines, forms defined by colour blocks",
      internal_detail: "Loose hand-drawn marks, dots, and short strokes inside shapes",
      weight: "Variable, slightly wobbly, never mechanical"
    },
    textures: {
      halftone_dots: "Heavy use of halftone dot patterns for shading and tonal variation, dots visible and chunky",
      grain: "Pervasive paper grain and ink-noise overlay across entire image",
      fills: "Mottled, imperfect, slightly streaky as if ink-rolled",
      edges: "Soft and slightly broken, never crisp vector"
    },
    shape_language: {
      forms: "Bold, simplified, folk-art influenced silhouettes",
      proportions: "Slightly chunky, charmingly off, never anatomically polished",
      details: "Pattern fills (dots, dashes, scales) rather than realistic rendering"
    },
    composition: {
      framing: getValue('r-framing'),
      scene_elements: getValue('r-scene'),
      depth: "Flat, no perspective, layered shapes only",
      balance: "Subject anchored centre to centre-left, decorative elements fill negative space"
    },
    typography: {
      treatment: getValue('r-typo')
    },
    mood: getValue('r-mood'),
    references: "Risograph print collectives, 1960s European children's book illustration, Japanese screen-print posters",
    negative_prompts: [
      "no digital gradients",
      "no 3D rendering",
      "no photorealism",
      "no clean vector edges",
      "no glow or lens effects",
      "no airbrushed shading",
      "no CMYK process colour",
      "no anime line art",
      "no white background unless the cream paper is shown"
    ]
  };
}

// ============================================================
// Style 2: Cosy Painterly Scene
// ============================================================

function buildPainterlyJSON() {
  return {
    style_id: "cozy_painterly_creature_scene",
    subject: txt('p-subject') || NO_SUBJECT,
    setting: getValue('p-setting'),
    time_of_day: getValue('p-time'),
    aspect_ratio: getValue('p-aspect'),
    medium: {
      technique: "digital painting emulating gouache and soft pastel",
      brushwork: "visible painterly strokes, soft edges, slight chalky texture",
      surface: "subtle paper grain, faint dry-brush feel in foliage and skies",
      linework: "minimal to none; forms defined by colour blocks and light"
    },
    rendering: {
      detail_level: "loose impressionistic backgrounds, slightly tighter focal subject",
      edges: "soft, often dissolving into ambient colour",
      shape_language: "rounded, simplified, gently chunky silhouettes",
      finish: "matte, never glossy or airbrushed"
    },
    lighting: {
      mood: "warm, diffused, golden-hour or sun-dappled",
      shadows: "soft, cool-tinted, low contrast",
      highlights: "creamy, desaturated, blended rather than blown out",
      atmosphere: "gentle haze, light atmospheric perspective in distance"
    },
    palette: {
      approach: "harmonious limited palette, naturalistic with pastel leanings",
      emphasis: getValue('p-palette'),
      dominants: ["sage and forest greens", "muted teals", "warm cream", "dusty terracotta", "soft sky blue"],
      accents: ["coral red", "buttery yellow", "lavender", "soft pink"],
      saturation: "medium, never neon; rich shadows balanced by milky highlights",
      avoid: ["pure black", "pure white", "high-gloss gradients", "neon"]
    },
    composition: {
      framing: getValue('p-framing'),
      depth: "clear foreground/midground/background layering with foliage or props framing the subject",
      negative_space: "used generously; sky, walls, or water give the scene room to breathe",
      focal_point: "single creature or small group, integrated naturally into setting"
    },
    mood: {
      tone: getValue('p-mood'),
      energy: "still or gently kinetic, never frantic",
      narrative_feel: "a quiet moment in a wider story, Ghibli-adjacent"
    },
    environment: {
      common_settings: ["overgrown gardens", "village shopfronts", "sunlit interiors", "alpine meadows", "shaded forests", "stone courtyards"],
      props: "lived-in details (plants, books, lanterns, weathered brick, painted wood)",
      weathering: "walls peel, paint chips, stone is mossy; nothing pristine"
    },
    subject_guidance: {
      character_treatment: "stylised but grounded; sits believably in the painted world",
      scale: "small to medium within frame, environment carries equal weight",
      expression: getValue('p-expression')
    },
    negative_prompts: [
      "anime cel-shading",
      "hard black outlines",
      "vector flat illustration",
      "photorealism",
      "3D render look",
      "harsh contrast",
      "saturated neon colours",
      "lens flare or bloom",
      "text or watermarks"
    ]
  };
}

// ============================================================
// Style 3: Cute Whimsical Storybook
// ============================================================

function buildStorybookJSON() {
  return {
    subject: txt('s-subject') || NO_SUBJECT,
    scene: {
      setting: getValue('s-setting'),
      action: getValue('s-action'),
      props: [getValue('s-prop1'), getValue('s-prop2')].filter(p => p !== AUTO_TEXT && p !== 'none'),
      weather: getValue('s-weather')
    },
    composition: {
      camera: "simple 2D illustration, slightly elevated or straight-on view (no dramatic perspective)",
      framing: "center-weighted subject with generous breathing room; large simple shapes",
      depth: "2 to 4 layers max (foreground shapes, main subject, simple background, sky/flat backdrop)",
      readability: "clear silhouette; avoid tiny details; prioritize cute clarity"
    },
    art_style: {
      overall_vibe: "cute, cozy, gentle, wholesome, calm, storybook charm",
      illustration_style: "soft digital painting with simplified shapes, life-sim game sticker/postcard feel",
      shape_language: "chunky rounded forms, soft corners, minimal geometry complexity",
      detail_level: "low-to-medium; only a few key details to sell the idea"
    },
    linework: {
      use_outlines: getValue('s-linework'),
      if_outlines_exist: {
        style: "soft rounded hand-drawn lines",
        color: "warm dark brown or charcoal (never pure black)",
        weight: getValue('s-linework-width')
      },
      edge_treatment: "soft fuzzy edges; slightly airbrushed boundaries (not crisp vector)"
    },
    color_palette: {
      saturation: "softly saturated, never neon",
      contrast: "gentle contrast; avoid harsh blacks and pure whites",
      user_scheme: getValue('s-palette'),
      dominant_tones: ["pastel sky blue", "sage/leaf green", "warm cream", "soft peach", "muted teal"],
      accent_tones: ["warm orange", "buttery yellow", "soft coral", "dusty red"],
      shadow_color_rule: "shadows are tinted (cool or warm), never gray/black"
    },
    lighting_and_shading: {
      lighting: getValue('s-lighting'),
      shading_style: "minimal soft shading; broad airbrushed shadows; no hard cel-shading",
      highlights: "subtle and matte (no gloss), occasional soft bloom on bright areas",
      value_range: "compressed; keep everything gentle and cozy"
    },
    texture_and_finish: {
      surface_texture: "matte, chalky/soft pastel texture with visible grain",
      paper_feel: "subtle paper/canvas tooth across entire image",
      brush_character: "soft dry-brush speckle on edges and in shaded areas",
      noise: "light, even texture; avoid heavy grit or grunge"
    },
    background_rules: {
      background_style: "simple shapes, minimal patterns (dots/leaves/flowers), soft gradients allowed",
      environment_detail: "suggestive, not descriptive; no intricate realism",
      atmosphere: "whimsical; a few floating motifs (raindrops, petals, music notes) if relevant"
    },
    constraints: [
      "no photorealism",
      "no 3D render look",
      "no crisp vector edges",
      "no heavy black outlines",
      "no high-detail micro-textures",
      "keep proportions cute and slightly chibi (big head, small body) if character-like"
    ],
    negative_prompt: [
      "photorealistic",
      "hyperreal",
      "cinematic lighting",
      "sharp focus",
      "hard-edged cel shading",
      "anime lineart",
      "bold black outlines",
      "vector logo style",
      "highly detailed textures",
      "complex perspective",
      "metallic/glossy finish",
      "grunge, dirty, distressed"
    ],
    output: {
      aspect_ratio: getValue('s-aspect'),
      resolution: "high",
      background: "solid or softly textured (no busy scenes)",
      text: "none"
    }
  };
}

// ============================================================
// Style 4: Kawaii Punk Pop
// ============================================================

function buildKawaiiJSON() {
  const motifValue = getValue('k-motifs');
  // Split comma-separated motifs into an array, mirroring the spec's array shape
  const motifArr = motifValue.split(',').map(m => m.trim()).filter(Boolean);

  const useText = getValue('k-use-text');
  const primaryText = txt('k-primary-text');
  const uiValue = getValue('k-ui');

  return {
    style_id: "kawaii_punk_grid",
    subject: txt('k-subject') || NO_SUBJECT,
    format: {
      aspect_ratio: getValue('k-aspect'),
      composition: getValue('k-composition'),
      framing: getValue('k-framing'),
      negative_space: getValue('k-negative-space')
    },
    core_aesthetic: {
      vibe: "Y2K kawaii punk hybrid, cute meets edgy, low-fi indie illustration",
      era_references: ["early 2000s web", "Sanrio", "tattoo flash", "magical girl manga", "zine culture"],
      mood: getValue('k-mood')
    },
    linework: {
      weight: getValue('k-line-weight'),
      color: "black",
      texture: getValue('k-line-texture'),
      consistency: "uniform weight within shapes, slight organic variation at endpoints",
      outline_treatment: getValue('k-outline'),
      corner_style: "rounded, never sharp angles on main shapes"
    },
    color_palette: {
      approach: "limited palette, flat fills, no gradients",
      count: getValue('k-color-count'),
      selected_scheme: getValue('k-scheme'),
      saturation: getValue('k-saturation'),
      fill_style: "flat blocks of colour, no shading except occasional cheek blush circles"
    },
    texture_and_finish: {
      grain_overlay: getValue('k-grain'),
      halftone_dots: getValue('k-halftone'),
      color_registration: "clean",
      highlights: "small white shine marks on rounded objects, hand-placed not rendered"
    },
    background_treatment: {
      type: getValue('k-bg-type'),
      grid_color: "darker tint of background, thin lines",
      grid_density: "medium"
    },
    recurring_motifs: {
      always_consider: [
        "4-point sparkle stars",
        "5-point classic stars",
        "8-point starburst",
        "small circles and bubbles",
        "spirals and squiggles",
        "drippy melting edges",
        "lightning bolts",
        "tiny scattered hearts"
      ],
      selected_motifs: motifArr.length ? motifArr : [motifValue],
      motif_placement: "scattered around subject, varying sizes, fills negative space without crowding"
    },
    character_features_if_present: {
      proportions: "chibi, large head to small body, 2-3 head heights tall",
      eyes: getValue('k-eyes'),
      hair: getValue('k-hair'),
      expression: getValue('k-expression'),
      cheek_blush: "small oval pink or red patches, hand-placed",
      mouth: "small, simple, often single line or tiny grin with visible teeth"
    },
    typography: {
      use_text: useText,
      primary_text: primaryText || null,
      selected_typography: getValue('k-typo-style'),
      text_decoration: "stars or sparkles inside or around letterforms where it fits, never crowded"
    },
    ui_elements_optional: {
      include: uiValue === "none" ? "no" : "yes",
      element: uiValue === "none" ? null : uiValue
    },
    what_to_avoid: [
      "photorealism or rendered 3D",
      "soft airbrush gradients",
      "complex perspective or vanishing points",
      "AI-generated chrome or glossy effects",
      "muddy mixed colours, palette stays clean and separated",
      "Disney or Pixar proportions",
      "generic emoji-style faces",
      "lens blur or depth of field",
      "watercolour bleeds",
      "overly clean vector look without any grain"
    ],
    final_instruction: "Render as a single flat illustration with the above constraints. Treat the canvas like a sticker sheet or zine page rather than a window into space. Every element should feel hand-placed by an illustrator with a confident style, not arranged by a layout engine."
  };
}

// ============================================================
// Style 5: Retro Pop Poster
// ============================================================

// Palette preset → hex mapping. Lets the user pick a named preset
// while still outputting concrete colour values in the JSON.
const RETROPOP_PALETTES = {
  classic_riso:     { background: "#F2EDD7", primary: "#1E3A8F", accent: "#E63B2E", highlight: "#FFFFFF" },
  soft_pastel:      { background: "#F8E8E0", primary: "#2D4A87", accent: "#F4A6A0", highlight: "#FFFFFF" },
  midnight:         { background: "#0F0F1E", primary: "#FFD43B", accent: "#E63946", highlight: "#FFFFFF" },
  mint_cherry:      { background: "#F0F4EC", primary: "#2E7D5B", accent: "#D7263D", highlight: "#FFFFFF" },
  ocean_sun:        { background: "#FDF6E3", primary: "#0A4D8C", accent: "#F39C12", highlight: "#FFFFFF" },
  monochrome_blue:  { background: "#F2EDD7", primary: "#1E3A8F", accent: "#5B7BC7", highlight: "#FFFFFF" }
};

function buildRetroPopJSON() {
  // Read motif checkbox states
  const motifs = checks('rp-motifs-group');

  // Resolve palette preset to actual hex values (or leave as custom string)
  const presetKey = getValue('rp-palette-preset');
  const paletteHex = RETROPOP_PALETTES[presetKey] || {
    note: `Custom preset: ${presetKey}. Specify hex values to taste.`
  };

  const mascotChoice = getValue('rp-mascot');
  const mascotPresent = mascotChoice !== 'no';

  const secondaryLang = getValue('rp-secondary-lang');
  const subhead = txt('rp-subhead-text');
  const headlineText = txt('rp-headline-text');
  const badgeText = txt('rp-badge-text');
  const badgeShape = getValue('rp-badge-shape');

  return {
    style_prompt: {
      meta: {
        name: "Retro Riso Poster",
        description: "Vintage screenprint / risograph poster aesthetic blending 1950s American advertising with Japanese/Korean kitsch. Halftone-heavy, limited palette, character-driven, paper-textured.",
        version: "1.0"
      },
      subject: {
        primary: txt('rp-subject') || NO_SUBJECT,
        mascot_present: mascotPresent,
        mascot_description: mascotPresent ? mascotChoice : null,
        scene_context: getValue('rp-scene')
      },
      composition: {
        aspect_ratio: getValue('rp-aspect'),
        layout: getValue('rp-layout'),
        depth: "flat_2d_no_perspective",
        negative_space: getValue('rp-negative-space'),
        decorative_motifs: motifs
      },
      linework: {
        weight: getValue('rp-line-weight'),
        style: getValue('rp-line-style'),
        stroke_treatment: getValue('rp-stroke-treatment'),
        outline_color: "deep_blue",
        interior_detail_density: "medium"
      },
      color: {
        palette_mode: getValue('rp-palette-mode'),
        palette_preset_name: presetKey,
        palette: paletteHex,
        color_application: {
          fill_strategy: "flat_blocks_with_halftone_shading",
          registration: getValue('rp-registration')
        }
      },
      texture: {
        halftone: {
          enabled: getValue('rp-halftone-size') !== "none",
          dot_size: getValue('rp-halftone-size'),
          angle: "45deg",
          coverage: "shadows_and_midtones"
        },
        paper_grain: {
          enabled: getValue('rp-paper-grain') !== "none",
          intensity: getValue('rp-paper-grain'),
          color_tint: "warm_cream"
        },
        print_imperfections: {
          ink_spread: "slight",
          vintage_wear: getValue('rp-vintage-wear')
        }
      },
      typography: {
        headline: {
          text: headlineText || null,
          font_style: getValue('rp-headline-font'),
          case: "uppercase",
          color: "primary",
          size: "extra_large",
          treatment: getValue('rp-headline-treatment')
        },
        subheading: {
          text: subhead || null,
          font_style: "italic_script_handwritten",
          color: "accent",
          size: "medium",
          position: "below_headline_offset_right"
        },
        text_rule: (headlineText || subhead || badgeText) ? "render only the text given here, spelled exactly" : "no lettering anywhere in the image",
        badges_and_callouts: (badgeShape === "none" || !badgeText) ? [] : [
          {
            text: badgeText || null,
            shape: badgeShape,
            fill: "accent",
            text_color: "highlight",
            rotation_degrees: -15
          }
        ],
        secondary_language: {
          enabled: secondaryLang !== "none",
          script: secondaryLang === "none" ? null : secondaryLang,
          purpose: "decorative_authenticity"
        }
      },
      mood_and_era: {
        era_reference: getValue('rp-era'),
        mood_keywords: ["playful", "nostalgic", "bold", "kitschy", "handcrafted"],
        tone: "cheerful_commercial"
      },
      rendering: {
        output_format: "poster_illustration",
        finish: "matte_printed",
        border: getValue('rp-border')
      },
      negative_prompt: [
        "photorealistic",
        "3d_render",
        "gradient_shading",
        "drop_shadows_realistic",
        "muted_palette",
        "blurry",
        "ai_typography_artefacts",
        "modern_minimalist_flat_vector",
        "corporate_clean"
      ]
    }
  };
}

// ============================================================
// Style 6: Retro Kawaii
// ============================================================

function buildRetroKawaiiJSON() {
  const colourMode = getValue('rk-color-mode');
  const useText = getValue('rk-use-text');
  const titleText = txt('rk-title-text');
  const accent = getValue('rk-accent');

  // Build the colour block, only including the branch relevant to the chosen mode
  const colour = {
    mode: colourMode,
    grain: getValue('rk-grain'),
    halftone: getValue('rk-halftone'),
    background: getValue('rk-background')
  };

  if (colourMode === 'monochrome') {
    colour.monochrome = {
      fills: "pure black on a cream or off-white background",
      shading: "halftone dot screens for any midtones",
      accent: accent === 'none' ? "none" : `single spot colour: ${accent}`
    };
  } else {
    // full_colour (or custom mode) — palette applies
    colour.full_colour = {
      fills: "flat, fully saturated, no gradients or shading",
      palette: getValue('rk-palette'),
      outline: "always black"
    };
  }

  return {
    subject: txt('rk-subject') || NO_SUBJECT,
    aspect_ratio: getValue('rk-aspect'),
    style_name: "Cute hand-drawn riso-sticker illustration",
    description: "A playful, naive cartoon style: thick wobbly black outlines, ultra-simplified kawaii characters, flat bright colour or black-and-white halftone, all sitting on a grainy printed paper texture. Reads like a screen-printed sticker or zine cover.",
    linework: {
      weight: getValue('rk-line-weight'),
      quality: "hand-drawn with a slight organic wobble, never perfectly straight or vector-clean",
      ends: "rounded line caps and rounded corners on every shape",
      edges: "subtly rough and inky, as if printed rather than digital"
    },
    character_and_form_design: {
      shapes: "rounded, blobby, chunky silhouettes with no fine detail",
      limbs: "short stubby arms and legs, mitten paws or hands with no separate fingers",
      faces: getValue('rk-face'),
      cheeks: "occasional small blush marks",
      everything_has_a_face: getValue('rk-faces-everywhere'),
      proportions: "oversized heads, tiny bodies, cute over realistic"
    },
    colour: colour,
    texture: {
      print_feel: "risograph / screenprint aesthetic",
      grain: getValue('rk-grain'),
      halftone: getValue('rk-halftone'),
      background: getValue('rk-background')
    },
    composition: {
      layout: getValue('rk-layout'),
      framing: getValue('rk-framing'),
      decoration: getValue('rk-decoration'),
      negative_space: getValue('rk-negative-space')
    },
    typography: {
      use_text: useText,
      title_text: useText === 'no' ? null : (titleText || null),
      lettering: getValue('rk-lettering'),
      treatment: "can sit inside a starburst or rounded speech bubble"
    },
    mood: "joyful, childlike, friendly, retro-cartoon meets modern streetwear sticker",
    avoid: [
      "thin, clean or vector-perfect lines",
      "gradients, soft shading, realistic lighting",
      "3D, photographic or painterly rendering",
      "detailed faces, fingers, or anatomy",
      "muted, desaturated or pastel-heavy palettes",
      "smooth digital surfaces with no grain"
    ]
  };
}

// ============================================================
// Style 7: Whimsy Vintage Stamp
// ============================================================

function buildWhimsyStampJSON() {
  const motif = getValue('ws-motif');
  const denomNumber = txt('ws-denomination');
  const denomStyle = getValue('ws-denom-style');

  return {
    prompt_name: "Vintage Pokémon-Style Postage Stamp",
    subject: txt('ws-subject') || NO_SUBJECT,
    subject_treatment: {
      form: "simplified, soft-rounded, slightly chibi proportions with gentle expressions",
      linework: getValue('ws-linework'),
      personality: "charming, calm, storybook-cute; never sharp, edgy or photoreal",
      optional_motifs: motif.startsWith('none') ? null : motif
    },
    art_style: {
      medium: getValue('ws-medium'),
      rendering: "flat blocks of colour, no smooth gradients, minimal shading",
      imperfection: getValue('ws-imperfection'),
      era_feel: getValue('ws-era')
    },
    colour_palette: {
      approach: `limited ${getValue('ws-color-count')} colours per image, desaturated and slightly faded`,
      selected_combination: getValue('ws-palette'),
      dominant_background: getValue('ws-bg-tone'),
      rule: "one dominant background tone, characters picked out in 2 to 3 contrasting muted hues"
    },
    texture: {
      paper: getValue('ws-grain'),
      ink: getValue('ws-ink'),
      finish: "matte, tactile, printed-on-stock quality"
    },
    composition: {
      format: "single postage stamp, orientation per aspect ratio",
      focal_point: getValue('ws-focal'),
      framing_elements: getValue('ws-framing-elements'),
      negative_space: getValue('ws-negative-space')
    },
    stamp_frame: {
      edge: getValue('ws-edge'),
      inner_border: getValue('ws-inner-border'),
      denomination: denomStyle === 'no denomination' ? null : {
        number: denomNumber || null,
        style: denomStyle
      }
    },
    avoid: [
      "photorealism",
      "3D rendering or glossy CGI",
      "smooth digital gradients",
      "harsh saturated neon colours",
      "busy backgrounds or heavy detail",
      "modern flat-vector / corporate illustration look",
      "visible AI-glossy sheen"
    ],
    output: {
      aspect_ratio: getValue('ws-aspect'),
      background: "the stamp sits on plain white"
    }
  };
}

// ============================================================
// Style 8: Cute Die-Cut Sticker
// ============================================================

function buildDieCutJSON() {
  const subject = txt('ds-subject') || NO_SUBJECT;
  const textPresent = getValue('ds-text-present') === 'yes';
  const textContent = txt('ds-text');
  const props = txt('ds-props');
  const aspect = getValue('ds-aspect');
  const lettering = getValue('ds-lettering-style');
  const layout = getValue('ds-lettering-layout');
  const bg = getValue('ds-bg');
  const texture = getValue('ds-texture');

  // Humanize underscored toggle values for the flat_prompt
  const humanize = (v) => v.replace(/_/g, ' ');

  // Map layout to a natural phrase used in the flat prompt
  const layoutPhrase = ({
    stacked_centred: "stacked above",
    curved_around_subject: "curved around",
    integrated_with_illustration: "woven into"
  })[layout] || humanize(layout);

  // Build the flat plain-text prompt with user values slotted in.
  // If no text is wanted, the lettering portion is dropped entirely.
  const textChunk = textPresent && textContent
    ? `playful ${humanize(lettering)} text reading "${textContent}" ${layoutPhrase} the artwork, `
    : "";

  const flatPrompt =
    `Die-cut vinyl sticker of ${subject}, ` +
    `flat 2D cartoon vector illustration with bold uniform black outlines and simple cel shading, ` +
    `candy-coloured pastel palette (lavender, baby pink, mint, sky blue, butter yellow) with bright hot pink and neon lime pops, ` +
    textChunk +
    (props ? `${props} as small accents, ` : "") +
    `scattered sparkles stars and hearts as accents, ` +
    `thick offset white bubbly die-cut border around the silhouette, ` +
    `centred composition on a flat ${bg} background, ` +
    `cheeky and cute, no photorealism, no gradients, no busy background, ${aspect}.`;

  return {
    _usage: "Edit ONLY the 'subject' block and the toggles marked EDITABLE. Leave the 'style_lock' block alone to keep results consistent. The 'flat_prompt' string at the bottom is an auto-written plain-text version for tools that don't accept JSON (Midjourney, DALL-E, etc.).",
    format: "die-cut vinyl sticker, single isolated design centred on a flat solid-colour background, generous empty margin, no scene or environment",
    subject: {
      main: subject,
      text: textPresent ? (textContent || null) : null,
      text_present: textPresent,
      props_and_doodles: props || null
    },
    editable_toggles: {
      lettering_style: lettering,
      lettering_layout: layout,
      background_colour: bg,
      texture: texture
    },
    style_lock: {
      _comment: "DO NOT EDIT — this is what makes everything look like one sticker set.",
      rendering: "flat 2D vector illustration, cartoon/kawaii sticker aesthetic, no 3D, no photorealism, no perspective depth",
      linework: "bold uniform black outlines on every illustrated element, clean confident strokes, slightly rounded corners",
      shading: "simple cel shading with one or two flat tone steps, small soft highlight shapes, no gradients or mesh blends",
      die_cut_border: "thick offset white sticker outline that hugs the silhouette in a soft bubbly cloud-like contour; optional thin coloured keyline just inside or outside the white",
      colour_palette: {
        pastels: ["lavender", "baby pink", "mint green", "sky blue", "butter yellow"],
        pops: ["hot pink", "neon lime green", "coral"],
        rule: "high but soft saturation, candy-coloured, friendly"
      },
      accents: "scatter small decorative elements around the design: 4-point sparkles, little stars, hearts, dots, occasional motion lines; keep them light and balanced, never cluttered",
      composition: "centred and balanced, illustration as the focal point with text wrapping or stacking around it, comfortable breathing room inside the die-cut shape",
      mood: "playful, cheeky, warm, relatable; sweet visuals often paired with a snarky or empowering message"
    },
    negative: [
      "photorealism",
      "3D render",
      "gradient meshes or airbrushed shading",
      "busy or detailed backgrounds",
      "drop shadows on the whole sticker (flat only)",
      "thin or inconsistent linework",
      "muddy or desaturated colours",
      "watermarks, signatures, extra logos"
    ],
    output: {
      aspect_ratio: aspect,
      background: "flat solid colour, fully visible margin around the sticker"
    },
    flat_prompt: flatPrompt
  };
}

// ============================================================
// Style 9: Psychadelic Cosmic Folk-Art
// ============================================================

function buildCosmicFolkJSON() {
  const name = txt('pc-subject') || NO_SUBJECT;
  const description = txt('pc-description');
  const pose = getValue('pc-pose');
  const expression = txt('pc-expression');

  const mode = getValue('pc-mode');

  let setting = getValue('pc-setting');
  if (setting === '__none__') setting = null;

  // Props: comma-separated → clean array, capped at 3 simple props per the schema
  const props = txt('pc-props')
    .split(',')
    .map(p => p.trim())
    .filter(Boolean)
    .slice(0, 3);

  let storyBeat = getValue('pc-story-beat');
  if (storyBeat === '__none__') storyBeat = null;

  const bgComplexity = getValue('pc-bg-complexity');

  // Decorative motifs: collect only the checked pills, in panel order
  const motifs = checkedList('pc-motifs-group');

  const symmetry = getValue('pc-symmetry');
  const scale = getValue('pc-scale');

  // Typography: optional. Toggled off → the whole block is null so Gemini
  // isn't told to letter a poster the user wanted wordless.
  const typePresent = getValue('pc-type-present') === 'yes';
  const typeText = txt('pc-type-text');
  const typography = typePresent
    ? {
        text: typeText || null,
        lettering_style: getValue('pc-type-style'),
        placement: getValue('pc-type-placement'),
        color: getValue('pc-type-color')
      }
    : null;

  // Output background tracks the chosen scene mode
  const outputBackground = mode === 'poster_scene' ? 'poster_scene' : 'simple_flat_backdrop';

  return {
    task: "generate_image",
    version: "1.0",
    input: {
      object: {
        name: name,
        description: description || null,
        pose_or_orientation: pose,
        expression_or_character: expression || null
      },
      scene: {
        mode: mode,
        setting: setting,
        props: props,
        motifs: motifs,
        background_complexity: bgComplexity,
        story_beat: storyBeat
      },
      composition: {
        aspect_ratio: getValue('pc-aspect'),
        framing: "poster_like_centered_with_generous_breathing_room",
        camera: "flat_or_slightly_elevated_minimal_perspective",
        layers: "2_to_4_layers_max",
        silhouette_priority: "very_high",
        symmetry: symmetry,
        scale: scale
      },
      typography: typography
    },
    style_profile: {
      name: "Retro Cosmic Psychedelic Gouache Poster",
      core_vibe: [
        "mid_century_kitsch_meets_occult_fairytale",
        "psychedelic_shapes_and_candy_neon_accents",
        "storybook_poster_graphic_clarity",
        "whimsical_eerie_cute_balance"
      ],
      shape_language: {
        forms: "chunky_simplified_organic_shapes",
        edges: "slightly_soft_with_handmade_wobble",
        detail_density: "low_to_medium",
        micro_detail: "use_dots_stars_and_simple_patterns_not_realistic_texture"
      },
      linework: {
        presence: "minimal_or_selective",
        style: "hand_inked_slightly_wobbly",
        color: "near_black_or_deep_indigo",
        rule: "only_outline_key_silhouette_or_decorative_frame_never_everything"
      },
      color_palette: {
        strategy: "limited_base_plus_punchy_accents",
        bases: ["dusty_pink", "lavender", "deep_violet", "midnight_black", "forest_green"],
        accents: ["chartreuse_beam_green", "hot_magenta", "buttery_yellow", "tangerine_orange", "electric_cyan"],
        contrast_rule: "high_contrast_shapes_with_clean_color_blocks",
        avoid: ["muddy_browns", "realistic_skin_tones", "photographic_color_grading"]
      },
      shading_and_light: {
        lighting: "dreamy_ambient_glow_not_realistic",
        shading: "two_tone_blocks_plus_soft_halation",
        texture_shading: "speckle_grain_and_chalky_stipple",
        special_fx: [
          "soft_bloom_around_lights",
          "airbrushed_halos",
          "beam_cones_with_grain_falloff"
        ],
        shadow_rule: "no_hard_realistic_cast_shadows_unless_stylized_simple_shapes"
      },
      texture_and_finish: {
        medium_feel: "gouache_screenprint_pastel_hybrid",
        grain: "fine_speckle_overall",
        paper: "subtle_matte_paper_tooth",
        brush_character: "visible_soft_brush_streaks_in_background_swirls"
      },
      iconography_rules: [
        "use_starbursts_and_dots_as_visual_rhythm",
        "prefer_black_or_deep_indigo_silhouettes_for_figures/creatures",
        "decorate_with_simple_patterns: dots, rings, zigzags, scallops",
        "keep_every_element_readable_from_across_the_room"
      ]
    },
    output: {
      format: "png",
      resolution: "high",
      background: outputBackground,
      transparent_background: false,
      clean_edges: "yes_but_not_vector_crisp",
      final_pass: [
        "add_subtle_grain_overlay",
        "add_soft_bloom_on_highlights",
        "ensure_color_blocks_are_flat_and_bold"
      ]
    },
    negative_prompt: [
      "photorealistic",
      "hyperreal",
      "3d_render",
      "cgi",
      "highly_detailed_textures",
      "realistic_lighting",
      "realistic_depth_of_field",
      "lens_flare_photography",
      "ultra_sharp_vector_edges",
      "busy_background_clutter",
      "complex_perspective",
      "tiny_fussy_detail",
      "metallic_glossy_finish"
    ],
    strict_style_checks: [
      "Does it read as flat poster art at a glance?",
      "Are shapes chunky and simplified with minimal perspective?",
      "Is there visible speckle/chalk grain (not photo noise)?",
      "Are starbursts/dots/ornamental motifs used sparingly but clearly?",
      "Are colors bold with a limited base + neon/candy accents?"
    ]
  };
}

// ============================================================
// Style 10: Retro Akira Manga
// ============================================================

function buildAkiraMangaJSON() {
  const subject = txt('am-subject')
    || NO_SUBJECT;
  const aspect = getValue('am-aspect');
  const colourMode = getValue('am-colour-mode');

  // Backdrop: "none" → null (plain cream), preset → descriptive phrase, custom → as typed
  const backdropChoice = getValue('am-backdrop');
  const backdropMap = {
    none: null,
    flat_coloured_rectangle: "subject placed over a flat coloured rectangle",
    hatched_square_panel: "subject placed over a hatched square panel"
  };
  const optionalBackdrop = (backdropChoice in backdropMap) ? backdropMap[backdropChoice] : backdropChoice;

  // Energy: preset → full descriptive string, custom → as typed
  const energyChoice = getValue('am-energy');
  const energyMap = {
    dynamic_three_quarter_with_motion: "Dynamic three-quarter angle with implied motion — dust clouds, speed lines, slight tilt",
    static_three_quarter: "Calm three-quarter angle, grounded and still, no motion lines",
    head_on_hero_pose: "Head-on heroic pose, centred and symmetrical, confident stance",
    high_speed_action: "High-speed action — heavy dust clouds, bold speed lines, strong diagonal tilt"
  };
  const energy = (energyChoice in energyMap) ? energyMap[energyChoice] : energyChoice;

  return {
    style_id: "retro_manga_adventure",
    subject: subject,
    art_direction: {
      lineage: "Hand-inked late-1970s–1980s shonen manga color illustration in the vein of Akira Toriyama's color plates; vintage printed-page feel",
      linework: {
        outline: "Bold, confident black ink with deliberate weight variation — heavier on outer silhouettes, finer on interior detail",
        quality: "Clean and controlled, every line intentional, no sketchiness",
        detail_density: "Stark contrast between simple rounded organic forms and densely greebled mechanical surfaces",
        shading: "Fine parallel hatching for shadow and metal texture rather than soft gradients; spot blacks for depth"
      },
      form_language: {
        characters: "Rounded, soft, slightly chibi proportions — oversized heads, compact bodies, stubby limbs",
        faces: "Minimal but hugely expressive — dot or large round eyes, wide open mouths, comic sweat-drop, blush dots on cheeks",
        machines: "Bulbous, friendly, retro-futuristic — vintage car silhouettes (Beetle/Mini), scooters, pod-craft; chrome, rivets, treads, exhaust pipes, antennae, mesh grilles",
        overall: "Playful, toy-like solidity; everything feels tactile and well-engineered"
      },
      color: {
        palette: "Muted faded vintage tones — sage and olive greens, dusty terracotta and burnt orange, cream, tan, soft teal, warm off-white",
        application: "Flat fills, minimal gradient, color blocked cleanly inside the ink lines",
        saturation: "Gently desaturated, never neon — reads like aged risograph or offset print",
        mode_options: "Can alternatively render as limited duotone (e.g. yellow+black, red+violet, or blue monochrome) like a single-ink manga color page",
        render_mode: colourMode
      },
      rendering_texture: {
        surface: "Subtle paper grain and faint print texture across the whole image",
        finish: "Looks scanned from a vintage manga volume — slight warmth, soft edges, light printing imperfection",
        highlights: "Simple white shape highlights on glass, metal, and goggles"
      },
      composition: {
        framing: "Single subject or tight small group isolated on a plain cream background",
        optional_backdrop: optionalBackdrop,
        energy: energy,
        negative_space: "Generous empty background; the subject is the clear hero"
      },
      mood: "Whimsical, adventurous, good-humored, nostalgic — retro Saturday-morning sci-fi warmth"
    },
    technical_specs: {
      medium: "ink and flat color illustration, vintage manga color plate",
      aspect_ratio: aspect
    },
    negative_prompt: "3D render, photorealism, soft airbrush gradients, glossy modern anime cel-shading, lens flare, neon colors, gritty realism, sketchy unfinished lines, outline glow, plastic CGI look"
  };
}

