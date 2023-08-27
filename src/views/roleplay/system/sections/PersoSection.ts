import ArrowButton from "@/components/arrow-button/ArrowButton.vue";
import ExpandBloc from "@/components/expand-bloc/ExpandBloc.vue";
import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { CaractDescriptionEnum } from "@/models/ArlenorCaracts";
import { ArlenorRace, DifficultyEnum } from "@/models/ArlenorRace";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { getListRaces } from "@/models/data/ListRaces";
import { getListRoles } from "@/models/data/ListRoles";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PersoSection",
  components: {
    ArrowButton,
    ExpandBloc,
    SkillsTable,
  },

  setup() {
    const store = useStore();
    const caractDescriptionEnum = CaractDescriptionEnum;
    const allRaces = ref(getListRaces().filter(race => race.difficulty !== DifficultyEnum.Impossible.Code));
    const allSpecialities = ref(ArlenorSpecialities.getListSpecialities());
    const allRoles = ref(getListRoles());
    const persoChoice = ref(1);
    const caractChoice = ref(0);
    const roleChoice = ref("");
    const finitionChoice = ref(0);

    return {
      store,
      caractDescriptionEnum,
      allRaces, allSpecialities, allRoles,
      persoChoice, caractChoice, roleChoice, finitionChoice,
    };
  },

  mounted() {
    this.store.commit("loadAllSkills");
  },

  computed: {
    allSkills(): ArlenorSkill[] {
      return this.store.state.allSkills || [];
    },
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

    getSpecialities(roleCode: string) {
      return this.allSpecialities.filter(spe => spe.role.code === roleCode);
    },

    changePersoChoice(choice: number) {
      this.persoChoice = choice;
    },

    changeCaractChoice(choice: number) {
      if (choice === this.caractChoice) this.caractChoice = 0;
      else this.caractChoice = choice;
    },

    changeRoleChoice(choice: string) {
      if (choice === this.roleChoice) this.roleChoice = "";
      else this.roleChoice = choice;
    },

    changeFinitionChoice(choice: number) {
      if (choice === this.finitionChoice) this.finitionChoice = 0;
      else this.finitionChoice = choice;
    },
  }
});
