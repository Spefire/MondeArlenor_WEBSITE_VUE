import ArrowButton from "@/components/arrow-button/ArrowButton.vue";
import SkillsTable from "@/components/skills-table/SkillsTable.vue";
import { ArlenorGroup } from "@/models/ArlenorGroup";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListGroups } from "@/models/data/ListGroups";
import { getGroupSkills, getSpecialitySkills } from "@/models/data/ListSkills";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "CrystalsView",
  title: PageTitles.crystals,
  components: {
    ArrowButton,
    SkillsTable,
  },
  
  watch: {
    $route() {
      this.updatePage();
    }
  },

  setup() {
    const currentGroup: Ref<ArlenorGroup | null> = ref(null);
    const allGroups = ref(getListGroups());
    const currentSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const allSpecialities = ref(getListSpecialities());

    return { currentGroup, currentSpeciality, allGroups, allSpecialities };
  },

  mounted() {
    this.updatePage();
  },

  computed: {
    groupSkills(): ArlenorSkill[] {
      if (this.currentGroup) {
        return getGroupSkills(this.currentGroup?.code, true);
      } else if (this.currentSpeciality) {
        return getGroupSkills(this.currentSpeciality?.group.code, true);
      }
      return [];
    },
    specialitySkills(): ArlenorSkill[] {
      if (this.currentSpeciality) {
        return getSpecialitySkills(this.currentSpeciality?.code, true);
      }
      return [];
    }
  },

  methods: {
    updatePage() {
      if (this.$route.query.spe) {
        const targetSpeciality = getListSpecialities().find(spe => spe.code === this.$route.query.spe);
        this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
      }
      else if (this.$route.query.grp) {
        const targetGroup = getListGroups().find(grp => grp.code === this.$route.query.grp);
        this.currentGroup = targetGroup ? targetGroup : null;
      }
      else {
        this.currentGroup = null;
        this.currentSpeciality = null;
      }
    },

    changeSpe(code:string) {
      const targetSpeciality = getListSpecialities().find(spe => spe.code === code);
      this.currentSpeciality = targetSpeciality ? targetSpeciality : null;
      this.currentGroup = null;
      this.$router.push({ path: "crystals", query: { spe: code }});
    },

    changeGrp(code:string) {
      const targetGroup = getListGroups().find(grp => grp.code === code);
      this.currentGroup = targetGroup ? targetGroup : null;
      this.currentSpeciality = null;
      this.$router.push({ path: "crystals", query: { grp: code }});
    },

    getDescription(description: string, length = 0) {
      if (length) return description.replace("&emsp;","").slice(0, length) + "...";
      return description.replace("&emsp;","");
    },
  }
});
