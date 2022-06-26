import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { defineComponent, PropType, Ref, ref } from "vue";

export default defineComponent({
  name: "PowersTable",
  props: {
    allPowers: {
      type: Array as PropType<ArlenorPower[]>,
      required: true
    },
  },
  components: {},
  emits: ["edit", "delete"],

  setup() {
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const filteredPowers: Ref<ArlenorPower[]> = ref([]);

    const allGroups = ref(getListGroups().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedGroup: Ref<string | null> = ref(null);
    
    const allSpecialities = ref(getListSpecialities().sort((a, b) => a.name.localeCompare(b.name)));
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
      if (this.selectedGroup) this.filteredPowers = this.filteredPowers.filter(power => power.group.code === this.selectedGroup);
      if (this.selectedSpeciality) this.filteredPowers = this.filteredPowers.filter(power => {
        if (power.speciality) return (power.speciality.code === this.selectedSpeciality);
        else return true;
      });
      if (this.searchName) this.filteredPowers = this.filteredPowers.filter(power => power.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
      this.filteredPowers.sort((a, b) => a.name.localeCompare(b.name));
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
            
    getLibSpecialities(power: ArlenorPower) {
      if (power.speciality) return power.speciality?.name;
      else {
        const listSpe = this.allSpecialities.filter(spe => spe.group.code === power.group.code);
        let lib = "";
        listSpe.forEach((spe: ArlenorSpeciality, index: number) => {
          lib += spe.name;
          if (index < listSpe.length-1) lib += ", ";
        });
        return lib;
      }
    },
    getLibLevel(level: number) {
      if (level === 1) return "Inférieur";
      else if (level === 2) return "Intermédiaire";
      else return "Supérieur";
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