import { style } from "../lib.js"
import Background from "./background.js"
import Eyes from "./eyes.js"
import Hair from "./hair.js"
import Lipstick from "./lipstick.js"
import Looks from "./looks.js"
import LUTs from "./luts.js"
import Makeup from "./makeup.js"
import Presets from "./presets.js"
import Retouch from "./retouch.js"
import Settings from "./settings.js"

const routes = [
  { path: "/looks", component: Looks, meta: { icon: "looks", title: "Looks" } },
  {
    path: "/presets",
    component: Presets,
    meta: { icon: "presets", title: "Presets" },
  },
  {
    path: "/retouch",
    component: Retouch,
    meta: { icon: "retouch", title: "Retouch" },
  },
  {
    path: "/makeup",
    component: Makeup,
    meta: { icon: "makeup", title: "Makeup" },
  },
  {
    path: "/eyes",
    component: Eyes,
    meta: { icon: "eyes", title: "Eyes" },
  },
  {
    path: "/lipstick",
    component: Lipstick,
    meta: { icon: "lipstick", title: "Lipstick" },
  },
  {
    path: "/hair",
    component: Hair,
    meta: { icon: "hair", title: "Hair" },
  },
  {
    path: "/background",
    component: Background,
    meta: { icon: "background", title: "Background" },
  },
  { path: "/luts", component: LUTs, meta: { icon: "luts", title: "LUTs" } },
]

const root = {
  path: "/",
  component: Settings,
  props: () => ({ routes }),
}

export default {
  data: () => ({ transition: "" }),
  created() {
    for (const route of [root, ...routes]) this.$router.addRoute(route)
  },
  watch: {
    $route(to) {
      this.transition = to.path === "/" ? "slide-right" : "slide-left"
    },
  },
  template: /* HTML */ `
    <transition :name="transition">
      <router-view />
    </transition>
  `,
}

style(/* CSS */ `
  .slide-left-leave {
    opacity: 1;
    pointer-events: none;
  }
  .slide-left-leave-to {
    opacity: 0;
    transition: all 0.125s ease-in;
    pointer-events: none;
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate(30px, -100%);
    pointer-events: none;
  }
  .slide-left-enter-to {
    opacity: 1;
    transform: translate(0, -100%);
    transition: all 0.125s ease-in;
    pointer-events: none;
  }

  .slide-right-leave {
    opacity: 1;
    pointer-events: none;
  }
  .slide-right-leave-to {
    opacity: 0;
    transition: all 0.125s ease-out;
    transform: translate(30px, 0);
    pointer-events: none;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate(0, calc(-100% + 0.25rem));
    pointer-events: none;
  }
  .slide-right-enter-to {
    opacity: 1;
    transform: translate(0, calc(-100% + 0.25rem));
    transition: all 0.125s ease-out;
    pointer-events: none;
  }
`)
