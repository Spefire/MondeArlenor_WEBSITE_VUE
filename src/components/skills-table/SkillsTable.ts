import { ArlenorClass, getListClasses } from "@/models/ArlenorClass";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { getListGroups } from "@/models/ArlenorGroup";
import { ArlenorSkill, getListSkills } from "@/models/ArlenorSkill";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "SkillsTable",
  props: {
    currentClass: {
      type: ArlenorClass,
      default: null,
      required: false,
    }
  },
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
      if (this.selectedGroup) this.filteredSkills = this.filteredSkills.filter(skill => skill.group.code === this.selectedGroup);
      if (this.selectedClass) this.filteredSkills = this.filteredSkills.filter(skill => skill.classes.find(cls => cls.code === this.selectedClass));
      if (this.searchName) this.filteredSkills = this.filteredSkills.filter(skill => skill.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
    },

    changeGroup() {
      this.selectedClass = null;
      this.changeFilteredSkills();
    },

    changeClass() {
      const targetClass = this.selectedClass ? this.allClasses.find(cls => cls.code == this.selectedClass) : null;
      this.selectedGroup = targetClass ? targetClass.group.code : null;
      this.changeFilteredSkills();
    },
            
    getLibClasses(skill: ArlenorSkill) {
      const list:ArlenorClass[] = [];
      if (skill.classes.length > 0) {
        skill.classes.forEach(cls => list.push(cls));

        let lib = "";
        list.forEach((cls, index) => {
          lib += cls.name;
          if (index < list.length-1) lib += ", ";
        });
        return lib ? lib : "-";
      } else {
        const listClasses = getListClasses();
        const arlenorClasses = listClasses.filter(cls => cls.group.code === skill.group.code);
        arlenorClasses.forEach(cls => list.push(cls));
        return "-";
      }
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
