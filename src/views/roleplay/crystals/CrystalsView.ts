import ArrowButton from "@/components/arrow-button/ArrowButton.vue";
import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CrystalsView",
  title: PageTitles.crystals,
  components: {
    ArrowButton,
    SkillsTable,
  },
  
  setup() {
    const allGroups = ref(getListGroups());
    const allSpecialities = ref(getListSpecialities());

    return { allGroups, allSpecialities };
  },

  methods: {
    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },
  }
});
