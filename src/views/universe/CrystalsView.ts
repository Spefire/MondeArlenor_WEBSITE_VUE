import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CrystalsView",
  title: PageTitles.crystals,
  components: {
    HeadLayout,
  },

  setup() {
    const title = PageTitles.crystals;
    return { title };
  },
  
  computed: {
    imageLeft() {
      return require("./../../assets/images/crystals/crystals_left.png");
    },
    imageRight() {
      return require("./../../assets/images/crystals/crystals_right.png");
    },
  },
});
