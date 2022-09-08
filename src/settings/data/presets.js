export default [
  {
    name: "Office",
    look: {
      title: "Queen",
      texture: "assets/textures/makeup_queen.png",
    },
    morphs: {
      nose: { strength: 0.49 },
      lips: { strength: 0.33 },
    },
    faceMakeup: {
      highlighter: {
        color: "0.93 0.92 0.92 0.40",
        enabled: true,
      },
      blushes: {
        color: "0.79 0.43 0.44 0.50",
        enabled: true,
      },
    },
    softlight: {
      strength: 0.31,
    },
    hair: {
      enabled: true,
      color: ["0.95 0.08 0.08 1.00"],
    },
    lipstick: {
      enabled: true,
      color: "0.25 0.16 0.18 0.19",
    },
    lipstickParams: {
      brightness: { value: 0.8 },
      saturation: { value: 0.2 },
      shineIntensity: { value: 0 },
      shineBleeding: { value: 0 },
      shineScale: { value: 0 },
      glitterIntensity: { value: 0 },
      glitterBleeding: { value: 0 },
      glitterGrain: { value: 0 },
    },
    background: {
      texture: "assets/textures/bg_office.jpeg",
      contentMode: "fill",
      transparency: 0,
      rotation: 0,
      scale: 1,
    },
    lut: {
      title: "Norway",
      texture: "assets/textures/lut_norway.png",
    },
  },
  {
    name: "Flowers",
    faceMakeup: {
      highlighter: {
        color: "0.92 0.91 0.91 0.40",
        enabled: true,
      },
      blushes: {
        color: "0.88 0.48 0.49 0.50",
        enabled: true,
      },
    },
    eyesMakeup: {
      eyeshadow: {
        color: "0.05 0.05 0.06 0.76",
        enabled: true,
      },
    },
    eyelashes: {
      color: "0.16 0.16 0.16 1.00",
      enabled: true,
    },
    hair: {
      enabled: true,
      color: ["0.12 0.12 0.47 1.00"],
    },
    background: {
      texture: "assets/textures/bg_flowers.jpeg",
      contentMode: "fill",
      transparency: 0.13,
      rotation: 177,
      scale: 1,
    },
  },
  {
    name: "Fall",
    morphs: {
      face: { strength: 0.58 },
      nose: { strength: 0.65 },
      lips: { strength: 0.56 },
    },
    hair: {
      enabled: true,
      color: ["1.00 0.22 0.00 1.00"],
    },
    lut: {
      title: "Byers",
      texture: "assets/textures/lut_byers.png",
    },
  },
  {
    name: "Winter",
    look: {
      title: "Dolly",
      texture: "assets/textures/makeup_dolly.png",
    },
    hair: {
      enabled: true,
      color: ["0.25 0.05 0.98 1.00"],
    },
    lipstick: {
      enabled: true,
      color: "0.15 0.06 0.91 0.80",
    },
    lipstickParams: {
      brightness: { value: 1 },
      saturation: { value: 1 },
      shineIntensity: { value: 0 },
      shineBleeding: { value: 0 },
      shineScale: { value: 0 },
      glitterIntensity: { value: 0 },
      glitterBleeding: { value: 0 },
      glitterGrain: { value: 0 },
    },
  },
  {
    name: "Black and white",
    faceMakeup: {
      blushes: {
        color: "0.62 0.20 0.27 0.50",
        enabled: true,
      },
    },
    eyesMakeup: {
      eyeshadow: {
        color: "0.04 0.04 0.04 0.76",
        enabled: true,
      },
    },
    softlight: {
      strength: 0.67,
    },
    hair: {
      enabled: true,
      color: ["1.00 0.00 0.00 1.00"],
    },
    background: {
      texture: "assets/textures/bg_neon.png",
      contentMode: "fill",
      transparency: 0,
      rotation: 0,
      scale: 1,
    },
    lut: {
      title: "Gray",
      texture: "assets/textures/lut_gray.png",
    },
  },
  {
    name: "Sepia",
    faceMakeup: {
      highlighter: {
        color: "0.93 0.92 0.92 0.40",
        enabled: true,
      },
      blushes: {
        color: "0.79 0.43 0.44 0.50",
        enabled: true,
      },
    },
    eyesMakeup: {
      eyeshadow: {
        color: "0.64 0.11 0.64 0.76",
        enabled: true,
      },
    },
    hair: {
      enabled: true,
      color: ["0.90 0.11 0.90 1.00"],
    },
    lut: {
      title: "Paladin",
      texture: "assets/textures/lut_paladin.png",
    },
  },
]
