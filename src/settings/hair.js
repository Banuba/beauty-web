import { style, colorParser, colorFormatter } from "../lib.js"
import BnbSetting from "./components/setting.js"
import BnbSlider from "./components/slider.js"
import { hair } from "./stores/index.js"

export default {
  data: () => ({ hair }),
  computed: {
    colors: ({ hair }) => {
      const colors = [...hair.color]
      while (colors.length < 5) colors.push("0 0 0 0")
      return colors
    },
  },
  methods: {
    parser: colorParser,
    formatter: colorFormatter,

    updateColor(color, idx) {
      const colors = [...this.colors]
      colors[idx] = color

      for (let i = colors.length - 1; i > 0; --i) {
        if (colors[i].split(" ")[3] != 0) break
        else colors.pop()
      }

      this.hair.update({ color: colors })
    },

    reset() {
      this.hair.reset()
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
          Color
          <b-checkbox
            class="ml-auto mr-0 bnb-checkbox"
            :value="hair.enabled"
            @input="hair.update({ enabled: $event })"
          />
        </template>
        <div class="is-flex is-align-items-center is-flex-direction-column">
          <b-field
            v-for="(color, idx) in colors"
            :key="idx"
            class="pt-2 pb-2 mb-2"
            custom-class="has-text-link is-capitalized is-flex is-align-items-center"
          >
            <b-colorpicker
              :class="[{ 'bnb-colorpicker__inactive': color.split(' ')[3] == 0 }, 'bnb-colorpicker']"
              size="is-small"
              :value="parser(color)"
              :disabled="!hair.enabled"
              :color-formatter="formatter"
              @input="updateColor(formatter($event), idx)"
              representation="square"
              alpha
              append-to-body
            />
          </b-field>
        </div>
      </b-field>
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
  .bnb-colorpicker__inactive .dropdown-trigger {
    opacity: 0.25;
  }
`)
