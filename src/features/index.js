import { style } from "../lib.js"
import * as stores from "../settings/stores/index.js"

export default {
  data: () => ({ ...stores }),
  computed: {
    features: ({
      background,
      brows,
      eyelashes,
      eyes,
      eyesMakeup,
      hair,
      lipstick,
      lipstickParams,
      look,
      lut,
      morphs,
      faceMakeup,
      skin,
      softlight,
      teethWhitening,
    }) => {
      const features = []

      for (const [name, morph] of Object.entries(morphs))
        if (morph.strength > 0)
          features.push({
            group: "Retouch",
            name: morph.title,
            clear: () => morphs.reset(name),
          })
      if (teethWhitening.strength > 0)
        features.push({
          group: "Retouch",
          name: teethWhitening.title,
          clear: () => teethWhitening.reset(),
        })

      for (const [name, region] of Object.entries(faceMakeup))
        if (region.enabled)
          features.push({
            group: "Makeup",
            name: region.title,
            clear: () => faceMakeup.reset(name),
          })
      for (const [name, property] of Object.entries(skin))
        if (property.enabled || property.strength > 0)
          features.push({
            group: "Makeup",
            name: property.title,
            clear: () => skin.reset(name),
          })
      if (softlight.strength > 0)
        features.push({
          group: "Makeup",
          name: softlight.title,
          clear: () => softlight.reset(),
        })

      if (brows.enabled)
        features.push({
          group: "Eyes",
          name: brows.title,
          clear: () => brows.reset(),
        })
      for (const [name, region] of Object.entries(eyesMakeup))
        if (region.enabled)
          features.push({
            group: "Eyes",
            name: region.title,
            clear: () => eyesMakeup.reset(name),
          })
      if (eyelashes.enabled)
        features.push({
          group: "Eyes",
          name: eyelashes.title,
          clear: () => eyelashes.reset(),
        })
      for (const [name, property] of Object.entries(eyes))
        if (property.enabled || property.strength > 0)
          features.push({
            group: "Eyes",
            name: property.title,
            clear: () => eyes.reset(name),
          })

      if (lipstick.enabled) {
        features.push({
          group: "Lipstick",
          name: "Color",
          clear: () => lipstick.reset(),
        })

        const shine = []
        const glitter = []

        for (const [name, parameter] of Object.entries(lipstickParams)) {
          const initValue = ["brightness", "saturation"].includes(name) ? 1 : 0

          if (parameter.value === initValue) continue

          if (name.includes("shine")) {
            if (shine.push(name) === 1)
              features.push({
                group: "Lipstick",
                name: "Shine",
                clear: () => shine.forEach((name) => lipstickParams.reset(name)),
              })
          } else if (name.includes("glitter")) {
            if (glitter.push(name) === 1)
              features.push({
                group: "Lipstick",
                name: "Glitter",
                clear: () => glitter.forEach((name) => lipstickParams.reset(name)),
              })
          } else {
            features.push({
              group: "Lipstick",
              name: parameter.title,
              clear: () => lipstickParams.reset(name),
            })
          }
        }
      }

      if (hair.enabled)
        features.push({
          group: "Other",
          name: "Hair color",
          clear: () => hair.reset(),
        })

      if (look.texture)
        features.push({
          group: "Other",
          name: `Look "${look.title}"`,
          clear: () => look.reset(),
        })

      if (background.texture)
        features.push({
          group: "Other",
          name: "Background",
          clear: () => background.reset(),
        })

      if (lut.texture)
        features.push({
          group: "Other",
          name: `LUT "${lut.title}"`,
          clear: () => lut.reset(),
        })

      return features
    },
    empty: (vm) => vm.features.length === 0,
    groups: (vm) => vm.features.reduce((r, a) => ((r[a.group] ??= []).push(a), r), {}),
  },
  methods: {
    serialize() {
      const {
        background,
        brows,
        eyelashes,
        eyes,
        eyesMakeup,
        hair,
        lipstick,
        lipstickParams,
        look,
        lut,
        morphs,
        faceMakeup,
        skin,
        softlight,
        teethWhitening,
      } = this

      const dump = {}

      if (background.texture) {
        dump.background = {}
        dump.background.texture = background.texture.name || background.texture
        dump.background.contentMode = background.contentMode
        dump.background.transparency = background.transparency
        dump.background.rotation = background.rotation
        dump.background.scale = background.scale
      }

      if (brows.enabled) dump.brows = brows.color

      if (eyelashes.enabled) dump.eyelashes = eyelashes.color

      for (const [name, { strength }] of Object.entries(eyes))
        if (strength > 0) (dump.eyes ??= {})[name] = strength

      for (const [name, { enabled, color }] of Object.entries(eyesMakeup))
        if (enabled) (dump.eyesMakeup ??= {})[name] = color

      if (hair.enabled) dump.hair = hair.color

      if (lipstick.enabled) {
        dump.lipstick = lipstick.color
        for (const [name, { value }] of Object.entries(lipstickParams))
          (dump.lipstickParams ??= {})[name] = value
      }

      if (look.texture) dump.look = look.texture

      if (lut.texture) dump.lut = lut.texture

      for (const [name, { strength }] of Object.entries(morphs))
        if (strength > 0) (dump.morphs ??= {})[name] = strength

      for (const [name, { enabled, color }] of Object.entries(faceMakeup))
        if (enabled) (dump.faceMakeup ??= {})[name] = color

      for (const [name, { enabled, color, strength }] of Object.entries(skin))
        if (enabled || strength > 0) (dump.skin ??= {})[name] = color || strength

      if (softlight.strength > 0) dump.softlight = softlight.strength

      if (teethWhitening.strength > 0) dump.teethWhitening = teethWhitening.strength

      return dump
    },
  },
  template: /* HTML */ `
    <div
      class="is-flex is-flex-grow-1 is-flex-direction-column has-text-link has-text-centered bnb-features"
    >
      <h3 class="mb-2">Selected Features</h3>
      <p v-if="empty" class="mb-2 mt-2 bnb-features__no-features">No features selected</p>
      <div class="is-flex is-flex-grow-1 is-flex-direction-column pt-2 bnb-features__list">
        <section v-for="(features, name) in groups" class="mb-4 bnb-features__list-item">
          <h4 class="has-text-weight-bold mb-2">{{ name }}</h4>
          <b-taglist>
            <b-tag
              v-for="feature of features"
              :key="feature.name"
              type="is-white has-text-link pr-1"
              close-type="is-white has-text-grey"
              @close="feature.clear"
              closable
              attached
              ellipsis
            >
              {{ feature.name }}
            </b-tag>
          </b-taglist>
        </section>
      </div>

      <div class="pt-2 is-align-self-center">
        <b-button
          type="is-link is-small"
          @click="$emit('preset-download-request', serialize())"
          rounded
          outlined
          :disabled="empty"
        >
          Download preset
        </b-button>
        <b-tooltip label="Copy preset" append-to-body>
          <b-button
            class="pl-3 pr-3 bnb-tooltip"
            type="is-link is-small"
            icon-left="copy"
            @click="$emit('preset-copy-request', serialize())"
            rounded
            outlined
            :disabled="empty"
          />
        </b-tooltip>
      </div>
    </div>
  `,
}

style(/* CSS */ `
  .tooltip-content {
    opacity: 0.85;
  }
  .bnb-features {
    max-height: 100%;
  }
  .bnb-features__no-features {
    opacity: 0.5;
  }
  .bnb-features__list {
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 0.75rem;
    margin-right: -0.75rem;
  }
  @supports (scrollbar-gutter: stable) {
    .bnb-features__list {
      padding-right: 0rem;
      scrollbar-gutter: stable;
    }
  }
  .bnb-features__list-item {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }
  .bnb-features__list-item:last-child {
    margin-bottom: 0.75rem !important;
  }
  .bnb-features__list-item .tags .tag {
    margin-bottom: 0;
  }
  .bnb-features__list-item .has-addons {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    margin-bottom: 0.5rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`)
