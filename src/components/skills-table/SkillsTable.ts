import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorSkill, SkillTypesEnum } from "@/models/ArlenorSkill";
import { defineComponent, PropType, Ref, ref } from "vue";

import ToggleButton from "../toggle-button/ToggleButton.vue";
import SkillsDescription from "./SkillsDescription.vue";

export default defineComponent({
  name: "SkillsTable",
  props: {
    allSkills: {
      type: Array as PropType<ArlenorSkill[]>,
      required: true
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  components: { ToggleButton, SkillsDescription },
  emits: ["edit", "delete", "update"],

  setup() {
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);
    const filteredSkills: Ref<ArlenorSkill[]> = ref([]);
    const allTypes: ArlenorEnum[] = Object.values(SkillTypesEnum);
    const selectedType: Ref<string | null> = ref(null);
    const searchName = ref("");

    return {
      selectedSkill, filteredSkills,
      allTypes, selectedType,
      searchName
    };
  },
  
  watch: {
    allSkills: function() {
      this.changeFilteredSkills();
    }
  },
  
  mounted() {
    this.changeFilteredSkills();
  },

  methods: {
    changeFilteredSkills() {
      this.filteredSkills = this.allSkills;
      if (this.selectedType) this.filteredSkills = this.filteredSkills.filter(skill => {
        if (skill.type) return (skill.type.Code === this.selectedType);
        else return true;
      });
      if (this.searchName) this.filteredSkills = this.filteredSkills.filter(skill => skill.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
      this.filteredSkills.sort((a, b) => a.name.localeCompare(b.name));
      this.$emit("update", this.filteredSkills);
    },

    seeMore(skill: ArlenorSkill) {
      this.selectedSkill = (this.selectedSkill === skill) ? null : skill;
    },

    editSkill(skill: ArlenorSkill) {
      this.$emit("edit", skill);
    },
    deleteSkill(skill: ArlenorSkill) {
      this.$emit("delete", skill);
    }
  },
});