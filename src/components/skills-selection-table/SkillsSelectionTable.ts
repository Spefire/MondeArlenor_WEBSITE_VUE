import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorLevel } from "@/models/ArlenorLevel";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { defineComponent, PropType, ref, Ref } from "vue";

import SkillsDescription from "../skills-table/SkillsDescription.vue";

export default defineComponent({
  name: "SkillsSelectionTable",
  props: {
    level: {
      type: ArlenorLevel,
      required: true
    },
    idsSkills: {
      type: Array,
      required: true
    },
    filteredSkills: {
      type: Array as PropType<ArlenorSkill[]>,
      required: true
    },
  },
  components: { SkillsDescription },
  emits: ["add", "remove"],

  setup() {
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);
    const types: Ref<ArlenorEnum[]> = ref([]);

    return { selectedSkill, types };
  },

  mounted() {
    this.updateTypes();
  },

  watch: {
    filteredSkills: function() {
      this.updateTypes();
    }
  },

  methods: {
    updateTypes() {
      this.types = this.filteredSkills.map(skill => skill.type).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
    },
    getSkillsByType(codeType: string) {
      const skills = this.filteredSkills.filter(skill => skill.codeType === codeType);
      skills.sort((a, b) => a.name.localeCompare(b.name));
      return skills;
    },
    changeSkill(value: boolean, skill: ArlenorSkill) {
      if (value) this.$emit("add", skill);
      else this.$emit("remove", skill);
    },
    checkSkill(skill: ArlenorSkill) {
      return this.idsSkills.includes(skill.id);
    },
    checkDisabled(skill: ArlenorSkill) {
      if (this.checkSkill(skill)) return false;
      return this.idsSkills.length >= this.level.maxSkills;
    },
    seeMore(skill: ArlenorSkill) {
      this.selectedSkill = (this.selectedSkill === skill) ? null : skill;
    },
  },
});