import { style } from "../lib.js"
import { html, css } from "../utils.js"
import BnbSetting from "./components/setting.js"
import BnbAsset from "./components/asset.js"
import Config from "./data/luts.js"
import { lut } from "./stores/index.js"

export default {
  data: () => ({ luts: Config, selectedLut: lut }),
  methods: {
    reset() {
      this.selectedLut.reset()
    },
  },
  components: { BnbSetting, BnbAsset },
  template: html`
    <bnb-setting @reset="reset">
      <div class="is-flex is-flex-wrap-wrap bnb-luts">
        <bnb-asset
          v-for="(lut, name) in luts"
          :key="name"
          class="m-2"
          :title="lut.title"
          :cover="lut.cover"
          :active="lut.texture === selectedLut.texture"
          @change="selectedLut.update(lut)"
          name="name"
        />
      </div>
    </bnb-setting>
  `,
}

style(css`
  .bnb-luts {
    margin-right: -0.75rem;
  }
`)
