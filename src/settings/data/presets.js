
export default [
  {
    name: "50%",
    // look: {
    //   title: "Queen",
    //   texture: "assets/textures/makeup_queen.png",
    // },
    morphs: {
      face: { strength: 0.50 },
      nose: { strength: 0.50 },
      lips: { strength: 0.50 },
      eyes: { strength: 0.50 },
      //teethWhitening: { strength: 0.50 }
    },
    teethWhitening: { strength: 0.50 },
    softlight: { strength: 0.50 },
    eyes: { 
      flare: {strength: 0.5},
      whitening: {strength: 0.5} 
    },  
    skin: { softening: {strength: 0.5} },
    

//     Eyes.flare(0.5);
// Eyes.whitening(0.5);
// FaceMorph.face(0.5);
// FaceMorph.nose(0.5);
// FaceMorph.eyes(0.5);
// FaceMorph.lips(0.5);
// Skin.softening(0.5);
// Softlight.strength(0.5);

    // faceMakeup: {
    //   highlighter: {
    //     color: "0.93 0.92 0.92 0.40",
    //     enabled: true,
    //   },
    //   blushes: {
    //     color: "0.79 0.43 0.44 0.50",
    //     enabled: true,
    //   },
    // },
    // softlight: {
    //   strength: 0.31,
    // },
    // hair: {
    //   enabled: true,
    //   color: ["0.95 0.08 0.08 1.00"],
    // },
    // lipstick: {
    //   enabled: true,
    //   color: "0.25 0.16 0.18 0.19",
    // },
    // lipstickParams: {
    //   brightness: { value: 0.8 },
    //   saturation: { value: 0.2 },
    //   shineIntensity: { value: 0 },
    //   shineBleeding: { value: 0 },
    //   shineScale: { value: 0 },
    //   glitterIntensity: { value: 0 },
    //   glitterBleeding: { value: 0 },
    //   glitterGrain: { value: 0 },
    // },
    // background: {
    //   texture: "assets/textures/bg_office.jpeg",
    //   contentMode: "fill",
    //   transparency: 0,
    //   rotation: 0,
    //   scale: 1,
    // },
    // lut: {
    //   title: "Norway",
    //   texture: "assets/textures/lut_norway.png",
    // },
  },
  {
    name: "100%",
    morphs: {
      face: { strength: 1 },
      nose: { strength: 1 },
      lips: { strength: 1 },
      eyes: { strength: 1 },
      //teethWhitening: { strength: 0.50 }
    },
    teethWhitening: { strength: 1 },
    softlight: { strength: 1 },
    eyes: { 
      flare: {strength: 1},
      whitening: {strength: 1} 
    },  
    skin: { softening: {strength: 1} },
  },
  // {
  //   name: "Fall",
  //   morphs: {
  //     face: { strength: 0.50 },
  //     nose: { strength: 0.50 },
  //     lips: { strength: 0.50 },
  //     eyes: { strength: 0.50 },

  //   },
  //   hair: {
  //     enabled: false,
  //     color: ["1.00 0.22 0.00 1.00"],
  //   },
  //   lut: {
  //     title: "Byers",
  //     //texture: "assets/textures/lut_byers.png",
  //   },
  // },
  // {
  //   name: "Winter",
  //   look: {
  //     title: "Dolly",
  //     texture: "assets/textures/makeup_dolly.png",
  //   },
  //   hair: {
  //     enabled: true,
  //     color: ["0.25 0.05 0.98 1.00"],
  //   },
  //   lipstick: {
  //     enabled: true,
  //     color: "0.15 0.06 0.91 0.80",
  //   },
  //   lipstickParams: {
  //     brightness: { value: 1 },
  //     saturation: { value: 1 },
  //     shineIntensity: { value: 0 },
  //     shineBleeding: { value: 0 },
  //     shineScale: { value: 0 },
  //     glitterIntensity: { value: 0 },
  //     glitterBleeding: { value: 0 },
  //     glitterGrain: { value: 0 },
  //   },
  // },
  // {
  //   name: "Black and white",
  //   lut: {
  //     title: "Gray",
  //     texture: "assets/textures/lut_gray.png",
  //   },
  //   faceMakeup: {
  //     blushes: {
  //       color: "0.62 0.20 0.27 0.50",
  //       enabled: true,
  //     },
  //   },
  //   eyesMakeup: {
  //     eyeshadow: {
  //       color: "0.04 0.04 0.04 0.76",
  //       enabled: true,
  //     },
  //   },
  //   softlight: {
  //     strength: 0.67,
  //   },
  //   hair: {
  //     enabled: true,
  //     color: ["1.00 0.00 0.00 1.00"],
  //   },
  //   background: {
  //     texture: "assets/textures/bg_neon.png",
  //     contentMode: "fill",
  //     transparency: 0,
  //     rotation: 0,
  //     scale: 1,
  //   },
  // },
  // {
  //   name: "Sepia",
  //   faceMakeup: {
  //     highlighter: {
  //       color: "0.93 0.92 0.92 0.40",
  //       enabled: true,
  //     },
  //     blushes: {
  //       color: "0.79 0.43 0.44 0.50",
  //       enabled: true,
  //     },
  //   },
  //   eyesMakeup: {
  //     eyeshadow: {
  //       color: "0.64 0.11 0.64 0.76",
  //       enabled: true,
  //     },
  //   },
  //   hair: {
  //     enabled: true,
  //     color: ["0.90 0.11 0.90 1.00"],
  //   },
  //   lut: {
  //     title: "Paladin",
  //     texture: "assets/textures/lut_paladin.png",
  //   },
  // },
]
