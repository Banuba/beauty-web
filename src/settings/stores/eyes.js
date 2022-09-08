import Store, { updateEach, resetEach } from "../../store.js"

export default Store.module(
  "eyes",
  {
    color: {
      title: "Color",
      color: "0.22 0.43 0.43 0.77",
      enabled: false,
    },
    flare: {
      title: "Flare",
      strength: 0,
    },
    whitening: {
      title: "Whitening",
      strength: 0,
    },
  },
  {
    update: updateEach,
    reset: resetEach,
  }
)
