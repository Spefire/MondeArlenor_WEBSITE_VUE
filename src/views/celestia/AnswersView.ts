import { CelestiaQuizz, CelestiaResult, getListResults } from "@/models/CelestiaQuizz";
import { PageTitles } from "@/models/PagesTitles";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "AnswersView",
  title: PageTitles.answers,
  components: {},
    
  setup() {
    const results = getListResults();
    const newQuizz: Ref<CelestiaQuizz> = ref(new CelestiaQuizz());
    const allResults: Ref<CelestiaResult[]> = ref(results);
    const allQuizz: Ref<CelestiaQuizz[]> = ref([]);
    const currentQuizz: Ref<CelestiaQuizz | null> = ref(null);

    return { newQuizz, allResults, allQuizz, currentQuizz };
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

    getPourcentResult(resultCode: string) {
      if (!this.allQuizz.length) return 100;
      let nbSame = 0;
      this.allQuizz.forEach((quizz: CelestiaQuizz) => {
        if (quizz.result.code === resultCode) nbSame++;
      });
      return Math.round((nbSame / this.allQuizz.length) * 100);
    },

    getPourcentQuestion(indexQuestion: number, value: string) {
      if (!this.allQuizz.length) return 100;
      let nbSame = 0;
      this.allQuizz.forEach((quizz: CelestiaQuizz) => {
        if (quizz.questions[indexQuestion].selection === value) nbSame++;
      });
      return Math.round((nbSame / this.allQuizz.length) * 100);
    },

    getLibFireWater(quizz: CelestiaQuizz) {
      const value = quizz.fire - quizz.water;
      if (value > 3) return "Dominance du Feu";
      if (value < -3) return "Dominance de l'Eau";
      return "Aucune dominance";
    },

    getLibWindEarth(quizz: CelestiaQuizz) {
      const value = quizz.wind - quizz.earth;
      if (value > 3) return "Dominance de l'Air";
      if (value < -3) return "Dominance de la Terre";
      return "Aucune dominance";
    },
  }
});
