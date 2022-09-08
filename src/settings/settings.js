import { style } from "../lib.js"
import Store from "../store.js"

export default {
  props: ["routes"],
  data: () => Store,
  template: /* HTML */ `
    <div class="is-flex is-flex-direction-column has-background-white bnb-settings">
      <b-button
        v-for="route in routes"
        :key="route.path"
        tag="router-link"
        :to="route.path"
        class="mb-4 bnb-settings__link"
        :icon-left="route.meta.icon"
        icon-right="chevron-right"
        type="is-link"
        inverted
        expanded
      >
        {{ route.meta.title }}
      </b-button>
      <b-button
        class="mt-auto bnb-settings__reset-btn"
        type="is-dark"
        icon-left="reset"
        inverted
        expanded
        @click="reset"
      >
        Reset all
      </b-button>
    </div>
  `,
}

style(/* CSS */ `
  .bnb-settings {
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100% + 0.25rem);
    padding: 0.125rem;
    padding-right: 0.75rem;
    margin: -0.125rem;
    margin-right: -0.75rem;
  }
  @supports (scrollbar-gutter: stable) {
    .bnb-settings {
      padding-right: 0.125rem;
      scrollbar-gutter: stable;
    }
  }
  .bnb-settings__link .icon + * {
    margin-left: 0.5rem;
    margin-right: auto;
  }
  .bnb-settings__reset-btn .bnb-icon {
    margin-right: 0.25rem;
  }
`)
