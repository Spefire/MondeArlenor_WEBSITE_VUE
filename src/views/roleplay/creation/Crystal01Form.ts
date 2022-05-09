import useVuelidate from "@vuelidate/core";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Crystal01Form",
  components: {},
  emits: ["changeStep", "previousStep", "nextStep"],
  
  data () {
    const store = useStore();
    return {
      store,
      form: {},
      isModified: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  methods: {
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
      /*const newCharacter = new ArlenorCharacter();
      this.store.commit("changeCharacterIdentity", newCharacter);*/
    }
  }
});
