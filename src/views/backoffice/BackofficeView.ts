import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

import CharactersSection from "./sections/CharactersSection.vue";
import PowersSection from "./sections/PowersSection.vue";
import QuizzSection from "./sections/QuizzSection.vue";
import ResultsSection from "./sections/ResultsSection.vue";
import SkillsSection from "./sections/SkillsSection.vue";

export default defineComponent({
  name: "BackofficeView",
  title: PageTitles.backoffice,
  components: {
    CharactersSection,
    PowersSection,
    QuizzSection,
    ResultsSection,
    SkillsSection,
  },
  
  setup() {
    const backChoice = ref(3);
    return { backChoice };
  },

  methods: {
    changeBackChoice(choice: number) {
      this.backChoice = choice;
    },
  }
});
