import { ArlenorSkill, SkillTypesEnum } from "@/models/ArlenorSkill";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SkillsDescription",
  props: {
    skill: {
      type: ArlenorSkill,
      required: true
    },
  },

  setup() {
    const skillTypesEnum = ref(SkillTypesEnum);

    return { skillTypesEnum };
  },
  
  methods: {},
});