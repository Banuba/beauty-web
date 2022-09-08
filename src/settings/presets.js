import omit from "https://cdn.jsdelivr.net/npm/lodash-es/omit.min.js"
import Store from "../store.js"
import BnbSetting from "./components/setting.js"
import Config from "./data/presets.js"
import * as stores from "./stores/index.js"

let selectedPreset = null

const applyPreset = (preset) => {
  selectedPreset = omit(preset, "name")

  Store.reset()

  for (const [name, value] of Object.entries(selectedPreset)) stores[name].update(value)
}

const resetPresets = () => {
  if (!selectedPreset) return

  for (const [name, value] of Object.entries(selectedPreset))
    if (stores[name]?.isEqual(value)) stores[name].reset(...Object.keys(value))

  selectedPreset = null
}

export default {
  data: () => ({ presets: Config }),
  methods: { applyPreset, resetPresets },
  components: { BnbSetting },
  template: /* HTML */ `
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
