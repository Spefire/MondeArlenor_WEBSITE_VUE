import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import useVuelidate from "@vuelidate/core";
import { between, sameAs } from "@vuelidate/validators";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CaractsForm",
  components: {},
  emits: ["nextStep"],
    
  data() {
    const store = useStore();
    const totalCaracts = store.state.character.caracts.totalCaracts || 5;
    return {
      store,
      form: {
        vig: store.state.character.caracts.vig || 1,
        hab: store.state.character.caracts.hab || 1,
        int: store.state.character.caracts.int || 1,
        cha: store.state.character.caracts.cha || 1,
        pou: store.state.character.caracts.pou || 1,
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
    submitForm() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.caracts.vig = this.form.vig;
      newCharacter.caracts.hab = this.form.hab;
      newCharacter.caracts.int = this.form.int;
      newCharacter.caracts.cha = this.form.cha;
      newCharacter.caracts.pou = this.form.pou;
      this.store.commit("changeCharacterCaracts", newCharacter);
      this.isModified = false;
      this.$emit("nextStep");
    }
  }
});
