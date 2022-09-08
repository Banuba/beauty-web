import Buefy from "https://cdn.jsdelivr.net/npm/buefy@0.9.21/dist/buefy.esm.min.js"
import Color from "https://cdn.jsdelivr.net/npm/buefy@0.9.21/src/utils/color.min.js"
import "https://cdn.jsdelivr.net/npm/tiny-emitter@2.1.0/dist/tinyemitter.min.js"
import Router from "https://cdn.jsdelivr.net/npm/vue-router@3.5.3/dist/vue-router.esm.browser.min.js"
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.min.js"

export { Vue, Router }

export const createEventEmitter = () => new TinyEmitter()

export const colorParser = (str) => {
  const [red, green, blue, alpha = 1] = str.split(" ").map((c) => c * 255)
  return new Color({ red, green, blue, alpha })
}

export const colorFormatter = ({ red, green, blue, alpha }) => {
  return [red, green, blue, alpha].map((c) => (c / 255).toFixed(2)).join(" ")
}

export const style = (textContent) =>
  Object.assign(document.head.appendChild(document.createElement("style")), { textContent })

export const theme = {
  colors: {
    base: "#3A51BB",
    light: "#EEF3FC",
    border: "#C3CAEC",
    borderLight: "#EFF1FA",
  },
}

Vue.use(Router)

const svgs = {}
Vue.use(Buefy, {
  // https://github.com/buefy/buefy/issues/3155#issuecomment-840658449
  defaultIconPack: null,
  defaultIconComponent: {
    props: ["icon", "size"],
    data: (vm) => ({ svg: svgs[vm.$props.icon[1]] || "" }),
    created() {
      if (this.$data.svg) return

      const icon = this.$props.icon[1]

      fetch(`assets/icons/${icon}.svg`)
        .then((r) => r.text())
        .then((svg) => (svgs[icon] = svg))
        .then((svg) => (this.$data.svg = svg))
    },
    template: /* HTML */ ` <span class="bnb-icon" v-html="svg"></span> `,
  },
})

style(/* CSS */ `
  .bnb-icon {
    display: inline-flex;
  }
  .bnb-icon *:not([fill="none"]) {
    fill: currentColor;
  }
`)
