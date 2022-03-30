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
    }
  },

  setup() {
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const allSpecialities = ref(getListSpecialities());
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);

    return { currentSpeciality, allSpecialities, selectedSkill };
  },

  mounted() {
    this.updatePage();
  },

  computed: {
    crystalAbilities(): ArlenorAbility[] {
      if (this.currentSpeciality) {
        return getCrystalAbilities(this.currentSpeciality?.group.code, this.currentSpeciality?.code);
      }
      return [];
    },
    specialitySkills(): ArlenorSkill[] {
      if (this.currentSpeciality) {
        return getSpecialitySkills(this.currentSpeciality?.group.code, this.currentSpeciality?.code);
      }
      return [];
    }
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
