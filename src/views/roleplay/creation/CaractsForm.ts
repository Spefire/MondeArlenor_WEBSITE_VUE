import { ArlenorCharacter, CaractDescriptionEnum } from "@/models/ArlenorCharacter";
import useVuelidate from "@vuelidate/core";
import { between, sameAs } from "@vuelidate/validators";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CaractsForm",
  components: {},
  emits: ["changeStep", "previousStep", "nextStep"],
    
  data() {
    const store = useStore();
    const caractDescriptionEnum = CaractDescriptionEnum;
    const selectCaract = "VIG";
    const totalCaracts = store.state.character.caracts.totalCaracts || 5;
    return {
      caractDescriptionEnum,
      store,
      selectCaract,
      form: {
        vig: store.state.character.caracts.vig.toString() || "1",
        hab: store.state.character.caracts.hab.toString() || "1",
        int: store.state.character.caracts.int.toString() || "1",
        cha: store.state.character.caracts.cha.toString() || "1",
        pou: store.state.character.caracts.pou.toString() || "1",
        pointsLeft: (15 - totalCaracts),
      },
      isModified: false,
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
    },
    updateForm() {
      this.isModified = true;
      this.$emit("changeStep");
    },
    cancelForm(withSave: boolean) {
      if (withSave) this.save();
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
      newCharacter.caracts.vig = this.form.vig;
      newCharacter.caracts.hab = this.form.hab;
      newCharacter.caracts.int = this.form.int;
      newCharacter.caracts.cha = this.form.cha;
      newCharacter.caracts.pou = this.form.pou;
      this.store.commit("changeCharacterCaracts", newCharacter);
    }
  }
});
