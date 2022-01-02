import { defineComponent, ref } from "vue";

import ArrowButton from "../arrow-button/ArrowButton.vue";
import FooterLink from "../footer-link/FooterLink.vue";

export default defineComponent({
  name: "Footer",
  components: {
    ArrowButton,
    FooterLink,
  },
  setup: () => {
    const displayLarge = ref(true);

    return {
      displayLarge
    };
  }
});
