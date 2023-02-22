import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FactionsView",
  title: PageTitles.cercle,
  components: {
    HeadLayout,
  },

  setup() {
    const title = PageTitles.cercle;
    return { title };
  },
  
  computed: {
    imageLeft() {
      return require("./../../../assets/images/religion/angel.png");
    },
    imageRight() {
      return require("./../../../assets/images/religion/demon.png");
    },
  },
});
