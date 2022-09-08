import { style, Color } from "../lib.js"
import { html, css } from "../utils.js"
import BnbSetting from "./components/setting.js"
import BnbSlider from "./components/slider.js"
import { lipstick, lipstickParams as params } from "./stores/index.js"

export default {
  data: () => ({ lipstick, params }),
  methods: {
    parser: colorParser,
    formatter: colorFormatter,
    reset() {
      this.lipstick.reset()
      this.params.reset()
    },
  },
  components: { BnbSetting, BnbSlider },
  template: html`
    <bnb-setting @reset="reset">
      <b-field
        class="pt-2 pb-2 mb-2"
        custom-class="has-text-link is-capitalized is-flex is-align-items-center"
      >
        <template #label>
          Color
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="lipstick.enabled"
            @input="lipstick.update({ enabled: $event })"
          />
        </template>
        <b-colorpicker
          class="bnb-colorpicker"
          size="is-small"
          :value="parser(lipstick.color)"
          :disabled="!lipstick.enabled"
          :color-formatter="formatter"
          @input="lipstick.update({ color: formatter($event) })"
          representation="square"
          alpha
          append-to-body
        />
      </b-field>
      <bnb-slider
        v-for="(parameter, name) in params"
        :key="name"
        class="mb-2"
        :title="parameter.title"
        :value="parameter.value"
        @input="params.update({ [name]: { value: $event } })"
        :max="['brightness', 'saturation'].includes(name) ? 2 : 1"
      />
    </bnb-setting>
  `,
}

style(css`
  .bnb-checkbox .control-label {
    padding: 0 !important;
  }
  .bnb-colorpicker .dropdown,
  .bnb-colorpicker .dropdown-trigger,
  .bnb-colorpicker .button {
    max-height: 30px;
    width: 100%;
  }
`)

function colorParser(str) {
  const [red, green, blue, alpha = 1] = str.split(" ").map((c) => c * 255)
  return new Color({ red, green, blue, alpha })
}

function colorFormatter({ red, green, blue, alpha }) {
  return [red, green, blue, alpha].map((c) => (c / 255).toFixed(2)).join(" ")
}
