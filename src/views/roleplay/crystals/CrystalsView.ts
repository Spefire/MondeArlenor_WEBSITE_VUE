import PowerImage from "@/components/power-image/PowerImage.vue";
import { ArlenorArchetype } from "@/models/ArlenorArchetype";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
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
    },
    allSkills() {
      this.updateSpecialityPowers();
    },
    allArchetypes() {
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
    this.store.commit("loadAllSkills");
    this.store.commit("loadAllArchetypes");
  },

  computed: {
    allPowers(): ArlenorPower[] {
      return this.store.state.allPowers || [];
    },
    allSkills(): ArlenorSkill[] {
      return this.store.state.allSkills || [];
    },
    allArchetypes(): ArlenorArchetype[] {
      return this.store.state.allArchetypes || [];
    },
  },

  methods: {
    moveToSpe(code:string) {
      this.$router.push({ path: "crystals", query: { spe: code }});
    },

    getRankPowers(rank: ArlenorEnum): ArlenorPower[] {
      const powers = this.specialityPowers.filter(power => power.rank.Code === rank.Code);
      powers.sort((a, b) => b.rank.Code.localeCompare(a.rank.Code));
      return powers;
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
        // Archetypes
        const archetypes = this.allArchetypes.filter(arch => arch.codeSpeciality === this.currentSpeciality?.code);
        if (this.currentSpeciality && archetypes.length > 0) {
          this.currentSpeciality.archetype01 = archetypes[0];
          const skill = this.allSkills.find(skill => skill.id === this.currentSpeciality?.archetype01?.idSkill);
          if (skill) this.currentSpeciality.archetype01.skill = skill;
        }
        if (this.currentSpeciality && archetypes.length > 1) {
          this.currentSpeciality.archetype02 = archetypes[1];
          const skill = this.allSkills.find(skill => skill.id === this.currentSpeciality?.archetype02?.idSkill);
          if (skill) this.currentSpeciality.archetype02.skill = skill;
        }

        // Pouvoirs
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
