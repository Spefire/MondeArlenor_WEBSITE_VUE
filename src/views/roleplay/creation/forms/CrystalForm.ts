import { ArlenorGroup } from "@/models/ArlenorGroup";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSpecialities } from "@/models/data/ListSpecialities";
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
    const levels: Ref<number[]> = ref([]);

    return {
      store,
      selectedPower,
      selectedGrpCode, selectedGroup,
      selectedSpeCode, selectedSpeciality,
      levels,
      form: {},
      isModified: false,
      needConfirm: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },
  
  validations: {
    form: {},
  },

  computed: {
    allGroups(): ArlenorGroup[] {
      return getListGroups().sort((a, b) => a.name.localeCompare(b.name));
    },
    allSpecialities(): ArlenorSpeciality[] {
      return getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
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
        return []; // getListPowers(this.selectedSpeciality?.group.code, this.selectedSpeciality?.code);
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
      function onlyUnique(value: number, index: number, self: number[]) {
        return self.indexOf(value) === index;
      }
      this.selectedSpeciality = this.selectedSpeCode ? this.allSpecialities.find(spe => spe.code == this.selectedSpeCode) || null : null;
      if (this.selectedSpeciality) {
        this.selectedGroup = this.selectedSpeciality.group;
        this.selectedGrpCode = this.selectedSpeciality.group.code;

        // Mise à jour des niveaux
        this.levels = this.filteredPowers.map(power => power.level).filter(onlyUnique);
        this.levels.sort((a, b) => a - b);
      }
    },
    seeMore(power: ArlenorPower) {
      this.selectedPower = (this.selectedPower?.code === power.code) ? null : power;
    },

    getLibLevel(level: number) {
      if (level === 1) return "inférieur";
      else if (level === 2) return "intermédiaire";
      else if (level === 3) return "supérieur";
      else return "inconnu";
    },
    getPowersByLevel(level: number) {
      return this.filteredPowers.filter(power => power.level === level);
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
