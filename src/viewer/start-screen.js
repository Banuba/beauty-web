import { style, theme } from "../lib.js"
import { html, css } from "../utils.js"

export default {
  methods: {
    oninput(file) {
      this.$emit("photo-uploaded", file)
      this.$refs.form.reset()
    },
  },
  template: html`
    <form class="is-relative p-5 bnb-start-screen" ref="form">
      <b-upload
        @input="oninput($event)"
        ref="upload"
        accept="image/*"
        class="bnb-start-screen__upload-area"
        drag-drop
        expanded
      />
      <p
        class="is-flex is-flex-direction-column is-align-items-center has-text-link bnb-start-screen__upload-controls"
      >
        <b-button
          @click="$emit('camera-request')"
          type="is-link"
          icon-left="camera"
          rounded
          outlined
        >
          Use camera
        </b-button>
        <span class="m-2">drop or</span>
        <b-button
          @click="$refs['upload'].$el.click()"
          type="is-link"
          icon-left="image"
          rounded
          outlined
        >
          Upload photo
        </b-button>
      </p>
    </form>
  `,
}

style(css`
  .bnb-start-screen {
    width: 100%;
    height: 100%;
    max-width: 29.25rem;
    max-height: 26.5rem;
  }
  .bnb-start-screen__upload-area {
    width: 100%;
    height: 100%;
  }
  .bnb-start-screen__upload-area .upload-draggable {
    border-width: 2px;
    border-color: ${theme.colors.border};
    border-radius: 1rem;
  }
  .bnb-start-screen__upload-controls {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`)
