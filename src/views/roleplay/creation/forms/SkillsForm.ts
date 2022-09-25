import SkillsSelectionTable from "@/components/skills-selection-table/SkillsSelectionTable.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorSkill, SkillTypesEnum } from "@/models/ArlenorSkill";
import { getListDefaultSkills } from "@/models/data/ListDefaultSkills";
import { getListRaceSkills } from "@/models/data/ListRaceSkills";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SkillsForm",
  components: {
    SkillsSelectionTable,
  },
  emits: ["changeStep", "previousStep", "nextStep"],
  
  data () {
    const store = useStore();

    const character: ArlenorCharacter = store.state.character;

    const skills = getListDefaultSkills().filter(skill => {
      return (skill.codeType !== SkillTypesEnum.ProprieteCanalisation.Code
        && skill.codeType !== SkillTypesEnum.ProprieteTemps.Code);
    });
    const defaultSkills: Ref<ArlenorSkill[]> = ref(skills);
    const racesSkills: Ref<ArlenorSkill[]> = ref(getListRaceSkills());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const idsSkills: Ref<any> = ref(character.idsSkills);
    const isNbSkillsValid: Ref<boolean | null> = ref(null);
    const level = character.level;

    return {
      store,
      level,
      defaultSkills, racesSkills,
      form: {
        idsSkills,
        isNbSkillsValid,
      },
      isModified: false,
      needConfirm: false,
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
      return this.store.state.allSkills || [];
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
      this.needConfirm = false,
      this.checkNbSkills();
      this.$emit("changeStep");
    },
    cancelForm() {
      if (this.isModified && !this.needConfirm) {
        this.needConfirm = true;
      } else {
        this.isModified = false;
        this.$emit("previousStep");
      }
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
