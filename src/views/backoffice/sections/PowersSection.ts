import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "PowersSection",
  components: {},
    
  setup() {
    const allQuizz: Ref<CelestiaQuizz[]> = ref([]);
    return { allQuizz };
  },

  mounted() {
    this.loadQuizz();
  },

  methods: {
    async loadQuizz() {
      const allQuizz = await api.readAllQuizz();
      this.allQuizz = allQuizz;
    },
  }
});
