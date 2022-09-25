import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorSkill, SkillTypesEnum } from "@/models/ArlenorSkill";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillForm",
  props: {
    currentSkill: {
      type: ArlenorSkill,
      required: true
    },
  },
  components: {
    ToggleButton,
  },
  emits: ["submit"],

  data (props) {
    const allTypes: ArlenorEnum[] = Object.values(SkillTypesEnum).filter(skillEnum => {
      return (skillEnum.Code !== SkillTypesEnum.CompetenceArmure.Code
        && skillEnum.Code !== SkillTypesEnum.ProprieteCanalisation.Code
        && skillEnum.Code !== SkillTypesEnum.ProprieteTemps.Code);
    });

    return {
      allTypes,
      form: {
        name: props.currentSkill.name,
        description: props.currentSkill.description,
        codeType: props.currentSkill.codeType,
      },
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  validations: {
    form: {
      name: {
        required
      },
      description: {},
      codeType: {},
    },
  },

  methods: {
    submitForm() {
      const newSkill = new ArlenorSkill();
      newSkill.id = this.currentSkill.id;
      newSkill.name = this.form.name;
      newSkill.description = this.form.description;
      newSkill.codeType = this.form.codeType;
      this.$emit("submit", newSkill);
    },
  }
});
