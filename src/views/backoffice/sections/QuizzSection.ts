import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "QuizzSection",
  components: {},
    
  setup() {
    const newQuizz: Ref<CelestiaQuizz> = ref(new CelestiaQuizz());
    const allQuizz: Ref<CelestiaQuizz[]> = ref([]);

    return { newQuizz, allQuizz };
  },

  mounted() {
    this.loadQuizz();
  },

  methods: {
    async loadQuizz() {
      const allQuizz = await api.readAllQuizz();
      this.allQuizz = allQuizz;
    },

    checkAlert(indexQuestion: number, value: string) {
      const pourcent = this.getPourcentQuestion(indexQuestion, value);
      const length = this.newQuizz.questions[indexQuestion].answers.length;
      if (length === 2) return (pourcent < 25 || pourcent > 75);
      else if (length === 4) return (pourcent < 10 || pourcent > 40);
      else if (length === 8) return (pourcent < 5 || pourcent > 25);
      else if (length === 9) return (pourcent < 2 || pourcent > 20);
      else return false;
    },

    getPourcentQuestion(indexQuestion: number, value: string) {
      if (!this.allQuizz.length) return 100;
      let nbSame = 0;
      this.allQuizz.forEach((quizz: CelestiaQuizz) => {
        if (quizz.questions[indexQuestion].selection === value) nbSame++;
      });
      return Math.round((nbSame / this.allQuizz.length) * 100);
    },
  }
});
