import BnbSetting from "./components/setting.js"
import BnbSlider from "./components/slider.js"
import { morphs, teethWhitening } from "./stores/index.js"

export default {
  data: () => ({ morphs, teethWhitening }),
  methods: {
    reset() {
      this.morphs.reset()
      this.teethWhitening.reset()
    },
  },
  components: { BnbSetting, BnbSlider },
  template: /* HTML */ `
    <bnb-setting @reset="reset">
      <bnb-slider
        v-for="(morph, name) in morphs"
        :key="name"
        class="mb-2"
        :icon="name"
        :title="morph.title"
        :value="morph.strength"
        @input="morphs.update({ [name]: { strength: $event } })"
      />
      <bnb-slider
        class="mb-2"
        icon="teeth-whitening"
        :title="teethWhitening.title"
        :value="teethWhitening.strength"
        @input="teethWhitening.update({ strength: $event })"
      />
    </bnb-setting>
  `,
}
