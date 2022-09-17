import PowersSelectionTable from "@/components/powers-selection-table/PowersSelectionTable.vue";
import { ArlenorCharacter, ArlenorCrystal } from "@/models/ArlenorCharacter";
import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent, ref, Ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CrystalForm",
  props: {
    indexCrystal: {
      type: Number,
      required: true,
    }
  },
  components: {
    PowersSelectionTable,
  },
  emits: ["changeStep", "previousStep", "nextStep"],
  
  data (props) {
    const store = useStore();

    const character: ArlenorCharacter = store.state.character;
    const codeGroup: Ref<string | null> = ref(character.crystals[props.indexCrystal].codeGroup);
    const codeSpeciality: Ref<string | null> = ref(character.crystals[props.indexCrystal].codeSpeciality);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const idsPowers: Ref<any> = ref(character.crystals[props.indexCrystal].idsPowers);
    const isNbPowersValid: Ref<boolean | null> = ref(null);
    const level = character.level;

    return {
      store,
      level,
      form: {
        codeGroup,
        codeSpeciality,
        idsPowers,
        isNbPowersValid,
      },
      isModified: false,
      needConfirm: false,
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
      codeGroup: { required },
      codeSpeciality: { required },
      idsPowers: {},
      isNbPowersValid: { required },
    }
  },

  computed: {
    selectedSpeciality(): ArlenorSpeciality | null {
      if (!this.form.codeSpeciality) return null;
      return ArlenorSpecialities.getSpeciality(this.form.codeSpeciality);
    },
    allPowers(): ArlenorPower[] {
      return this.store.state.allPowers || [];
    },
    allSpecialities(): ArlenorSpeciality[] {
      return ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
    },
    filteredPowers(): ArlenorPower[] {
      if (this.form.codeSpeciality) {
        const listGrp = this.form.codeGroup ?
          this.allPowers.filter(power => power.group?.code === this.form.codeGroup && !power.speciality) : [];
        const listSpe = this.form.codeSpeciality ?
          this.allPowers.filter(power => power.speciality?.code === this.form.codeSpeciality) : [];
        const list = listGrp.concat(listSpe);
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
      if (this.selectedSpeciality) this.form.codeGroup = this.selectedSpeciality.group.code;
      this.updateForm();
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
        nbRankS === this.level.maxRankS
        && nbRankA === this.level.maxRankA
        && nbRankB === this.level.maxRankB
        && nbRankC === this.level.maxRankC
      ) ? true : null;
    },

    updateForm() {
      this.isModified = true;
      this.needConfirm = false,
      this.checkNbPowers();
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
      const newCrystal = new ArlenorCrystal();
      newCrystal.codeGroup = this.form.codeGroup;
      newCrystal.codeSpeciality = this.form.codeSpeciality;
      this.store.commit("changeCharacterCrystal", { index: this.indexCrystal, crystal: newCrystal });
    }
  }
});
