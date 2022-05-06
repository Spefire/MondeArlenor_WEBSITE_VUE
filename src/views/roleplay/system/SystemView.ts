import ArrowButton from "@/components/arrow-button/ArrowButton.vue";
import ExpandBloc from "@/components/expand-bloc/ExpandBloc.vue";
import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { ArlenorRace, DifficultyEnum } from "@/models/ArlenorRace";
import { getListGroups } from "@/models/data/ListGroups";
import { getListRaces } from "@/models/data/ListRaces";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SystemView",
  title: PageTitles.system,
  components: {
    ArrowButton,
    ExpandBloc,
    SkillsTable,
  },

  setup() {
    const allRaces = ref(getListRaces().filter(race => race.difficulty !== DifficultyEnum.Impossible.Code));
    const allSpecialities = ref(getListSpecialities());
    const allGroups = ref(getListGroups());
    const persoChoice = ref(1);
    const caractChoice = ref(0);

    return {
      allRaces, allSpecialities, allGroups, persoChoice, caractChoice
    };
  },

  methods: {
    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },

    getDifficultyColor(race: ArlenorRace) {
      if (race.difficulty === DifficultyEnum.Facile.Code)
        return "text-green";
      if (race.difficulty === DifficultyEnum.Normale.Code)
        return "text-yellow";
      if (race.difficulty === DifficultyEnum.Difficile.Code)
        return "text-red";
      else return "";
    }, 

    getDifficultyLibelle(race: ArlenorRace) {
      const lib = "Difficulté : ";
      if (race.difficulty === DifficultyEnum.Facile.Code)
        return lib + DifficultyEnum.Facile.Libelle;
      if (race.difficulty === DifficultyEnum.Normale.Code)
        return lib + DifficultyEnum.Normale.Libelle;
      if (race.difficulty === DifficultyEnum.Difficile.Code)
        return lib + DifficultyEnum.Difficile.Libelle;
      else return "";
    },

    changePersoChoice(choice: number) {
      this.persoChoice = choice;
    },

    changeCaractChoice(choice: number) {
      if (choice === this.caractChoice) this.caractChoice = 0;
      else this.caractChoice = choice;
    }
  }
});
