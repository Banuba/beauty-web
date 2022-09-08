import { style, colorParser, colorFormatter } from "../lib.js"
import BnbSetting from "./components/setting.js"
import BnbSlider from "./components/slider.js"
import { brows, eyes, eyelashes, eyesMakeup as makeup } from "./stores/index.js"

export default {
  data: () => ({
    brows,
    eyes,
    eyelashes,
    makeup,
  }),
  methods: {
    parser: colorParser,
    formatter: colorFormatter,

    reset() {
      this.brows.reset()
      this.eyes.reset()
      this.makeup.reset()
    },
  },
  components: { BnbSetting, BnbSlider },
  template: /* HTML */ `
    <bnb-setting @reset="reset">
      <b-field
        class="pt-2 pb-2 mb-2"
        custom-class="has-text-link is-capitalized is-flex is-align-items-center"
      >
        <template #label>
          Brows
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="brows.enabled"
            @input="brows.update({ enabled: $event })"
          />
        </template>
        <b-colorpicker
          class="bnb-colorpicker"
          size="is-small"
          :value="parser(brows.color)"
          :disabled="!brows.enabled"
          :color-formatter="formatter"
          @input="brows.update({ color: formatter($event) })"
          representation="square"
          position="is-top-right"
          alpha
          append-to-body
        />
      </b-field>
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
          Eyelashes
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="eyelashes.enabled"
            @input="eyelashes.update({ enabled: $event })"
          />
        </template>
        <b-colorpicker
          class="bnb-colorpicker"
          size="is-small"
          :value="parser(eyelashes.color)"
          :disabled="!eyelashes.enabled"
          :color-formatter="formatter"
          @input="eyelashes.update({ color: formatter($event) })"
          representation="square"
          position="is-top-right"
          alpha
          append-to-body
        />
      </b-field>
      <b-field
        class="pt-2 pb-2 mb-2"
        custom-class="has-text-link is-capitalized is-flex is-align-items-center"
      >
        <template #label>
          {{ eyes.color.title }}
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="eyes.color.enabled"
            @input="eyes.update({ color: { enabled: $event } })"
          />
        </template>
        <b-colorpicker
          class="bnb-colorpicker"
          size="is-small"
          :value="parser(eyes.color.color)"
          :disabled="!eyes.color.enabled"
          :color-formatter="formatter"
          @input="eyes.update({ color: { color: formatter($event) } })"
          representation="square"
          position="is-top-right"
          alpha
          append-to-body
        />
      </b-field>
      <bnb-slider
        class="mb-2"
        :title="eyes.whitening.title"
        :value="eyes.whitening.strength"
        @input="eyes.update({ whitening: { strength: $event } })"
      />
      <bnb-slider
        class="mb-2"
        :title="eyes.flare.title"
        :value="eyes.flare.strength"
        @input="eyes.update({ flare: { strength: $event } })"
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
