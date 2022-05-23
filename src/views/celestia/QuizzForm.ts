import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "QuizzForm",
  components: {},
  emits: ["nextQuestion"],
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
    
  data() {
    const store = useStore();
    const quizz = store.state.quizz;
    return {
      store,
      question: quizz.questions[this.index].libelle,
      answers: quizz.questions[this.index].answers,
      form: {
        response: quizz.questions[this.index].selection,
      },
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },
  
  validations: {
    form: {
      response: {
        required
      },
    },
  },

  methods: {
    submitForm() {
      this.save();
      this.$emit("nextQuestion");
    },
    save() {
      const newQuizz = new CelestiaQuizz();
      newQuizz.questions[this.index].selection = this.form.response;
      this.store.commit("changeQuizz", { index: this.index, quizz: newQuizz });
    }
  }
});
