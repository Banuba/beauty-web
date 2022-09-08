import Store, { updateEach, resetEach } from "../../store.js"

export const lipstick = Store.module("lipstick", {
  enabled: false,
  color: "0.65 0.20 0.26 0.88",
})

export const params = Store.module(
  "lipstick-params",
  {
    brightness: { title: "Brightness", value: 1 },
    saturation: { title: "Saturation", value: 1 },
    shineIntensity: { title: "Shine intensity", value: 0 },
    shineBleeding: { title: "Shine bleeding", value: 0 },
    shineScale: { title: "Shine scale", value: 0 },
    glitterIntensity: { title: "Glitter intensity", value: 0 },
    glitterBleeding: { title: "Glitter bleeding", value: 0 },
    glitterGrain: { title: "Glitter grain", value: 0 },
  },
  {
    update: updateEach,
    reset: resetEach,
  }
)
