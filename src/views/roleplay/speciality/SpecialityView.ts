import { ArlenorAbility } from "@/models/ArlenorAbility";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getCrystalAbilities } from "@/models/data/ListAbilities";
import { getGroupSkills, getSpecialitySkills } from "@/models/data/ListSkills";
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

    return { currentSpeciality, allSpecialities };
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
    groupSkills(): ArlenorSkill[] {
      if (this.currentSpeciality) {
        return getGroupSkills(this.currentSpeciality?.group.code);
      }
      return [];
    },
    specialitySkills(): ArlenorSkill[] {
      if (this.currentSpeciality) {
        return getSpecialitySkills(this.currentSpeciality?.code);
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
      this.$router.push({ path: "speciality", query: { spe: code }});
    },

    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },
  }
});
