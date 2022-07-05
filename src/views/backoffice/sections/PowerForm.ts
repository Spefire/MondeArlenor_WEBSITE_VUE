import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { ArlenorPower, PowerDurationsEnum, PowerRangesEnum, PowerRanksEnum, PowerTargetsEnum, PowerTypesEnum } from "@/models/ArlenorPower";
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
    const allTargets = Object.values(PowerTargetsEnum);

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
      allRanks, allRanges, allDurations, allTargets,
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
        codeTargets: props.currentPower.codeTargets,
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
      codeTargets: {},
      isVerified: {}
    },
  },

  methods: {
    toggleGroup() {
      this.isGroup = !this.isGroup;
    },
    submitForm() {
      const newPower = new ArlenorPower();
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
      newPower.codeTargets = this.form.codeTargets;
      this.$emit("submit", newPower);
    },
  }
});
