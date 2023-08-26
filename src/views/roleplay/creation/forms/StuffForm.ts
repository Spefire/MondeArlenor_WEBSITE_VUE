import useVuelidate from "@vuelidate/core";
import { defineComponent } from "vue";
import { useStore } from "vuex";

import CreationForm from "../form/CreationForm.vue";

export default defineComponent({
  name: "StuffForm",
  components: { CreationForm },
  emits: ["previousStep", "nextStep"],
  
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

  mounted() {
    this.store.commit("loadAllStuffs");
  },

  validations: {
    form: {},
  },

  methods: {
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
      /*const newCharacter = new ArlenorCharacter();
      this.store.commit("changeCharacterStuffs", newCharacter);*/
    }
  }
});
