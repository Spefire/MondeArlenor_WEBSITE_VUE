import { PageTitles } from "@/models/PagesTitles";
import { ref } from "vue";

export default {
  name: "HomeView",
  title: PageTitles.home,
  components: {},

  // eslint-disable-next-line
  setup() {
    const title = ref("Hello my wooooorld");

    return {
      title,
    };
  },
};
