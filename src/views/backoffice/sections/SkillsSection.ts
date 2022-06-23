import { ArlenorSkill } from "@/models/ArlenorSkill";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "SkillsSection",
  components: {},
    
  setup() {
    const allSkills: Ref<ArlenorSkill[]> = ref([]);
    return { allSkills };
  },

  mounted() {
    this.loadSkills();
  },

  methods: {
    async loadSkills() {
      const allSkills = await api.readAllSkill();
      console.warn("allSkills", allSkills);
      this.allSkills = allSkills;
    },
  }
});
