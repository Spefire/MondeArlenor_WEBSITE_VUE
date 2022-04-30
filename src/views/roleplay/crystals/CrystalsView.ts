import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListSkills } from "@/models/data/ListSkills";
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
      this.updateSpecialitySkills();
    }
  },

  setup() {
    const allSpecialities = ref(getListSpecialities());
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const specialitySkills: Ref<ArlenorSkill[]> = ref([]);
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);
    const levels: Ref<number[]> = ref([]);
    
    return { currentSpeciality, allSpecialities, selectedSkill, specialitySkills, levels };
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
        if (this.currentSpeciality) this.currentSpeciality.setAbilities();
        this.selectSkill(null);
      } else {
        this.currentSpeciality = null;
      }
    },

    updateSpecialitySkills() {
      function onlyUnique(value: number, index: number, self: number[]) {
        return self.indexOf(value) === index;
      }
      if (this.currentSpeciality) {
        this.specialitySkills = getListSkills(this.currentSpeciality?.group.code, this.currentSpeciality?.code);
        this.levels = this.specialitySkills.map(skill => skill.level).filter(onlyUnique);
        this.levels.sort((a, b) => a - b);
      } else {
        this.specialitySkills = [];
        this.levels = [];
      }
    },
    
    // Affichages
    getSkillsByLevel(level: number, isGroupSkill: boolean): ArlenorSkill[] {
      if (isGroupSkill) {
        return this.specialitySkills.filter(skill => skill.level === level && !skill.speciality);
      } else {
        return this.specialitySkills.filter(skill => skill.level === level && skill.speciality);
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
  
    getReloading(timeReloadingAbility: number) {
      if (!timeReloadingAbility) return "Pas de rechargement";
      return "" + timeReloadingAbility + " tours de rechargement";
    },

    // Actions
    selectSkill(skill: ArlenorSkill | null) {
      this.selectedSkill = skill;
    },
  }
});
