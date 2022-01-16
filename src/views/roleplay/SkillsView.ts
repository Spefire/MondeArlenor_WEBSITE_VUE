import { ArlenorClass, getListClasses } from "@/models/ArlenorClass";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorGroup, getListGroups } from "@/models/ArlenorGroup";
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
    const filteredSkills: Ref<ArlenorSkill[]> = ref([]);

    const allGroups = getListGroups();
    const selectedGroup: Ref<string | null> = ref(null);

    return { skills, selectedSkill, filteredSkills, allGroups, selectedGroup };
  },

  mounted() {
    this.changeFilteredSkills();
  },
  
  methods: {
    changeFilteredSkills() {
      this.filteredSkills = this.skills;
      if (this.selectedGroup) this.filteredSkills = this.skills.filter(skill => skill.arlenorGroups.find(arlGrp => arlGrp.code === this.selectedGroup));
    },
    
    getLibType(typeSkill: ArlenorEnum) {
      return typeSkill.Libelle;
    },
    
    getLibGroups(arlenorGroups: ArlenorGroup[]) {
      let lib = "";
      arlenorGroups.forEach((grp, index) => {
        lib += grp.name;
        if (index < arlenorGroups.length-1) lib += ", ";
      });
      return lib ? lib : "-";
    },
    
    getLibClasses(skill: ArlenorSkill) {
      const list:ArlenorClass[] = [];
      if (skill.arlenorClasses.length > 0) {
        skill.arlenorClasses.forEach(cls => list.push(cls));
      } else {
        const listClasses = getListClasses();
        skill.arlenorGroups.forEach(grp => {
          const arlenorClasses = listClasses.filter(cls => cls.arlenorGroup.name === grp.name);
          arlenorClasses.forEach(cls => list.push(cls));
        });
      }

      let lib = "";
      if (list.length > 3) {
        lib = "" + list.length + " classes concernées";
      } else {
        list.forEach((cls, index) => {
          lib += cls.name;
          if (index < list.length-1) lib += ", ";
        });
      }

      return lib ? lib : "-";
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
