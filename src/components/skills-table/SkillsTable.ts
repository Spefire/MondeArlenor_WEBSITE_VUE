import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSkills } from "@/models/data/ListSkills";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "SkillsTable",
  props: {
    currentSpeciality: {
      type: ArlenorSpeciality,
      default: null,
      required: false,
    }
  },
  components: {},

  setup(props) {
    let lockSpe = false;
    if (props.currentSpeciality) lockSpe = true;

    const skills = ref(getListSkills().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);
    const filteredSkills: Ref<ArlenorSkill[]> = ref([]);

    const allGroups = ref(getListGroups().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedGroup: Ref<string | null> = ref(lockSpe ? props.currentSpeciality.group.code : null);
    
    const allSpecialities = ref(getListSpecialities().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedSpeciality: Ref<string | null> = ref(lockSpe ? props.currentSpeciality.code : null);

    const searchName = ref("");

    return {
      skills, selectedSkill, filteredSkills,
      allGroups, selectedGroup,
      allSpecialities, selectedSpeciality,
      lockSpe, searchName
    };
  },

  mounted() {
    this.changeFilteredSkills();
  },
  
  methods: {
    changeFilteredSkills() {
      this.filteredSkills = this.skills;
      if (this.selectedGroup) this.filteredSkills = this.filteredSkills.filter(skill => skill.group.code === this.selectedGroup);
      if (this.selectedSpeciality) this.filteredSkills = this.filteredSkills.filter(skill => {
        return skill.specialities.find((spe: ArlenorSpeciality) => spe.code === this.selectedSpeciality) || (skill.specialities.length === 0 && skill.group.code === this.selectedGroup);
      });
      if (this.searchName) this.filteredSkills = this.filteredSkills.filter(skill => skill.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
    },

    changeGroup() {
      this.selectedSpeciality = null;
      this.changeFilteredSkills();
    },

    changeSpeciality() {
      const targetSpeciality = this.selectedSpeciality ? this.allSpecialities.find(spe => spe.code == this.selectedSpeciality) : null;
      this.selectedGroup = targetSpeciality ? targetSpeciality.group.code : null;
      this.changeFilteredSkills();
    },
            
    getLibSpecialities(skill: ArlenorSkill) {
      if (skill.specialities.length > 0) {
        let lib = "";
        skill.specialities.forEach((spe: ArlenorSpeciality, index: number) => {
          lib += spe.name;
          if (index < skill.specialities.length-1) lib += ", ";
        });
        return lib;
      } else {
        return "Toutes les spécialités";
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
