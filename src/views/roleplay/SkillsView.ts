import { ArlenorClass } from "@/models/ArlenorClass";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorGroup } from "@/models/ArlenorGroup";
import { ArlenorSkill, getListSkills } from "@/models/ArlenorSkill";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "SkillsView",
  title: PageTitles.skills,
  components: {},

  setup() {
    const skills = ref(getListSkills());
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);

    return { selectedSkill, skills };
  },

  computed: {
    filteredSkills(): ArlenorSkill[] {
      return this.skills;
    }
  },
  
  methods: {
    getLibType(typeSkill: ArlenorEnum) {
      return typeSkill.Libelle;
    },
    
    getLibGroups(arlenorGroups: ArlenorGroup[]) {
      let lib = "";
      arlenorGroups.forEach((grp, index) => {
        lib += grp.name;
        if (index < arlenorGroups.length-1) lib += ", ";
      });
      return lib;
    },
    
    getLibClasses(arlenorClasses: ArlenorClass[]) {
      let lib = "";
      arlenorClasses.forEach((cls, index) => {
        lib += cls.name;
        if (index < arlenorClasses.length-1) lib += ", ";
      });
      return lib;
    },

    getCodCaracts(caracts: ArlenorEnum[]) {
      let lib = "";
      caracts.forEach((caract, index) => {
        lib += caract.Code;
        if (index < caracts.length-1) lib += ", ";
      });
      return lib;
    },

    seeMore(skill: ArlenorSkill) {
      this.selectedSkill = (this.selectedSkill === skill) ? null : skill;
    }
  },
});
