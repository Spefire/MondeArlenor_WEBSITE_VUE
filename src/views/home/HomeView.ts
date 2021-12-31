import { ref } from "vue";

export default {
  name: "HomeView",

  // eslint-disable-next-line
  setup() {
    const title = ref("Hello my wooooorld");

    return {
      title,
    };
  },
};
