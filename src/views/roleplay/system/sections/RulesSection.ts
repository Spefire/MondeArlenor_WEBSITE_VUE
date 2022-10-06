import ArrowButton from "@/components/arrow-button/ArrowButton.vue";
import ExpandBloc from "@/components/expand-bloc/ExpandBloc.vue";
import { defineComponent, ref } from "vue";

import TableDifficulties from "./tables/TableDifficulties.vue";
import TableLevels from "./tables/TableLevels.vue";
import TableMarges from "./tables/TableMarges.vue";

export default defineComponent({
  name: "RulesSection",
  components: {
    ArrowButton,
    ExpandBloc,
    TableDifficulties,
    TableMarges,
    TableLevels,
  },

  setup() {
    const systemChoice = ref(1);
    const exampleChoice = ref(0);
    const fightChoice = ref(0);

    return {
      exampleChoice, systemChoice, fightChoice,
    };
  },

  methods: {
    changeExampleChoice(choice: number) {
      if (choice === this.exampleChoice) this.exampleChoice = 0;
      else this.exampleChoice = choice;
    },

    changeSystemChoice(choice: number) {
      this.systemChoice = choice;
    },

    changeFightChoice(choice: number) {
      if (choice === this.fightChoice) this.fightChoice = 0;
      else this.fightChoice = choice;
    },
  }
});
