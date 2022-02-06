import { defineComponent } from "vue";

import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer
  },

  // eslint-disable-next-line
  setup() {
    return {};
  },

  mounted() {
    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }
});
