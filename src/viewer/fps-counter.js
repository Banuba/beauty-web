import { style } from "../lib.js"

export default {
  data: () => ({ isOpen: false }),
  template: /* HTML */ `
    <section class="bnb-fps">
      <b-collapse
        aria-id="fps-counter"
        :class="[{'fps-panel-open': isOpen }, 'fps-panel']"
        animation="slide"
        :open="false"
      >
        <template #trigger>
          <b-button
            expanded
            id="fps-button"
            @click="isOpen = !isOpen"
            :aria-expanded="isOpen"
            aria-controls="fps-counter"
            :icon-right="isOpen ? 'chevron-up' : 'chevron-down'"
            :key="isOpen ? 'chevron-up' : 'chevron-down'"
            class="is-flex is-justify-content-space-between fps-button"
          >
            <span class="has-text-weight-bold">FPS</span>
          </b-button>
        </template>
        <div class="fps-info">
          <p class="is-flex is-justify-content-space-between">
            Webcam: <span class="has-text-weight-bold" id="cam"></span>
          </p>
          <p class="is-flex is-justify-content-space-between">
            Processing: <span class="has-text-weight-bold" id="processing"></span>
          </p>
          <p class="is-flex is-justify-content-space-between">
            Render: <span class="has-text-weight-bold" id="render"></span>
          </p>
        </div>
      </b-collapse>
    </section>
  `,
}

style(/* CSS */ `
  .bnb-fps {
    overflow: hidden;
    min-width: 8.75rem;
    color: #ffffff;
    font-size: 0.75rem;
    }
  .collapse-content {
    padding: 0.5rem 0.75rem;
  }
  .fps-panel {
    border-radius: 16px;
    background: rgb(10, 10, 10);
    opacity: 0.3;
    transition: opacity 0.25s ease-out;
  }
  .fps-panel:hover,
  .fps-panel-open {
    opacity: 0.5;
    transition: opacity 0.3s ease-in;
  }
  .fps-button {
    padding-right: 1rem;
    border: none;
    background: none;
    color: #ffffff;
    font-size: 0.75rem;
  }
  .fps-info {
    margin-top: -0.5rem;
  }
`)
