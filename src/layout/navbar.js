import { style } from "../lib.js"

export default {
  template: /* HTML */ `
    <b-navbar class="bnb-navbar pt-2 pb-2" wrapper-class="container pl-3 pr-3">
      <template #brand>
        <b-navbar-item class="has-text-grey" tag="router-link" :to="{path: '/' }">
          WebAR&nbsp;/&nbsp;<span class="has-text-link has-text-weight-bold">Beauty</span>
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item
          class="button is-ghost"
          href="https://docs.banuba.com/face-ar-sdk-v1/effect_api/face_beauty"
          target="_blank"
        >
          Documentation
        </b-navbar-item>
        <b-navbar-item
          class="button is-ghost ml-2"
          href="https://github.com/Banuba/beauty-web"
          target="_blank"
        >
          Clone example
        </b-navbar-item>
        <b-navbar-item
          class="button is-link is-light ml-2"
          href="https://docs.banuba.com/face-ar-sdk-v1/generated/effects/Makeup.zip"
          target="_blank"
        >
          Download Makeup API
        </b-navbar-item>
      </template>
    </b-navbar>
  `,
}

style(/* CSS */ `
  .bnb-navbar {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
  .bnb-navbar .container,
  .bnb-navbar .navbar-brand {
    min-height: unset;
  }
`)
