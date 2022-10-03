import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { CaractNomEnum } from "@/models/ArlenorCaracts";
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const caractNomEnum: any = CaractNomEnum;

    const checkFor = props.currentSkill.codesCaracts.includes(CaractNomEnum.Force.Code);
    const checkHab = props.currentSkill.codesCaracts.includes(CaractNomEnum.Habilete.Code);
    const checkInt = props.currentSkill.codesCaracts.includes(CaractNomEnum.Intellect.Code);
    const checkTen = props.currentSkill.codesCaracts.includes(CaractNomEnum.Tenacite.Code);
    const checkCha = props.currentSkill.codesCaracts.includes(CaractNomEnum.Charisme.Code);
    const checkMag = props.currentSkill.codesCaracts.includes(CaractNomEnum.Magie.Code);

    return {
      allTypes,
      caractNomEnum,
      form: {
        name: props.currentSkill.name,
        description: props.currentSkill.description,
        codeType: props.currentSkill.codeType,
        checkFor, checkHab, checkInt,
        checkTen, checkCha, checkMag,
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
      checkFor: {}, checkHab: {}, checkInt: {},
      checkTen: {}, checkCha: {}, checkMag: {},
    },
  },

  methods: {
    submitForm() {
      const newSkill = new ArlenorSkill();
      newSkill.id = this.currentSkill.id;
      newSkill.name = this.form.name;
      newSkill.description = this.form.description;
      newSkill.codeType = this.form.codeType;
      if (this.form.checkFor) newSkill.codesCaracts.push(CaractNomEnum.Force.Code);
      if (this.form.checkHab) newSkill.codesCaracts.push(CaractNomEnum.Habilete.Code);
      if (this.form.checkInt) newSkill.codesCaracts.push(CaractNomEnum.Intellect.Code);
      if (this.form.checkTen) newSkill.codesCaracts.push(CaractNomEnum.Tenacite.Code);
      if (this.form.checkCha) newSkill.codesCaracts.push(CaractNomEnum.Charisme.Code);
      if (this.form.checkMag) newSkill.codesCaracts.push(CaractNomEnum.Magie.Code);
      this.$emit("submit", newSkill);
    },
  }
});
