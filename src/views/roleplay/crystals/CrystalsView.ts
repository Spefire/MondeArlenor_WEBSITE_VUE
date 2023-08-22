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
    powersByRank(): ArlenorPower[] {
      const powers = this.specialityPowers.slice();
      powers.sort((a, b) => b.rank.Code.localeCompare(a.rank.Code));
      return powers;
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
        const list = spe.code ? this.allPowers.filter(power => power.speciality && power.speciality.code === spe.code) : [];
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

    selectPower(power: ArlenorPower | null) {
      this.selectedPower = power;
    },
  }
});
