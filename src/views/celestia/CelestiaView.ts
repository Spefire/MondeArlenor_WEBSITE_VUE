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
    const currentQuestion = ref(0);
    const allCelestias = ref(getListCelestias());

    return { quizz, currentIndex, currentQuestion, allCelestias, title };
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

    nextQuestion() {
      console.log("nextQuestion");
      this.currentQuestion++;
    }
  }
});
