import { ArlenorPower } from "@/models/ArlenorPower";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "PowersSection",
  components: {},
    
  setup() {
    const allPowers: Ref<ArlenorPower[]> = ref([]);
    return { allPowers };
  },

  mounted() {
    this.loadPowers();
  },

  methods: {
    async loadPowers() {
      const allPowers = await api.readAllPower();
      console.warn("allPowers", allPowers);
      this.allPowers = allPowers;
    },
  }
});
