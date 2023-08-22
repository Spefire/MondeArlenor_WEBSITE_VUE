import PowerImage from "@/components/power-image/PowerImage.vue";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CrystalsView",
  title: PageTitles.crystals,
  components: { PowerImage },
  
  watch: {
    $route() {
      this.updatePage();
    },
    currentSpeciality() {
      this.updateSpecialityPowers();
    },
    allPowers() {
      this.updateSpecialityPowers();
    }
  },

  setup() {
    const store = useStore();
    const allSpecialities = ref(ArlenorSpecialities.getListSpecialities());
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const specialityPowers: Ref<ArlenorPower[]> = ref([]);
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const ranks: Ref<ArlenorEnum[]> = ref([]);
    
    return { store, allSpecialities, currentSpeciality, selectedPower, specialityPowers, ranks };
  },

  mounted() {
    this.updatePage();
    this.store.commit("loadAllPowers");
  },

  computed: {
    allPowers(): ArlenorPower[] {
      return this.store.state.allPowers || [];
    },
  },

  methods: {
    moveToSpe(code:string) {
      this.$router.push({ path: "crystals", query: { spe: code }});
    },

    updatePage() {
      if (this.$route.query.spe) {
        const targetSpeciality = ArlenorSpecialities.getListSpecialities().find(spe => spe.code === this.$route.query.spe);
        this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
        this.selectPower(null);
      } else {
        this.currentSpeciality = null;
      }
    },

    updateSpecialityPowers() {
      if (this.currentSpeciality) {
        const spe = this.currentSpeciality;
        const listGrp = spe.group.code ? this.allPowers.filter(power => power.group && power.group.code === spe.group.code && !power.speciality) : [];
        const listSpe = spe.code ? this.allPowers.filter(power => power.speciality && power.speciality.code === spe.code) : [];
        const list = listGrp.concat(listSpe);
        list.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this.specialityPowers = list;
        this.ranks = this.specialityPowers.map(power => power.rank).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
        this.ranks.sort((a, b) => b.Code.localeCompare(a.Code));
      } else {
        this.specialityPowers = [];
        this.ranks = [];
      }
    },
    
    // Affichages
    getPowersSection(isGroupPower: boolean): ArlenorPower[] {
      if (isGroupPower) {
        return this.specialityPowers.filter(power => !power.speciality).sort((a, b) => b.rank.Code.localeCompare(a.rank.Code));
      } else {
        return this.specialityPowers.filter(power => power.speciality).sort((a, b) => b.rank.Code.localeCompare(a.rank.Code));
      }
    },

    // Actions
    selectPower(power: ArlenorPower | null) {
      this.selectedPower = power;
    },
  }
});
