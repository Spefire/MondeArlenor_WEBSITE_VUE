import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";

export default {
  components: {
    HelloWorld,
  },

  // eslint-disable-next-line
  setup() {
    const title = ref("Hello my wooooorld");

    return {
      title,
    };
  },
};
