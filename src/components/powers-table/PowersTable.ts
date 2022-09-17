import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import { defineComponent, PropType, Ref, ref } from "vue";

import PowerImage from "../power-image/PowerImage.vue";
import PowersDescription from "./PowersDescription.vue";

export default defineComponent({
  name: "PowersTable",
  props: {
    allPowers: {
      type: Array as PropType<ArlenorPower[]>,
      required: true
    },
  },
  components: { PowerImage, PowersDescription },
  emits: ["edit", "delete", "update"],

  setup() {
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const filteredPowers: Ref<ArlenorPower[]> = ref([]);
    
    const allSpecialities = ref(ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedSpeciality: Ref<string | null> = ref(null);

    const searchName = ref("");

    return {
      selectedPower, filteredPowers,
      allSpecialities, selectedSpeciality,
      searchName
    };
  },
  
  watch: {
    allPowers: function() {
      this.changeFilteredPowers();
    }
  },
  
  methods: {
    changeFilteredPowers() {
      this.filteredPowers = this.allPowers;
      if (this.selectedSpeciality) this.filteredPowers = this.filteredPowers.filter(power => {
        if (power.speciality) return (power.speciality.code === this.selectedSpeciality);
        else return true;
      });
      if (this.searchName) this.filteredPowers = this.filteredPowers.filter(power => power.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
      this.filteredPowers.sort((a, b) => a.name.localeCompare(b.name));
      this.$emit("update", this.filteredPowers);
    },
            
    getLibSpeGrp(power: ArlenorPower) {
      if (power.speciality) return power.speciality?.name + " (Classe)";
      else if (power.group) return power.group?.name + " (Groupe)";
      else return "";
    },

    seeMore(power: ArlenorPower) {
      this.selectedPower = (this.selectedPower === power) ? null : power;
    },

    editPower(power: ArlenorPower) {
      this.$emit("edit", power);
    },
    deletePower(power: ArlenorPower) {
      this.$emit("delete", power);
    }
  },
});