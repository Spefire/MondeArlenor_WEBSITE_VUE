import SkillsSelectionTable from "@/components/skills-selection-table/SkillsSelectionTable.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSkills } from "@/models/data/ListDefaultSkills";
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

    const crystal01 = character.crystals[0];
    let spe01;
    if (crystal01) spe01 = crystal01.speciality;

    const crystal02 = character.crystals[1];
    let spe02;
    if (crystal02) spe02 = crystal02.speciality;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const idsSkills: Ref<any> = ref(character.idsSkills);
    const isNbSkillsValid: Ref<boolean | null> = ref(null);
    const level = character.level;

    const skills = ArlenorSkills.getListDefaultSkills();
    const defaultSkills: Ref<ArlenorSkill[]> = ref(skills);

    return {
      store,
      level,
      spe01, spe02,
      defaultSkills,
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
      let allSkills = this.store.state.allSkills || [];
      allSkills = allSkills.concat(this.defaultSkills);
      return allSkills;
    },
  },

  validations: {
    form: {
      idsSkills: {},
      isNbSkillsValid: { required },
    },
  },

  methods: {
    addSkill(skill: ArlenorSkill) {
      this.form.idsSkills.push(skill.id);
      this.updateForm();
    },
    removeSkill(skill: ArlenorSkill) {
      this.form.idsSkills = this.form.idsSkills.filter((idSkill: string) => idSkill !== skill.id);
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
