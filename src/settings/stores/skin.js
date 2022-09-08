import Store, { updateEach, resetEach } from "../../store.js"

export default Store.module(
  "skin",
  {
    softening: {
      title: "Skin Softening",
      strength: 0,
    },
    color: {
      title: "Skin color",
      enabled: false,
      color: "0.98 0.82 0.54 0.9",
    },
  },
  { update: updateEach, reset: resetEach }
)
