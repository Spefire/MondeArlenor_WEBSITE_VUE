import { ArlenorClass } from "@/models/ArlenorClass";
import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { getListClasses } from "@/models/data/ListClasses";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSkills } from "@/models/data/ListSkills";
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
    const skills = ref(getListSkills().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);
    const filteredSkills: Ref<ArlenorSkill[]> = ref([]);

    const allGroups = ref(getListGroups().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedGroup: Ref<string | null> = ref(null);
    
    const allClasses = ref(getListClasses().sort((a, b) => a.name.localeCompare(b.name)));
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
      if (this.selectedClass) this.filteredSkills = this.filteredSkills.filter(skill => {
        return skill.classes.find(cls => cls.code === this.selectedClass) || (skill.classes.length === 0 && skill.group.code === this.selectedGroup);
      });
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
        let lib = "";
        skill.classes.forEach((cls, index) => {
          lib += cls.name;
          if (index < list.length-1) lib += ", ";
        });
        return lib;
      } else {
        const listClasses = getListClasses();
        const arlenorClasses = listClasses.filter(cls => cls.group.code === skill.group.code);
        arlenorClasses.forEach(cls => list.push(cls));
        return "Toutes les classes";
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
