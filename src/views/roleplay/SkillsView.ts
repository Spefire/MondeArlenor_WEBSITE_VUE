import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsView",
  title: PageTitles.skills,
  components: {
    SkillsTable,
  },

  setup() {
    return {};
  },
});
