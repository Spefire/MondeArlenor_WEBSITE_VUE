import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { ArlenorRace, DifficultyEnum } from "@/models/ArlenorRace";
import { getListClasses } from "@/models/data/ListClasses";
import { getListGroups } from "@/models/data/ListGroups";
import { getListRaces } from "@/models/data/ListRaces";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DocumentationView",
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
    }
  }
});
