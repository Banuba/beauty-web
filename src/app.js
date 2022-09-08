import BnbFeatures from "./features/index.js"
import BnbLayout from "./layout/index.js"
import { Vue, Router } from "./lib.js"
import BnbSettings from "./settings/index.js"
import BnbViewer from "./viewer/index.js"

const BnbApp = {
  data: () => ({ isLoading: false }),
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading
    },
  },
  components: { BnbLayout, BnbSettings, BnbViewer, BnbFeatures },
  template: /* HTML */ `
    <bnb-layout :loading="isLoading">
      <template #left>
        <bnb-settings />
      </template>
      <bnb-viewer
        @photo-uploaded="$parent.$emit('photo-uploaded', $event)"
        @camera-request="$parent.$emit('camera-request')"
        @screenshot-request="$parent.$emit('screenshot-request')"
        @close-request="$parent.$emit('close-request')"
      >
        <slot />
      </bnb-viewer>
      <template #right>
        <bnb-features
          @preset-copy-request="$parent.$emit('preset-copy-request', $event)"
          @preset-download-request="$parent.$emit('preset-download-request', $event)"
        />
      </template>
    </bnb-layout>
  `,
}

export default new Vue({
  el: "bnb-app",
  components: { BnbApp },
  router: new Router({ routes: [] }),
})
