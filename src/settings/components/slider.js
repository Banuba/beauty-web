import { style, theme } from "../../lib.js"

export default {
  props: {
    icon: String,
    title: String,
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 1,
    },
  },
  data: (vm) => ({
    step: vm.max <= 1 ? 0.01 : 1 < vm.max && vm.max <= 10 ? 0.1 : 1,
  }),
  template: /* HTML */ `
    <div class="is-flex is-flex-direction-column pt-1 pb-1">
      <div class="is-flex is-align-items-center has-text-link has-text-weight-semibold">
        <b-icon v-if="icon" class="mr-2" :icon="icon" />
        <span>{{ title }}</span>
        <b-input
          class="ml-auto"
          custom-class="p-2 has-text-centered bnb-slider__value"
          :value="value"
          @input="$emit('input', $event)"
        />
      </div>
      <b-slider
        class="bnb-slider__track"
        :min="min"
        :max="max"
        :step="step"
        :value="value"
        :tooltip="false"
        @input="$emit('input', $event)"
        rounded
      />
    </div>
  `,
}

style(/* CSS */ `
  .bnb-slider__track {
    padding-left: 7px;
    padding-right: 7px;
    background: linear-gradient(90deg, ${theme.colors.base} 50%, #dbdbdb 50%);
    background-position: center;
    background-size: 100% 0.125rem;
    background-repeat: no-repeat;
  }
  .bnb-slider__track .b-slider-track {
    border: solid white 0.1875rem;
    border-left-width: 0;
    border-right-width: 0;
  }
  .bnb-slider__track .b-slider-track,
  .bnb-slider__track .b-slider-fill {
    border-radius: 0;
  }
  .bnb-slider__track .b-slider-thumb {
    border: none !important;
    background: ${theme.colors.base} !important;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1) !important;
  }
  .bnb-slider__value {
    max-width: 3.125rem;
    max-height: 1.875rem;
  }
`)
