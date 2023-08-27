import PowersSelectionTable from "@/components/powers-selection-table/PowersSelectionTable.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
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
  },
  emits: ["previousStep", "nextStep"],
  
  data () {
    const store = useStore();

    const character: ArlenorCharacter = store.state.character;
    const level = character.level;
    const codeSpeciality: Ref<string | null> =
    (this.indexCrystal === 0) ? ref(character.codeSpeciality01) : ref(character.codeSpeciality02);
    const idsPowers: Ref<number[]> =
    (this.indexCrystal === 0) ? ref(character.idsPowers01) : ref(character.idsPowers02);
    const isNbPowersValid: Ref<boolean | null> = ref(null);

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

  watch: {
    allPowers: function() {
      this.checkOldPowers();
    }
  },

  methods: {
    changeSpeciality() {
      this.form.idsPowers = [];
      this.updateForm();
    },
    checkOldPowers() {
      const validIdsPowers = this.allPowers.map(power => power.id);
      this.form.idsPowers = this.form.idsPowers.filter(idPower => validIdsPowers.includes(idPower));
    },
    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },

    addPower(power: ArlenorPower) {
      this.form.idsPowers.push(power.id);
      this.updateForm();
    },
    removePower(power: ArlenorPower) {
      this.form.idsPowers = this.form.idsPowers.filter((idPower: number) => idPower !== power.id);
      this.updateForm();
    },
    checkNbPowers() {
      const powersSelected = this.allPowers.filter(power => this.form.idsPowers.includes(power.id)); 
      const nbRankS = powersSelected.filter(power => power.codeRank === PowerRanksEnum.Unique.Code).length;
      const nbRankA = powersSelected.filter(power => power.codeRank === PowerRanksEnum.TresRare.Code).length;
      const nbRankB = powersSelected.filter(power => power.codeRank === PowerRanksEnum.Rare.Code).length;
      const nbRankC = powersSelected.filter(power => power.codeRank === PowerRanksEnum.Commun.Code).length;
      
      this.form.isNbPowersValid = (
        nbRankS === this.level.maxRankS[this.indexCrystal]
        && nbRankA === this.level.maxRankA[this.indexCrystal]
        && nbRankB === this.level.maxRankB[this.indexCrystal]
        && nbRankC === this.level.maxRankC[this.indexCrystal]
      ) ? true : null;
    },

    checkPowers(spe: ArlenorSpeciality) {
      // Pour tester si une classe est éligible
      if (this.indexCrystal === 1) {
        const character: ArlenorCharacter = this.store.state.character;
        if (spe.code === character.codeSpeciality01) return false;
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
      const newCharacter = new ArlenorCharacter();
      const character: ArlenorCharacter = this.store.state.character;
      if (this.indexCrystal === 0) {
        newCharacter.codeSpeciality01 = this.form.codeSpeciality;
        newCharacter.idsPowers01 = this.form.idsPowers;
        newCharacter.codeSpeciality02 = character.codeSpeciality02;
        newCharacter.idsPowers02 = character.idsPowers02;
      } else {
        newCharacter.codeSpeciality01 = character.codeSpeciality01;
        newCharacter.idsPowers01 = character.idsPowers01;
        newCharacter.codeSpeciality02 = this.form.codeSpeciality;
        newCharacter.idsPowers02 = this.form.idsPowers;
      }
      this.store.commit("changeCharacterCrystals", newCharacter);
    }
  }
});
