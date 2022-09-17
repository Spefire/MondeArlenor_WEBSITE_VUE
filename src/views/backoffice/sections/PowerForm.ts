import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { ArlenorPower, PowerDurationsEnum, PowerRangesEnum, PowerRanksEnum, PowerTestsEnum, PowerTypesEnum } from "@/models/ArlenorPower";
import { ArlenorGroups } from "@/models/data/ListGroups";
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
    const allGroups = ArlenorGroups.getListGroups().sort((a, b) => a.name.localeCompare(b.name));
    const allSpecialities = ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
    const allTypes = Object.values(PowerTypesEnum);
    const allRanks = Object.values(PowerRanksEnum);
    const allRanges = Object.values(PowerRangesEnum);
    const allDurations = Object.values(PowerDurationsEnum);
    const allTests = Object.values(PowerTestsEnum);

    let isGroup = false;
    let codeGroup = allGroups[0].code;
    let codeSpeciality = allSpecialities[0].code;
    if (props.currentPower.codeGroup) {
      isGroup = true;
      codeGroup = props.currentPower.codeGroup;
    } else if (props.currentPower.codeSpeciality) {
      isGroup = false;
      codeSpeciality = props.currentPower.codeSpeciality;
    }

    return {
      allGroups,
      allSpecialities,
      allTypes,
      allRanks, allRanges, allDurations, allTests,
      isGroup,
      form: {
        name: props.currentPower.name,
        description: props.currentPower.description,
        codeType: props.currentPower.codeType,
        codeGroup,
        codeSpeciality,
        codeRank: props.currentPower.codeRank,
        codeRange: props.currentPower.codeRange,
        codeDuration: props.currentPower.codeDuration,
        chaneling: props.currentPower.chaneling,
        codeTests: props.currentPower.codeTests,
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
      codeGroup: {},
      codeSpeciality: {},
      codeRank: {},
      codeRange: {},
      codeDuration: {},
      chaneling: {},
      codeTests: {},
      isVerified: {}
    },
  },

  methods: {
    toggleGroup() {
      this.isGroup = !this.isGroup;
    },
    submitForm() {
      const newPower = new ArlenorPower();
      newPower.id = this.currentPower.id;
      newPower.isVerified = this.form.isVerified;
      newPower.name = this.form.name;
      newPower.description = this.form.description;
      newPower.codeType = this.form.codeType;
      if (this.isGroup) {
        newPower.codeGroup = this.form.codeGroup;
        newPower.codeSpeciality = null;
      } else {
        newPower.codeGroup = null;
        newPower.codeSpeciality = this.form.codeSpeciality;
      }
      newPower.codeRank = this.form.codeRank;
      newPower.codeRange = this.form.codeRange;
      newPower.codeDuration = this.form.codeDuration;
      newPower.chaneling = this.form.chaneling;
      newPower.codeTests = this.form.codeTests;
      this.$emit("submit", newPower);
    },
  }
});
