import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { ArlenorCelestia } from "@/models/ArlenorCelestia";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import { getListCelestias } from "@/models/data/ListCelestia";
import { PageTitles } from "@/models/PagesTitles";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

import QuizzForm from "./QuizzForm.vue";

export default defineComponent({
  name: "CelestiaView",
  title: PageTitles.etincelles,
  components: {
    HeadLayout,
    QuizzForm,
  },

  setup() {
    const store = useStore();
    const quizz = store.state.quizz;
    const title = PageTitles.etincelles;
    const currentIndex = ref(0);
    const currentQuestion = ref(100);
    const pourcent = ref(100);
    const allCelestias = ref(getListCelestias());
    const allQuizz: Ref<CelestiaQuizz[]> = ref([]);

    return { quizz, currentIndex, currentQuestion, pourcent, allCelestias, allQuizz, title };
  },

  mounted() {
    this.loadQuizz();
  },

  computed: {
    imageLeft() {
      return require("./../../assets/images/magic/magic_left.png");
    },
    imageRight() {
      return require("./../../assets/images/magic/magic_right.png");
    },
    previousIndex(): number {
      if (this.currentIndex === 0) return this.allCelestias.length - 1;
      else return this.currentIndex - 1;
    },
    nextIndex(): number {
      if (this.currentIndex === this.allCelestias.length - 1) return 0;
      else return this.currentIndex + 1;
    },
    currentCelestia(): ArlenorCelestia {
      return this.allCelestias[this.currentIndex];
    }
  },

  methods: {
    async loadQuizz() {
      const allQuizz = await api.readAllQuizz();
      this.allQuizz = allQuizz;
    },

    previousSelection() {
      if (this.currentIndex === 0) this.currentIndex = this.allCelestias.length - 1;
      else this.currentIndex = this.currentIndex - 1;
    },
    
    nextSelection() {
      if (this.currentIndex === this.allCelestias.length - 1) this.currentIndex = 0;
      else this.currentIndex = this.currentIndex + 1;
    },

    getLibArray(arr: string[]) {
      let lib = "";
      arr.forEach((ele, index) => {
        lib += ele;
        if (index < arr.length - 1) lib += ", ";
      });
      return lib;
    },

    getLibFireWater() {
      const value = this.quizz.fire - this.quizz.water;
      if (value > 3) return "Dominance du Feu";
      if (value < -3) return "Dominance de l'Eau";
      return "Aucune dominance";
    },

    getLibWindEarth() {
      const value = this.quizz.wind - this.quizz.earth;
      if (value > 3) return "Dominance de l'Air";
      if (value < -3) return "Dominance de la Terre";
      return "Aucune dominance";
    },

    checkPourcent() {
      if (!this.allQuizz.length) this.pourcent = 100;
      let nbSame = 0;
      this.allQuizz.forEach(quizz => {
        if (quizz.result.code === this.quizz.result.code) nbSame++;
      });
      this.pourcent = Math.round((nbSame / this.allQuizz.length) * 100);
    },
    
    startQuestion() {
      this.currentQuestion = 0;
    },

    async nextQuestion() {
      // On finit le questionnaire
      if (this.currentQuestion + 1 === this.quizz.questions.length) {
        this.currentQuestion = 200;
        await api.sendQuizz(this.quizz);
        await this.loadQuizz();
        this.checkPourcent();
      }
      // On change de question
      else this.currentQuestion++;
    }
  }
});
