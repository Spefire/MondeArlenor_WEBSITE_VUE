import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

import PowersSection from "./sections/PowersSection.vue";
import QuizzSection from "./sections/QuizzSection.vue";
import ResultsSection from "./sections/ResultsSection.vue";
import SkillsSection from "./sections/SkillsSection.vue";

export default defineComponent({
  name: "BackofficeView",
  title: PageTitles.backoffice,
  components: {
    PowersSection,
    QuizzSection,
    ResultsSection,
    SkillsSection,
  },
  
  setup() {
    const backChoice = ref(1);
    return { backChoice };
  },

  methods: {
    changeBackChoice(choice: number) {
      this.backChoice = choice;
    },
  }
});
