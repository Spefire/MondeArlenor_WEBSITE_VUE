import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "SpecialityView",
  title: PageTitles.speciality,
  components: {
    SkillsTable,
  },

  setup() {
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const allSpecialities = ref(getListSpecialities());
    const allGroups = ref(getListGroups());
    const showSpeciality = ref(false);
    const showGroup = ref(false);

    return { currentSpeciality, allGroups, allSpecialities, showGroup, showSpeciality };
  },

  mounted() {    
    const targetSpeciality = getListSpecialities().find(spe => spe.code === this.$route.params.code);
    this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
  },

  methods: {
    changeSpe(code:string) {
      const targetSpeciality = getListSpecialities().find(spe => spe.code === code);
      this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
    }
  }
});
