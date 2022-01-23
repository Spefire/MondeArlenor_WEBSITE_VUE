import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { ArlenorClass, getListClasses } from "@/models/ArlenorClass";
import { getListGroups } from "@/models/ArlenorGroup";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "ClassesView",
  title: PageTitles.classes,
  components: {
    SkillsTable,
  },

  setup() {
    const targetClass = getListClasses().find(cls => cls.code === "PALADIN");
    const currentClass: Ref<ArlenorClass | null> = ref(targetClass ? targetClass : null);

    const allGroups = getListGroups();    
    const allClasses = getListClasses();

    return { allClasses, allGroups, currentClass };
  },
});
