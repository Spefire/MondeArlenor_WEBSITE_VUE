import { PageTitles } from "@/models/PagesTitles";
import { defineComponent } from "vue";

import PersoSection from "./sections/PersoSection.vue";
import RulesSection from "./sections/RulesSection.vue";

export default defineComponent({
  name: "SystemView",
  title: PageTitles.system,
  components: {
    PersoSection,
    RulesSection,
  },

  setup() {
    return {};
  },
});
