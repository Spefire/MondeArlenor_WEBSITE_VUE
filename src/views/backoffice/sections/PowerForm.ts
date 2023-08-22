import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { ArlenorPower, PowerDurationsEnum, PowerRangesEnum, PowerRanksEnum, PowerTypesEnum } from "@/models/ArlenorPower";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PowerForm",
  props: {
    currentPower: {
      type: ArlenorPower,
      required: true
    },
  },
  components: {
    ToggleButton,
  },
  emits: ["submit"],

  data (props) {
    const allSpecialities = ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
    const allTypes = Object.values(PowerTypesEnum);
    const allRanks = Object.values(PowerRanksEnum);
    const allRanges = Object.values(PowerRangesEnum);
    const allDurations = Object.values(PowerDurationsEnum);

    let codeSpeciality = allSpecialities[0].code;
    if (props.currentPower) {
      codeSpeciality = props.currentPower.codeSpeciality;
    }

    return {
      allSpecialities,
      allTypes,
      allRanks, allRanges, allDurations,
      form: {
        name: props.currentPower.name,
        description: props.currentPower.description,
        codeType: props.currentPower.codeType,
        codeSpeciality,
        codeRank: props.currentPower.codeRank,
        codeRange: props.currentPower.codeRange,
        codeDuration: props.currentPower.codeDuration,
        chaneling: props.currentPower.chaneling,
        isVerified: props.currentPower.isVerified,
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
      codeSpeciality: {},
      codeRank: {},
      codeRange: {},
      codeDuration: {},
      chaneling: {},
      isVerified: {}
    },
  },

  methods: {
    submitForm() {
      const newPower = new ArlenorPower();
      newPower.id = this.currentPower.id;
      newPower.isVerified = this.form.isVerified;
      newPower.name = this.form.name;
      newPower.description = this.form.description;
      newPower.codeType = this.form.codeType;
      newPower.codeSpeciality = this.form.codeSpeciality;
      newPower.codeRank = this.form.codeRank;
      newPower.codeRange = this.form.codeRange;
      newPower.codeDuration = this.form.codeDuration;
      newPower.chaneling = this.form.chaneling;
      this.$emit("submit", newPower);
    },
  }
});
