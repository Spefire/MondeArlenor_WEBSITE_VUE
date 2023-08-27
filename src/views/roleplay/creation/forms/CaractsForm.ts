import { ArlenorCharacter, CaractDescriptionEnum, CaractNomEnum } from "@/models/ArlenorCharacter";
import { getListRaces } from "@/models/data/ListRaces";
import useVuelidate from "@vuelidate/core";
import { between, sameAs } from "@vuelidate/validators";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import CreationForm from "../form/CreationForm.vue";

export default defineComponent({
  name: "CaractsForm",
  components: { CreationForm },
  emits: ["previousStep", "nextStep"],
  
  data() {
    const store = useStore();
    const caractDescriptionEnum = CaractDescriptionEnum;
    const selectCaract = CaractNomEnum.Force.Code;
    const allRaces = ref(getListRaces());
    const level = store.state.character.level;
    const codeRace = store.state.character.codeRace;
    const totalCaracts = store.state.character.totalCaracts || 0;
    const maxCaract = (level >= 10) ? 4 : 3;
    return {
      caractDescriptionEnum,
      store,
      selectCaract,
      allRaces,
      level,
      maxCaract,
      codeRace,
      form: {
        for: store.state.character.caractFor || 0,
        hab: store.state.character.caractHab || 0,
        int: store.state.character.caractInt || 0,
        ten: store.state.character.caractTen || 0,
        cha: store.state.character.caractCha || 0,
        mag: store.state.character.caractMag || 0,
        pointsLeft: (level.maxCaracts - totalCaracts),
      },
      isModified: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },
  
  validations: {
    form: {
      for: {
        between: between(0, 4),
      },
      hab: {
        between: between(0, 4),
      },
      int: {
        between: between(0, 4),
      },
      ten: {
        between: between(0, 4),
      },
      cha: {
        between: between(0, 4),
      },
      mag: {
        between: between(0, 4),
      },
      pointsLeft: {
        sameAs: sameAs(0)
      }
    },
  },

  methods: {
    changeCaract(caract: string) {
      this.selectCaract = caract;
      const totalCaracts = parseInt(this.form.for)
      + parseInt(this.form.hab)
      + parseInt(this.form.int)
      + parseInt(this.form.ten)
      + parseInt(this.form.cha)
      + parseInt(this.form.mag);
      this.form.pointsLeft = (this.level.maxCaracts - totalCaracts);
      this.updateForm();
    },
    getInitiative() {
      return parseInt(this.form.hab) + parseInt(this.form.int);
    },
    getPointsDeVie() {
      let points = this.level.maxHealth;
      if (this.codeRace === this.allRaces[1].code) points++;
      if (this.codeRace === this.allRaces[4].code) points++;
      if (parseInt(this.form.ten) === 0) points--;
      else if (parseInt(this.form.ten) > 2) points++;
      return points;
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
      newCharacter.caractFor = parseInt(this.form.for);
      newCharacter.caractHab = parseInt(this.form.hab);
      newCharacter.caractInt = parseInt(this.form.int);
      newCharacter.caractTen = parseInt(this.form.ten);
      newCharacter.caractCha = parseInt(this.form.cha);
      newCharacter.caractMag = parseInt(this.form.mag);
      this.store.commit("changeCharacterCaracts", newCharacter);
    }
  }
});
