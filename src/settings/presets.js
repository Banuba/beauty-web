import omit from "https://cdn.jsdelivr.net/npm/lodash-es/omit.min.js"
import { html } from "../utils.js"
import Store from "../store.js"
import * as stores from "./stores/index.js"
import BnbSetting from "./components/setting.js"
import Config from "./data/presets.js"

let selectedPreset = null

const applyPreset = (preset) => {
  selectedPreset = omit(preset, "name")

  Store.reset()

  for (const [name, value] of Object.entries(selectedPreset)) stores[name].update(value)
}

const resetPresets = () => {
  if (!selectedPreset) return

  // for each selectedPreset
  // if current store values === all selectedPreset values
  // then reset store
  for (const [name, value] of Object.entries(selectedPreset))
    if (stores[name]?.isEqual(value)) stores[name].reset(...Object.keys(value))

  selectedPreset = null
}

export default {
  data: () => ({ presets: Config }),
  methods: { applyPreset, resetPresets },
  components: { BnbSetting },
  template: html`
    <bnb-setting @reset="resetPresets">
      <div class="is-flex is-flex-direction-column">
        <b-button
          v-for="preset in presets"
          :key="preset.name"
          class="mt-2 mb-2"
          type="is-link is-inverted"
          @click="applyPreset(preset)"
        >
          {{ preset.name }}
        </b-button>
      </div>
    </bnb-setting>
  `,
}
