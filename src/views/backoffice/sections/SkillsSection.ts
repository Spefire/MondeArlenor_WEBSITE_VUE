import PopupBloc from "@/components/popup/PopupBloc.vue";
import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSkills } from "@/models/data/ListDefaultSkills";
import { getListRaceSkills } from "@/models/data/ListRaceSkills";
import supabase_api from "@/utils/supabase_api";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

import SkillForm from "./SkillForm.vue";

export default defineComponent({
  name: "SkillsSection",
  components: {
    SkillForm,
    SkillsTable,
    PopupBloc,
  },
    
  setup() {
    const store = useStore();
    const filteredSkills: Ref<ArlenorSkill[]> = ref([]);
    const currentSkill: Ref<ArlenorSkill | null> = ref(null);
    const skills = ArlenorSkills.getListDefaultSkills();
    const defaultSkills: Ref<ArlenorSkill[]> = ref(skills);
    const racesSkills: Ref<ArlenorSkill[]> = ref(getListRaceSkills());
    const canExport = ref(true);
    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const showDeletePopup = ref(false);
    return {
      store,
      filteredSkills, currentSkill, canExport,
      defaultSkills, racesSkills,
      showAddPopup, showEditPopup, showDeletePopup
    };
  },

  mounted() {
    this.store.commit("loadAllSkills", true);
  },

  computed: {
    allSkills(): ArlenorSkill[] {
      let skills:ArlenorSkill[] = this.store.state.allSkills || [];
      skills = skills.concat(this.defaultSkills);
      skills = skills.concat(this.racesSkills);
      skills.sort((a, b) => a.name.localeCompare(b.name));
      return skills;
    },
  },

  methods: {
    updateFilteredSkills(skills: ArlenorSkill[]) {
      this.filteredSkills = skills;
    },
    openAddSkill() {
      this.showAddPopup = true;
      this.currentSkill = new ArlenorSkill();
    },
    async closeAddSkill(skill: ArlenorSkill | boolean) {
      this.showAddPopup = false;
      if (skill instanceof ArlenorSkill) {
        skill.id = await supabase_api.postSkill(skill);

        // On recharge le store
        const newSkills = this.allSkills.slice();
        newSkills.push(skill);
        this.store.commit("changeAllSkills", newSkills);
      }
      this.currentSkill = null;
    },
    openEditSkill(skill: ArlenorSkill) {
      this.showEditPopup = true;
      this.currentSkill = skill;
    },
    async closeEditSkill(skill: ArlenorSkill | boolean) {
      this.showEditPopup = false;
      if (skill instanceof ArlenorSkill) {
        skill.id = await supabase_api.postSkill(skill);
        // await supabase_api.putSkill(skill);

        // On recharge le store
        /*const newSkills = this.allSkills.slice();
        const index = newSkills.findIndex(pow => pow.id === skill.id);
        newSkills[index] = skill;
        this.store.commit("changeAllSkills", newSkills);*/
      }
      this.currentSkill = null;
    },
    openDeleteSkill(skill: ArlenorSkill) {
      this.showDeletePopup = true;
      this.currentSkill = skill;
    },
    async closeDeleteSkill(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction && this.currentSkill) {
        await supabase_api.deleteSkill(this.currentSkill);

        // On recharge le store
        const newSkills = this.allSkills.slice().filter(skill => skill.id !== this.currentSkill?.id);
        this.store.commit("changeAllSkills", newSkills);
      }
      this.currentSkill = null;
    },
  }
});
