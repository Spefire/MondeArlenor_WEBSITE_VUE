import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MagicView",
  title: PageTitles.magic,
  components: {
    HeadLayout,
  },

  setup() {
    const title = PageTitles.magic;
    return { title };
  },
  
  computed: {
    imageLeft() {
      return require("./../../assets/images/magic/magic_left.png");
    },
    imageRight() {
      return require("./../../assets/images/magic/magic_right.png");
    },
  },
});
