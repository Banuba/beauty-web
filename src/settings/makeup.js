import { style, colorParser, colorFormatter } from "../lib.js"
import BnbSetting from "./components/setting.js"
import BnbSlider from "./components/slider.js"
import { faceMakeup as makeup, softlight, skin } from "./stores/index.js"

export default {
  data: () => ({
    makeup,
    softlight,
    skin,
  }),
  methods: {
    parser: colorParser,
    formatter: colorFormatter,

    reset() {
      this.makeup.reset()
      this.softlight.reset()
      this.skin.reset()
    },
  },
  components: { BnbSetting, BnbSlider },
  template: /* HTML */ `
    <bnb-setting @reset="reset">
      <b-field
        v-for="(region, name) in makeup"
        :key="name"
        class="pt-2 pb-2 mb-2"
        custom-class="has-text-link is-capitalized is-flex is-align-items-center"
      >
        <template #label>
          {{ region.title }}
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="region.enabled"
            @input="makeup.update({ [name]: { enabled: $event } })"
          />
        </template>
        <b-colorpicker
          class="bnb-colorpicker"
          size="is-small"
          :value="parser(region.color)"
          :disabled="!region.enabled"
          :color-formatter="formatter"
          @input="makeup.update({ [name]: { color: formatter($event) } })"
          representation="square"
          alpha
          append-to-body
        />
      </b-field>
      <b-field
        class="pt-2 pb-2 mb-2"
        custom-class="has-text-link is-capitalized is-flex is-align-items-center"
      >
        <template #label>
          {{ skin.color.title }}
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="skin.color.enabled"
            @input="skin.update({ color: { enabled: $event } })"
          />
        </template>
        <b-colorpicker
          class="bnb-colorpicker"
          size="is-small"
          :value="parser(skin.color.color)"
          :disabled="!skin.color.enabled"
          :color-formatter="formatter"
          @input="skin.update({ color: { color: formatter($event) } })"
          representation="square"
          alpha
          append-to-body
        />
      </b-field>
      <bnb-slider
        class="mb-2"
        :title="skin.softening.title"
        :value="skin.softening.strength"
        @input="skin.update({ softening: { strength: $event } })"
      />
      <bnb-slider
        class="mb-2"
        :title="softlight.title"
        :value="softlight.strength"
        @input="softlight.update({ strength: $event })"
      />
    </bnb-setting>
  `,
}

style(/* CSS */ `
  .bnb-checkbox .control-label {
    padding: 0 !important;
  }
  .bnb-colorpicker .dropdown,
  .bnb-colorpicker .dropdown-trigger,
  .bnb-colorpicker .button {
    width: 100%;
    max-height: 30px;
  }
`)
