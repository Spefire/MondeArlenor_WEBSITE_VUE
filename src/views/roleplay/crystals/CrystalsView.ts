import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListPowers } from "@/models/data/ListPowers";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "CrystalsView",
  title: PageTitles.crystals,
  components: {},
  
  watch: {
    $route() {
      this.updatePage();
    },
    currentSpeciality() {
      this.updateSpecialityPowers();
    }
  },

  setup() {
    const allSpecialities = ref(getListSpecialities());
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const specialityPowers: Ref<ArlenorPower[]> = ref([]);
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const levels: Ref<number[]> = ref([]);
    
    return { currentSpeciality, allSpecialities, selectedPower, specialityPowers, levels };
  },

  mounted() {
    this.updatePage();
  },

  methods: {
    // Navigation et chargements
    moveToSpe(code:string) {
      this.$router.push({ path: "crystals", query: { spe: code }});
    },

    updatePage() {
      if (this.$route.query.spe) {
        const targetSpeciality = getListSpecialities().find(spe => spe.code === this.$route.query.spe);
        this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
        if (this.currentSpeciality) this.currentSpeciality.setSkills();
        this.selectPower(null);
      } else {
        this.currentSpeciality = null;
      }
    },

    updateSpecialityPowers() {
      function onlyUnique(value: number, index: number, self: number[]) {
        return self.indexOf(value) === index;
      }
      if (this.currentSpeciality) {
        this.specialityPowers = getListPowers(this.currentSpeciality?.group.code, this.currentSpeciality?.code);
        this.levels = this.specialityPowers.map(power => power.level).filter(onlyUnique);
        this.levels.sort((a, b) => a - b);
      } else {
        this.specialityPowers = [];
        this.levels = [];
      }
    },
    
    // Affichages
    getPowersByLevel(level: number, isGroupPower: boolean): ArlenorPower[] {
      if (isGroupPower) {
        return this.specialityPowers.filter(power => power.level === level && !power.speciality);
      } else {
        return this.specialityPowers.filter(power => power.level === level && power.speciality);
      }
    },

    getLibLevel(level: number) {
      if (level === 1) return "inférieur";
      else if (level === 2) return "intermédiaire";
      else return "supérieur";
    },

    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },

    getCodCaracts(caracts: ArlenorEnum[]) {
      let lib = "";
      caracts.forEach((caract, index) => {
        lib += caract.Code;
        if (index < caracts.length-1) lib += " ou ";
      });
      return lib ? lib : "Aucun";
    },

    getCasting(timeCastingAbility: number) {
      if (!timeCastingAbility) return "Pas d'incantation";
      return "" + timeCastingAbility + " tours d'incantation";
    },
  
    getReloading(numberUseAbility: number) {
      if (!numberUseAbility) return "Utilisation illimitée";
      return "" + numberUseAbility + " utilisations par repos long";
    },

    // Actions
    selectPower(power: ArlenorPower | null) {
      this.selectedPower = power;
    },
  }
});
