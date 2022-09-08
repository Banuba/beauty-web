import Store, { updateEach, resetEach } from "../../store.js"

export const eyesMakeup = Store.module(
  "eyes-makeup",
  {
    eyeshadow: {
      title: "Eyeshadow",
      color: "0.70 0.15 0.16 0.98",
      enabled: false,
    },
    eyeliner: {
      title: "Eyeliner",
      color: "0 0 0",
      enabled: false,
    },
  },
  {
    update: updateEach,
    reset: resetEach,
  }
)

export const faceMakeup = Store.module(
  "face-makeup",
  {
    highlighter: {
      title: "Highlighter",
      color: "0.99 0.99 0.95 0.4",
      enabled: false,
    },
    contour: {
      title: "Contour",
      color: "0.64 0.37 0.24 0.2",
      enabled: false,
    },
    blushes: {
      title: "Blush",
      color: "0.87 0.45 0.77 0.45",
      enabled: false,
    },
  },
  {
    update: updateEach,
    reset: resetEach,
  }
)
