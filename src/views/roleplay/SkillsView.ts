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
    
    const allClasses = getListClasses();
    const selectedClass: Ref<string | null> = ref(null);

    const searchName = ref("");

    return {
      skills, selectedSkill, filteredSkills,
      allGroups, selectedGroup,
      allClasses, selectedClass,
      searchName
    };
  },

  mounted() {
    this.changeFilteredSkills();
  },
  
  methods: {
    changeFilteredSkills() {
      this.filteredSkills = this.skills;
      if (this.selectedGroup) this.filteredSkills = this.filteredSkills.filter(skill => skill.arlenorGroups.find(arlGrp => arlGrp.code === this.selectedGroup));
      if (this.selectedClass) this.filteredSkills = this.filteredSkills.filter(skill => skill.arlenorClasses.find(arlCls => arlCls.code === this.selectedClass));
      if (this.searchName) this.filteredSkills = this.filteredSkills.filter(skill => skill.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
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
          const arlenorClasses = listClasses.filter(cls => cls.arlenorGroup.code === grp.code);
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
      return lib ? lib : "-";
    },

    seeMore(skill: ArlenorSkill) {
      this.selectedSkill = (this.selectedSkill === skill) ? null : skill;
    }
  },
});
