import { ArlenorAbility } from "@/models/ArlenorAbility";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getCrystalAbilities } from "@/models/data/ListAbilities";
import { getSpecialitySkills } from "@/models/data/ListSkills";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "SpecialityView",
  title: PageTitles.speciality,
  components: {},
  
  watch: {
    $route() {
      this.updatePage();
    },
    currentSpeciality() {
      this.getCrystalAbilities();
      this.getSpecialitySkills();
      this.getListLevels();
    }
  },

  setup() {
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const allSpecialities = ref(getListSpecialities());
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);
    const crystalAbilities: Ref<ArlenorAbility[]> = ref([]);
    const specialitySkills: Ref<ArlenorSkill[]> = ref([]);
    const levels: Ref<number[]> = ref([]);
    
    return { currentSpeciality, allSpecialities, selectedSkill, crystalAbilities, specialitySkills, levels };
  },

  mounted() {
    this.updatePage();
  },

  methods: {
    updatePage() {
      if (this.$route.query.spe) {
        const targetSpeciality = getListSpecialities().find(spe => spe.code === this.$route.query.spe);
        this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
      } else {
        this.currentSpeciality = null;
      }
    },

    changeSpe(code:string) {
      const targetSpeciality = getListSpecialities().find(spe => spe.code === code);
      this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
      this.selectSkill(null);
      this.$router.push({ path: "speciality", query: { spe: code }});
    },

    selectSkill(skill: ArlenorSkill | null) {
      this.selectedSkill = skill;
    },
    
    getCrystalAbilities(): ArlenorAbility[] {
      if (this.currentSpeciality) {
        this.crystalAbilities = getCrystalAbilities(this.currentSpeciality?.group.code, this.currentSpeciality?.code);
      }
      return [];
    },

    getSpecialitySkills(): ArlenorSkill[] {
      if (this.currentSpeciality) {
        this.specialitySkills = getSpecialitySkills(this.currentSpeciality?.group.code, this.currentSpeciality?.code);
      }
      return [];
    },

    getListLevels() {
      function onlyUnique(value: number, index: number, self: number[]) {
        return self.indexOf(value) === index;
      }
      this.levels = this.specialitySkills.map(skill => skill.level).filter(onlyUnique);
      this.levels.sort((a, b) => a - b);
    },

    getSkillsByLevel(level: number): ArlenorSkill[] {
      return this.specialitySkills.filter(skill => skill.level === level);
    },

    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },

    getCodCaracts(caracts: ArlenorEnum[]) {
      let lib = "";
      caracts.forEach((caract, index) => {
        lib += caract.Code;
        if (index < caracts.length-1) lib += ", ";
      });
      return lib ? lib : "-";
    },
  }
});
