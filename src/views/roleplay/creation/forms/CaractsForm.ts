import { ArlenorCharacter, CaractDescriptionEnum } from "@/models/ArlenorCharacter";
import { getListRaces } from "@/models/data/ListRaces";
import useVuelidate from "@vuelidate/core";
import { between, sameAs } from "@vuelidate/validators";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CaractsForm",
  components: {},
  emits: ["changeStep", "previousStep", "nextStep"],
    
  data() {
    const store = useStore();
    const caractDescriptionEnum = CaractDescriptionEnum;
    const selectCaract = "VIG";
    const allRaces = ref(getListRaces());
    const race = store.state.character.race;
    const totalCaracts = store.state.character.totalCaracts || 5;
    return {
      caractDescriptionEnum,
      store,
      selectCaract,
      allRaces,
      race,
      form: {
        vig: store.state.character.caracts.vig || 1,
        hab: store.state.character.caracts.hab || 1,
        int: store.state.character.caracts.int || 1,
        cha: store.state.character.caracts.cha || 1,
        pou: store.state.character.caracts.pou || 1,
        pointsLeft: (15 - totalCaracts),
      },
      isModified: false,
      needConfirm: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },
  
  validations: {
    form: {
      vig: {
        between: between(1, 5),
      },
      hab: {
        between: between(1, 5),
      },
      int: {
        between: between(1, 5),
      },
      cha: {
        between: between(1, 5),
      },
      pou: {
        between: between(1, 5),
      },
      pointsLeft: {
        sameAs: sameAs(0)
      }
    },
  },

  methods: {
    changeCaract(caract: string) {
      this.selectCaract = caract;
      const totalCaracts = parseInt(this.form.vig)
      + parseInt(this.form.hab)
      + parseInt(this.form.int)
      + parseInt(this.form.cha)
      + parseInt(this.form.pou);
      this.form.pointsLeft = (15 - totalCaracts);
      this.updateForm();
    },
    getInitiative() {
      return parseInt(this.form.hab) + parseInt(this.form.int);
    },
    getPointsDeVie() {
      let points = 10;
      if (this.race.code === this.allRaces[1].code) points++;
      if (this.race.code === this.allRaces[4].code) points++;
      if (parseInt(this.form.vig) <= 1) points--;
      if (parseInt(this.form.vig) >= 5) points++;
      return points;
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
      const newCharacter = new ArlenorCharacter();
      newCharacter.caracts.vig = parseInt(this.form.vig);
      newCharacter.caracts.hab = parseInt(this.form.hab);
      newCharacter.caracts.int = parseInt(this.form.int);
      newCharacter.caracts.cha = parseInt(this.form.cha);
      newCharacter.caracts.pou = parseInt(this.form.pou);
      this.store.commit("changeCharacterCaracts", newCharacter);
    }
  }
});
