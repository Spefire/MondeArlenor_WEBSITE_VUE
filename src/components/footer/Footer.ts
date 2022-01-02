import { defineComponent, ref } from "vue";

import FooterLink from "../footer-link/FooterLink.vue";

export default defineComponent({
  name: "Footer",
  components: {
    FooterLink,
  },
  setup: () => { 
    const displayLarge = ref(false);

    return {
      displayLarge
    };
  }
});
