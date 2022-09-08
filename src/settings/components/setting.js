import { style } from "../../lib.js"

export default {
  data: (vm) => ({
    title: vm.$route.meta.title,
    option: vm.$route.meta.title.replace(/s$/, "").toLowerCase(),
    overflowed: false,
    ended: false,
  }),
  mounted() {
    const target = this.$refs.content
    const scrollBottom = target.scrollHeight - (target.clientHeight + target.scrollTop)

    this.overflowed = scrollBottom > 0
    this.ended = scrollBottom < 16
  },
  methods: {
    onscroll({ target }) {
      const scrollBottom = target.scrollHeight - (target.clientHeight + target.scrollTop)

      this.ended = scrollBottom < 16
    },
  },
  template: /* HTML */ `
    <form
      :class="
      ['is-flex is-flex-direction-column has-background-white is-relative bnb-setting',
      {
        'bnb-setting__setting--overflowed': overflowed,
        'bnb-setting__setting--ended': ended,
      }
    ]"
    >
      <b-button
        tag="router-link"
        to="/"
        class="is-capitalized bnb-setting__link"
        icon-left="chevron-left"
        type="is-link"
        inverted
        expanded
      >
        {{ title }}
      </b-button>
      <div
        class="is-flex-grow-1 bnb-setting__content"
        ref="content"
        @scroll.passive="onscroll($event)"
      >
        <slot />
      </div>
      <b-button
        class="mt-auto bnb-settings__reset-btn"
        type="is-dark"
        icon-left="reset"
        @click="$emit('reset')"
        inverted
        expanded
      >
        Reset {{ option }}
      </b-button>
    </form>
  `,
}

style(/* CSS */ `
  .bnb-setting {
    height: 100%;
  }
  .bnb-setting__setting--overflowed::after {
    z-index: 1;
    position: absolute;
    left: -0.75rem;
    bottom: -4rem;
    width: calc(100% + 1.5rem);
    height: 11.125rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 36.12%);
    /* Safari fix */
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    opacity: 1;
    transition: opacity 0.2s ease-out;
    pointer-events: none;
    content: "";
  }
  .bnb-setting__setting--ended::after {
    opacity: 0;
    transition: opacity 0.25s ease-in;
  }
  .bnb-setting__link {
    padding-left: 0.5rem;
    padding-right: calc(0.5rem + 24px);
  }
  .bnb-setting__link .icon + * {
    margin-left: auto;
    margin-right: auto;
  }
  .bnb-setting__content {
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }
  .bnb-setting__setting--overflowed .bnb-setting__content {
    margin-right: -0.75rem;
  }
  .bnb-settings__reset-btn {
    z-index: 2;
  }
  .bnb-settings__reset-btn .bnb-icon {
    margin-right: 0.25rem;
  }
`)
