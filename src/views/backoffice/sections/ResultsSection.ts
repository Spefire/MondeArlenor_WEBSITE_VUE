import { CelestiaQuizz, CelestiaResult, getListResults } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "ResultsSection",
  components: {},
    
  setup() {
    const results = getListResults();
    const allResults: Ref<CelestiaResult[]> = ref(results);
    const allQuizz: Ref<CelestiaQuizz[]> = ref([]);

    return { allResults, allQuizz };
  },

  mounted() {
    this.loadQuizz();
  },

  methods: {
    async loadQuizz() {
      const allQuizz = await api.readAllQuizz();
      this.allQuizz = allQuizz;
    },

    getPourcentResult(resultCode: string) {
      if (!this.allQuizz.length) return 100;
      let nbSame = 0;
      this.allQuizz.forEach((quizz: CelestiaQuizz) => {
        if (quizz.result.code === resultCode) nbSame++;
      });
      return Math.round((nbSame / this.allQuizz.length) * 100);
    },
  }
});
