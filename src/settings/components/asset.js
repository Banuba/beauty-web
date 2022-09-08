import { style, theme } from "../../lib.js"
import { html, css } from "../../utils.js"

export default {
  props: ["cover", "title", "active"],
  template: html`
    <b-tooltip :label="title" append-to-body>
      <label class="bnb-asset is-inline-block is-relative is-clipped">
        <input type="radio" name="asset" :checked="active" @change="$emit('change')" />
        <img :src="cover" />
      </label>
    </b-tooltip>
  `,
}

style(css`
  .tooltip-content {
    opacity: 0.85;
  }
  .bnb-asset {
    width: 6rem;
    height: 6rem;
    border-radius: 16px;
    cursor: pointer;
  }
  .bnb-asset input[type="radio"] {
    position: absolute;
    appearance: none;
  }
  .bnb-asset:hover input[type="radio"] + img {
    border-color: ${theme.colors.border};
  }
  .bnb-asset input[type="radio"]:focus + img,
  .bnb-asset input[type="radio"]:checked + img {
    border-color: ${theme.colors.base};
  }
  .bnb-asset img {
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.borderLight};
    border-radius: inherit;
  }
`)
