import { defineComponent } from "vue";

import ArrowButton from "../arrow-button/ArrowButton.vue";
import FooterLink from "../footer-link/FooterLink.vue";

export default defineComponent({
  name: "Footer",
  components: {
    ArrowButton,
    FooterLink,
  },
  setup: () => {
    return {};
  },
  computed: {
    displayLarge() {
      return this.$route.path !== "/";
    }
  }
});
