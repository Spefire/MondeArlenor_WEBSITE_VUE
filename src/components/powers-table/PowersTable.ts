import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorGroups } from "@/models/data/ListGroups";
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

    const allGroups = ref(ArlenorGroups.getListGroups().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedGroup: Ref<string | null> = ref(null);
    
    const allSpecialities = ref(ArlenorSpecialities.getListSpecialities().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedSpeciality: Ref<string | null> = ref(null);

    const searchName = ref("");

    return {
      selectedPower, filteredPowers,
      allGroups, selectedGroup,
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
      if (this.selectedGroup) this.filteredPowers = this.filteredPowers.filter(power => {
        if (power.group) return (power.group.code === this.selectedGroup);
        else if (power.speciality) return (power.speciality.group.code === this.selectedGroup);
        else return true;
      });
      if (this.selectedSpeciality) this.filteredPowers = this.filteredPowers.filter(power => {
        if (power.speciality) return (power.speciality.code === this.selectedSpeciality);
        else return true;
      });
      if (this.searchName) this.filteredPowers = this.filteredPowers.filter(power => power.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
      this.filteredPowers.sort((a, b) => a.name.localeCompare(b.name));
      this.$emit("update", this.filteredPowers);
    },
    changeGroup() {
      this.selectedSpeciality = null;
      this.changeFilteredPowers();
    },
    changeSpeciality() {
      const targetSpeciality = this.selectedSpeciality ? this.allSpecialities.find(spe => spe.code == this.selectedSpeciality) : null;
      this.selectedGroup = targetSpeciality ? targetSpeciality.group.code : null;
      this.changeFilteredPowers();
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