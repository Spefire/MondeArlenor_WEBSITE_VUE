import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { getListClasses } from "@/models/ArlenorClass";
import { getListGroups } from "@/models/ArlenorGroup";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DocsView",
  title: PageTitles.documentation,
  components: {
    SkillsTable,
  },

  setup() {
    const allClasses = ref(getListClasses());
    const allGroups = ref(getListGroups());

    return {
      allClasses, allGroups
    };
  },

  methods: {
    getDescription(description: string) {
      return description.slice(0, 80) + "..."; 
    }
  }
});
