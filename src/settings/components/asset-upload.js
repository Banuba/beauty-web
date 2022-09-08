import { style, theme } from "../../lib.js"
import { html, css } from "../../utils.js"

export default {
  props: {
    accept: {
      type: String,
      default: "image/*",
    },
  },
  template: html`
    <b-upload
      class="is-justify-content-center is-align-items-center bnb-asset-upload"
      :accept="accept"
    >
      <p class="is-flex is-flex-direction-column has-text-link has-text-centered">
        <span class="is-size-1 has-text-weight-light mb-2 bnb-asset-upload__icon">+</span>
        <span class="is-uppercase">Add</span>
      </p>
    </b-upload>
  `,
}

style(css`
  .bnb-asset-upload {
    width: 6rem;
    height: 6rem;
    border-radius: 16px;
    border: 2px solid ${theme.colors.borderLight};
    cursor: pointer;
  }
  .bnb-asset-upload__icon {
    line-height: 0.5;
  }
  .bnb-asset-upload:hover {
    border-color: ${theme.colors.border};
  }
  .bnb-asset-upload:focus + img {
    border-color: ${theme.colors.base};
  }
`)
