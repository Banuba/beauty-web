import { style } from "../lib.js"
import BnbSetting from "./components/setting.js"
import BnbSlider from "./components/slider.js"
import { background } from "./stores/index.js"

export default {
  data: () => ({ background }),
  methods: {
    reset() {
      this.background.reset()
    },
  },
  components: { BnbSetting, BnbSlider },
  template: /* HTML */ `
    <bnb-setting @reset="reset">
      <b-field class="mb-0" custom-class="has-text-link mt-1" label="Texture">
        <b-upload
          :value="background.texture"
          @input="background.update({ texture: $event })"
          expanded
        >
          <span
            class="button is-fullwidth is-small pl-4 is-justify-content-flex-start border-6 has-text-grey-light is-clipped"
          >
            <b-icon class="mr-2" icon="image"></b-icon>
            <span class="has-text-link">{{ background.texture?.name || "Click to upload"}}</span>
          </span>
        </b-upload>
      </b-field>
      <b-button
        :class="['p-0 is-size-7 has-text-grey-light', { 'is-invisible': !background.texture }]"
        type="is-text is-small"
        style="height:unset;"
        @click="background.update({ texture: null })"
      >
        Remove texture
      </b-button>
      <b-field custom-class="has-text-link" label="Content mode">
        <b-select
          class="border-6"
          size="is-small is-fullwidth"
          :value="background.contentMode"
          @input="background.update({ contentMode: $event })"
        >
          <option value="fill">Fill</option>
          <option value="fit">Fit</option>
          <option value="scale_to_fill">Scale to Fill</option>
        </b-select>
      </b-field>
      <bnb-slider
        class="mt-4"
        title="Transparency"
        :value="background.transparency"
        @input="background.update({ transparency: $event })"
      />
      <bnb-slider
        class="mt-2"
        title="Rotation"
        :min="0"
        :max="360"
        :value="background.rotation"
        @input="background.update({ rotation: $event })"
      />
      <bnb-slider
        class="mt-2"
        title="Scale"
        :min="1"
        :max="4"
        :value="background.scale"
        @input="background.update({ scale: $event })"
      />
    </bnb-setting>
  `,
}

style(/* CSS */ `
  .border-6 {
    border-radius: 6px !important;
  }
`)
