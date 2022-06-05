import useVuelidate from "@vuelidate/core";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AbilitiesForm",
  components: {},
  emits: ["changeStep", "previousStep", "nextStep"],
  
  data () {
    const store = useStore();
    return {
      store,
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

  methods: {
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
