import PowersSelectionTable from "@/components/powers-selection-table/PowersSelectionTable.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorCrystal } from "@/models/ArlenorCrystal";
import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent, ref, Ref } from "vue";
import { useStore } from "vuex";

import CreationForm from "../form/CreationForm.vue";

export default defineComponent({
  name: "CrystalForm",
  components: { CreationForm, PowersSelectionTable },
  props: {
    indexCrystal: {
      type: Number,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["previousStep", "nextStep"],
  
  data (props) {
    const store = useStore();

    const character: ArlenorCharacter = store.state.character;
    const codeSpeciality: Ref<string | null> = ref(character.crystals[props.indexCrystal].codeSpeciality);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const idsPowers: Ref<any> = ref(character.crystals[props.indexCrystal].idsPowers);
    const isNbPowersValid: Ref<boolean | null> = ref(null);
    const level = character.level;

    return {
      store,
      level,
      form: {
        codeSpeciality,
        idsPowers,
        isNbPowersValid,
      },
      isModified: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  mounted() {
    this.store.commit("loadAllPowers");
    this.checkNbPowers();
  },
  
  validations: {
    form: {
      codeSpeciality: { required },
      idsPowers: {},
      isNbPowersValid: { required },
    }
  },

  computed: {
    selectedSpeciality(): ArlenorSpeciality | null {
      if (!this.form.codeSpeciality) return null;
      const spe = ArlenorSpecialities.getSpeciality(this.form.codeSpeciality);
      return spe;
    },
    allPowers(): ArlenorPower[] {
      return this.store.state.allPowers || [];
    },
    allSpecialities(): ArlenorSpeciality[] {
      return ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
    },
    filteredPowers(): ArlenorPower[] {
      if (this.selectedSpeciality) {
        const list = this.allPowers.filter(power => power.speciality.code === this.selectedSpeciality?.code);
        list.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        return list;
      } else {
        return [];
      }
    },
  },

  methods: {
    changeSpeciality() {
      this.form.idsPowers = ArlenorCrystal.resetIdsPowers();
      this.updateForm();
    },
    
    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },

    addPower(power: ArlenorPower) {
      this.form.idsPowers[power.codeRank].push(power.id);
      this.updateForm();
    },
    removePower(power: ArlenorPower) {
      this.form.idsPowers[power.codeRank] = this.form.idsPowers[power.codeRank].filter((idPower: string) => idPower !== power.id);
      this.updateForm();
    },
    checkNbPowers() {
      const nbRankS = this.form.idsPowers[PowerRanksEnum.Unique.Code].length;
      const nbRankA = this.form.idsPowers[PowerRanksEnum.TresRare.Code].length;
      const nbRankB = this.form.idsPowers[PowerRanksEnum.Rare.Code].length;
      const nbRankC = this.form.idsPowers[PowerRanksEnum.Commun.Code].length;
      
      this.form.isNbPowersValid = (
        nbRankS === this.level.maxRankS[this.indexCrystal]
        && nbRankA === this.level.maxRankA[this.indexCrystal]
        && nbRankB === this.level.maxRankB[this.indexCrystal]
        && nbRankC === this.level.maxRankC[this.indexCrystal]
      ) ? true : null;
    },

    checkPowers(spe: ArlenorSpeciality) {
      if (this.indexCrystal === 1) {
        const character: ArlenorCharacter = this.store.state.character;
        if (spe.code === character.crystals[0].codeSpeciality) return false;
      }

      const list = this.allPowers.filter(power => power.speciality?.code === spe.code);
      if (list.length === 0) return false;

      const nbRankS = list.filter(power => power.codeRank === PowerRanksEnum.Unique.Code).length;
      if (nbRankS < this.level.maxRankS[this.indexCrystal]) return false;

      const nbRankA = list.filter(power => power.codeRank === PowerRanksEnum.TresRare.Code).length;
      if (nbRankA < this.level.maxRankA[this.indexCrystal]) return false;

      const nbRankB = list.filter(power => power.codeRank === PowerRanksEnum.Rare.Code).length;
      if (nbRankB < this.level.maxRankB[this.indexCrystal]) return false;

      const nbRankC = list.filter(power => power.codeRank === PowerRanksEnum.Commun.Code).length;
      if (nbRankC < this.level.maxRankC[this.indexCrystal]) return false;

      return true;
    },

    updateForm() {
      this.isModified = true;
      this.checkNbPowers();
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
      const newCrystal = new ArlenorCrystal();
      newCrystal.codeSpeciality = this.form.codeSpeciality;
      newCrystal.idsPowers = this.form.idsPowers;
      this.store.commit("changeCharacterCrystal", { index: this.indexCrystal, crystal: newCrystal });
    }
  }
});
