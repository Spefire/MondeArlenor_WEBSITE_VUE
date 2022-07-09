import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorGroup } from "@/models/ArlenorGroup";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { ArlenorGroups } from "@/models/data/ListGroups";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import useVuelidate from "@vuelidate/core";
import { defineComponent, ref, Ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CrystalForm",
  props: {
    currentCrystal: {
      type: Number,
      required: true,
    }
  },
  components: {},
  emits: ["changeStep", "previousStep", "nextStep"],
  
  data () {
    const store = useStore();
    
    const selectedPower: Ref<ArlenorPower | null> = ref(null);

    const selectedGroup: Ref<ArlenorGroup | null> = ref(null);
    const selectedGrpCode: Ref<string | null> = ref(null);
    
    const selectedSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const selectedSpeCode: Ref<string | null> = ref(null);
    const ranks: Ref<ArlenorEnum[]> = ref([]);

    return {
      store,
      selectedPower,
      selectedGrpCode, selectedGroup,
      selectedSpeCode, selectedSpeciality,
      ranks,
      form: {},
      isModified: false,
      needConfirm: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  mounted() {
    this.store.commit("loadAllPowers");
  },
  
  validations: {
    form: {},
  },

  computed: {
    allPowers(): ArlenorPower[] {
      return this.store.state.allPowers || [];
    },
    allGroups(): ArlenorGroup[] {
      return ArlenorGroups.getListGroups().sort((a, b) => a.name.localeCompare(b.name));
    },
    allSpecialities(): ArlenorSpeciality[] {
      return ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
    },
    filteredSpecialities(): ArlenorSpeciality[] {
      if (this.selectedGrpCode) {
        return this.allSpecialities.filter(spe => spe.group.code == this.selectedGrpCode);
      } else {
        return this.allSpecialities.slice();
      }
    },
    filteredPowers(): ArlenorPower[] {
      if (this.selectedSpeciality) {
        const listGrp = this.selectedGrpCode ? this.allPowers.filter(power => power.group?.code === this.selectedGrpCode && !power.speciality) : [];
        const listSpe = this.selectedSpeCode ? this.allPowers.filter(power => power.speciality?.code === this.selectedSpeCode) : [];
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
    changeGroup() {
      this.selectedGroup = this.selectedGrpCode ? this.allGroups.find(grp => grp.code == this.selectedGrpCode) || null  : null;
      this.selectedSpeciality = null;
      this.selectedSpeCode = null;
    },
    changeSpeciality() {
      this.selectedSpeciality = this.selectedSpeCode ? this.allSpecialities.find(spe => spe.code == this.selectedSpeCode) || null : null;
      if (this.selectedSpeciality) {
        this.selectedGroup = this.selectedSpeciality.group;
        this.selectedGrpCode = this.selectedSpeciality.group.code;
        this.ranks = this.filteredPowers.map(power => power.rank).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
        this.ranks.sort((a, b) => b.Code.localeCompare(a.Code));
      }
    },
    seeMore(power: ArlenorPower) {
      this.selectedPower = (this.selectedPower?.code === power.code) ? null : power;
    },

    getPowersByRank(rank: string) {
      return this.filteredPowers.filter(power => power.codeRank === rank);
    },
    addPower(power: ArlenorPower) {
      console.warn(power);
    },

    updateForm() {
      this.isModified = true;
      this.needConfirm = false,
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
      /*const newCharacter = new ArlenorCharacter();
      this.store.commit("changeCharacterIdentity", newCharacter);*/
    }
  }
});
