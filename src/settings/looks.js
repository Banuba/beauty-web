import { style } from "../lib.js"
import BnbAsset from "./components/asset.js"
import BnbSetting from "./components/setting.js"
import Config from "./data/looks.js"
import { look } from "./stores/index.js"

export default {
  data: () => ({ looks: Config, selectedLook: look }),
  methods: {
    reset() {
      this.selectedLook.reset()
    },
  },
  components: { BnbSetting, BnbAsset },
  template: /* HTML */ `
    <bnb-setting @reset="reset">
      <div class="is-flex is-flex-wrap-wrap bnb-looks">
        <bnb-asset
          v-for="(look, name) in looks"
          :key="name"
          class="m-2"
          :title="look.title"
          :cover="look.cover"
          :active="look.texture === selectedLook.texture"
          @change="selectedLook.update(look)"
        />
      </div>
    </bnb-setting>
  `,
}

style(/* CSS */ `
  .bnb-looks {
    margin-right: -0.75rem;
  }
`)
