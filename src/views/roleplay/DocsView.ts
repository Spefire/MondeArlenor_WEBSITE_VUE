import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { getListClasses } from "@/models/ArlenorClass";
import { getListGroups } from "@/models/ArlenorGroup";
import { ArlenorRace, DifficultyEnum, getListRaces } from "@/models/ArlenorRace";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DocsView",
  title: PageTitles.documentation,
  components: {
    SkillsTable,
  },

  setup() {
    const allRaces = ref(getListRaces().filter(race => race.difficulty !== DifficultyEnum.Impossible.Code));
    const allClasses = ref(getListClasses());
    const allGroups = ref(getListGroups());

    return {
      allRaces, allClasses, allGroups
    };
  },

  methods: {
    getDescription(description: string, length = 80) {
      return description.slice(0, length) + "..."; 
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
    }
  }
});