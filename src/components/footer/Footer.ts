import { PageTitles } from "@/models/PagesTitles";
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
    const pages = ref(PageTitles);
    return {
      pages
    };
  },
  computed: {
    displayLarge() {
      return this.$route.path !== "/";
    }
  }
});
