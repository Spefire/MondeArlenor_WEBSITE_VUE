import { ArlenorGroup } from "@/models/ArlenorGroup";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpeciality } from "@/models/ArlenorSpeciality";
import { getListGroups } from "@/models/data/ListGroups";
import { getListSkills } from "@/models/data/ListSkills";
import { getListSpecialities } from "@/models/data/ListSpecialities";
import useVuelidate from "@vuelidate/core";
import { defineComponent, ref, Ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CrystalForm",
  props: {
    currentCrystal: {
      type: Number,
      required: true,
    }
  },
  components: {},
  emits: ["changeStep", "previousStep", "nextStep"],
  
  data () {
    const store = useStore();
    
    const selectedSkill: Ref<ArlenorSkill | null> = ref(null);

    const selectedGroup: Ref<ArlenorGroup | null> = ref(null);
    const selectedGrpCode: Ref<string | null> = ref(null);
    
    const selectedSpeciality: Ref<ArlenorSpeciality | null> = ref(null);
    const selectedSpeCode: Ref<string | null> = ref(null);

    return {
      store,
      selectedSkill,
      selectedGrpCode, selectedGroup,
      selectedSpeCode, selectedSpeciality,
      form: {},
      isModified: false,
      needConfirm: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },
  
  validations: {
    form: {},
  },

  computed: {
    allGroups(): ArlenorGroup[] {
      return getListGroups().sort((a, b) => a.name.localeCompare(b.name));
    },
    allSpecialities(): ArlenorSpeciality[] {
      return getListSpecialities().sort((a, b) => a.name.localeCompare(b.name));
    },
    filteredSpecialities(): ArlenorSpeciality[] {
      if (this.selectedGrpCode) {
        return this.allSpecialities.filter(spe => spe.group.code == this.selectedGrpCode);
      } else {
        return this.allSpecialities.slice();
      }
    },
    filteredSkills(): ArlenorSkill[] {
      if (this.selectedSpeciality) {
        return getListSkills(this.selectedSpeciality?.group.code, this.selectedSpeciality?.code);
      } else {
        return [];
      }
    },
  },
  
  methods: {
    changeGroup() {
      this.selectedGroup = this.selectedGrpCode ? this.allGroups.find(grp => grp.code == this.selectedGrpCode) || null  : null;
      this.selectedSpeciality = null;
      this.selectedSpeCode = null;
    },
    changeSpeciality() {
      this.selectedSpeciality = this.selectedSpeCode ? this.allSpecialities.find(spe => spe.code == this.selectedSpeCode) || null : null;
      if (this.selectedSpeciality) {
        this.selectedGroup = this.selectedSpeciality.group;
        this.selectedGrpCode = this.selectedSpeciality.group.code;
      }
    },
    seeMore(skill: ArlenorSkill) {
      this.selectedSkill = (this.selectedSkill?.code === skill.code) ? null : skill;
    },

    updateForm() {
      this.isModified = true;
      this.needConfirm = false,
      this.$emit("changeStep");
    },
    cancelForm() {
      if (this.isModified && !this.needConfirm) {
        this.needConfirm = true;
      } else {
        this.isModified = false;
        this.$emit("previousStep");
      }
    },
    submitForm() {
      this.save();
      this.isModified = false;
      this.$emit("nextStep");
    },
    save() {
      /*const newCharacter = new ArlenorCharacter();
      this.store.commit("changeCharacterIdentity", newCharacter);*/
    }
  }
});
