import { PageTitles } from "@/models/PagesTitles";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import CharactersSection from "./sections/CharactersSection.vue";
import PowersSection from "./sections/PowersSection.vue";
import QuizzSection from "./sections/QuizzSection.vue";
import ResultsSection from "./sections/ResultsSection.vue";
import SkillsSection from "./sections/SkillsSection.vue";
import StuffsSection from "./sections/StuffsSection.vue";

export default defineComponent({
  name: "BackofficeView",
  title: PageTitles.backoffice,
  components: {
    CharactersSection,
    PowersSection,
    QuizzSection,
    ResultsSection,
    SkillsSection,
    StuffsSection,
  },
  
  data() {
    return {
      form: {
        key: "",
      },
    };
  },

  setup () {
    const store = useStore();
    const backChoice = ref(1);
    const isOpen = ref(store.state.isAdmin);
    if (isOpen.value) store.commit("setAdmin", true);
    
    return { 
      store,
      backChoice, isOpen,
      v$: useVuelidate()
    };
  },

  validations: {
    form: {
      key: {
        required
      },
    },
  },

  methods: {
    changeBackChoice(choice: number) {
      this.backChoice = choice;
    },
    submitForm() {
      if (this.form.key === process.env.VUE_APP_BO_KEY) {
        this.isOpen = true;
        this.store.commit("setAdmin", true);
      }
    }
  }
});
