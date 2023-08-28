import SkillsSelectionTable from "@/components/skills-selection-table/SkillsSelectionTable.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

import CreationForm from "../form/CreationForm.vue";

export default defineComponent({
  name: "SkillsForm",
  components: { CreationForm, SkillsSelectionTable },
  emits: ["previousStep", "nextStep"],
  
  data () {
    const store = useStore();

    const character: ArlenorCharacter = store.state.character;
    const idsSkills: Ref<number[]> = ref(character.idsSkills);
    const isNbSkillsValid: Ref<boolean | null> = ref(null);
    const level = character.level;

    return {
      store,
      level,
      form: {
        idsSkills,
        isNbSkillsValid,
      },
      isModified: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },
  
  mounted() {
    this.store.commit("loadAllSkills");
    this.checkNbSkills();
  },

  computed: {
    allSkills(): ArlenorSkill[] {
      const skills: ArlenorSkill[] = this.store.state.allSkills || [];
      return skills.filter(skill => !skill.codeRace);
    },
  },

  watch: {
    allSkills: function() {
      this.checkOldSkills();
    }
  },

  validations: {
    form: {
      idsSkills: {},
      isNbSkillsValid: { required },
    },
  },

  methods: {
    checkOldSkills() {
      const validIdsSkills = this.allSkills.map(skill => skill.id);
      this.form.idsSkills = this.form.idsSkills.filter(idSkill => validIdsSkills.includes(idSkill));
    },
    addSkill(skill: ArlenorSkill) {
      this.form.idsSkills.push(skill.id);
      this.updateForm();
    },
    removeSkill(skill: ArlenorSkill) {
      this.form.idsSkills = this.form.idsSkills.filter((idSkill: number) => idSkill !== skill.id);
      this.updateForm();
    },
    checkNbSkills() {
      const nbSkills = this.form.idsSkills.length;
      this.form.isNbSkillsValid = (nbSkills === this.level.maxSkills) ? true : null;
    },
    updateForm() {
      this.isModified = true;
      this.checkNbSkills();
    },
    cancelForm() {
      this.isModified = false;
      this.$emit("previousStep");
    },
    submitForm() {
      this.save();
      this.isModified = false;
      this.$emit("nextStep");
    },
    save() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.idsSkills = this.form.idsSkills;
      this.store.commit("changeCharacterSkills", newCharacter);
    }
  }
});
