import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorRace, DifficultyEnum } from "@/models/ArlenorRace";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { getListRaces } from "@/models/data/ListRaces";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent } from "vue";
import { useStore } from "vuex";

import CreationForm from "../form/CreationForm.vue";

export default defineComponent({
  name: "RaceForm",
  components: { CreationForm },
  emits: ["previousStep", "nextStep"],
  
  data() {
    const store = useStore();
    const allRaces = getListRaces().filter(race => race.difficulty !== DifficultyEnum.Impossible.Code);
    return {
      store,
      allRaces,
      form: {
        raceCode: store.state.character.codeRace || allRaces[0].code,
      },
      isModified: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  mounted() {
    this.store.commit("loadAllSkills");
  },
  
  validations: {
    form: {
      raceCode: {
        required
      },
    },
  },

  computed: {
    allSkills(): ArlenorSkill[] {
      return this.store.state.allSkills || [];
    },
    currentRace(): ArlenorRace | null {
      const race = this.allRaces.find(race => race.code === this.form.raceCode);
      return race ? race : null;
    },
  },

  methods: {
    getSkills(raceCode: string) {
      return this.allSkills.filter(skill => skill.race && skill.race.code === raceCode);
    },
    updateForm() {
      this.isModified = true;
    },
    cancelForm() {
      this.isModified = false;
      this.$emit("previousStep");
    },
    submitForm() {
      this.save();
      this.isModified = false;
      this.$emit("nextStep");
    },
    save() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.codeRace = this.form.raceCode;
      this.store.commit("changeCharacterRace", newCharacter);
    }
  }
});
