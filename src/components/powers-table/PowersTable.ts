import { ArlenorPower } from "@/models/ArlenorPower";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "PowersTable",
  components: {},

  setup() {
    const allPowers: Ref<ArlenorPower[]> = ref([]);
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const filteredPowers: Ref<ArlenorPower[]> = ref([]);

    const allGroups = ref(getListGroups().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedGroup: Ref<string | null> = ref(null);
    
    const allSpecialities = ref(getListSpecialities().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedSpeciality: Ref<string | null> = ref(null);

    const searchName = ref("");

    return {
      allPowers, selectedPower, filteredPowers,
      allGroups, selectedGroup,
      allSpecialities, selectedSpeciality,
      searchName
    };
  },

  mounted() {
    this.loadPowers();
  },
  
  methods: {
    async loadPowers() {
      const allPowers = await api.readAllPower();
      console.warn("allPowers", allPowers);
      this.allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
      this.changeFilteredPowers();
    },

    changeFilteredPowers() {
      this.filteredPowers = this.allPowers;
      if (this.selectedGroup) this.filteredPowers = this.filteredPowers.filter(power => power.group.code === this.selectedGroup);
      /*if (this.selectedSpeciality) this.filteredSkills = this.filteredSkills.filter(skill => {
        return skill.specialities.find((spe: ArlenorSpeciality) => spe.code === this.selectedSpeciality) || (skill.specialities.length === 0 && skill.group.code === this.selectedGroup);
      });*/
      if (this.searchName) this.filteredPowers = this.filteredPowers.filter(power => power.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
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
      /*if (skill.specialities.length > 0) {
        let lib = "";
        skill.specialities.forEach((spe: ArlenorSpeciality, index: number) => {
          lib += spe.name;
          if (index < skill.specialities.length-1) lib += ", ";
        });
        return lib;
      } else {
        return "Toutes les spécialités";
      }*/
      // TODO : A supprimer
      return "Toutes les spécialités : " + power.name;
    },

    seeMore(power: ArlenorPower) {
      this.selectedPower = (this.selectedPower === power) ? null : power;
    }
  },
});