import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorLevel } from "@/models/ArlenorLevel";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { defineComponent, PropType, ref, Ref } from "vue";

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
  components: { },
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
      this.types.sort((a, b) => b.Code.localeCompare(a.Code));
    },
    getSkillsByType(codeType: string) {
      return this.filteredSkills.filter(skill => skill.codeType === codeType);
    },
    changeSkill(value: boolean, skill: ArlenorSkill) {
      if (value) this.$emit("add", skill);
      else this.$emit("remove", skill);
    },
    checkSkill(skill: ArlenorSkill) {
      const skills = this.idsSkills;
      return skills.find(idSkill => idSkill === skill.id) ? true : false;
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