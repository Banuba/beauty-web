import Store, { updateEach, resetEach } from "../../store.js"

export default Store.module(
  "background",
  {
    texture: null,
    contentMode: "fill",
    transparency: 0,
    rotation: 0,
    scale: 1,
  },
  {
    update: updateEach,
    reset: resetEach,
  }
)
