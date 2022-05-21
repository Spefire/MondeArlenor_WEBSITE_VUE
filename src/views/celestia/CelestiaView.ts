import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { ArlenorCelestia } from "@/models/ArlenorCelestia";
import { getListCelestias } from "@/models/data/ListCelestia";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import QuizzForm from "./QuizzForm.vue";

export default defineComponent({
  name: "CelestiaView",
  title: PageTitles.celestia,
  components: {
    HeadLayout,
    QuizzForm,
  },

  setup() {
    const store = useStore();
    const quizz = store.state.quizz;
    const title = PageTitles.celestia;
    const currentIndex = ref(0);
    const currentQuestion = ref(100);
    const middleQuestion = ref(9);
    const allCelestias = ref(getListCelestias());

    return { quizz, currentIndex, currentQuestion, middleQuestion, allCelestias, title };
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
    
    startQuestion() {
      this.currentQuestion = 0;
    },

    continueQuestion() {
      this.currentQuestion = this.middleQuestion;
    },

    nextQuestion() {
      // On passe à l'entre-deux
      if (this.currentQuestion + 1 === this.middleQuestion) this.currentQuestion = 200;
      // On finit le questionnaire
      else if (this.currentQuestion + 1 === this.quizz.questions.length) this.currentQuestion = 300;
      // On change de question
      else this.currentQuestion++;
    }
  }
});
