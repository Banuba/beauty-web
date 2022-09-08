import Store, { updateEach, resetEach } from "../../store.js"

export default Store.module(
  "morphs",
  {
    face: {
      title: "Face",
      strength: 0,
    },
    nose: {
      title: "Nose",
      strength: 0,
    },
    eyes: {
      title: "Eyes",
      strength: 0,
    },
    lips: {
      title: "Lips",
      strength: 0,
    },
  },
  {
    update: updateEach,
    reset: resetEach,
  }
)
