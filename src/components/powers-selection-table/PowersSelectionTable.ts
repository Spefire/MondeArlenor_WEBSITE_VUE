import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorPower } from "@/models/ArlenorPower";
import { defineComponent, PropType, ref, Ref } from "vue";

export default defineComponent({
  name: "PowersTable",
  props: {
    filteredPowers: {
      type: Array as PropType<ArlenorPower[]>,
      required: true
    },
  },
  components: {},
  emits: [],

  setup() {
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const ranks: Ref<ArlenorEnum[]> = ref([]);

    return { selectedPower, ranks };
  },

  mounted() {
    this.updateRanks();
  },

  watch: {
    filteredPowers: function() {
      this.updateRanks();
    }
  },

  methods: {
    updateRanks() {
      this.ranks = this.filteredPowers.map(power => power.rank).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
      this.ranks.sort((a, b) => b.Code.localeCompare(a.Code));
    },
    getPowersByRank(rank: string) {
      return this.filteredPowers.filter(power => power.codeRank === rank);
    },
    addPower(power: ArlenorPower) {
      console.warn(power);
    },

    seeMore(power: ArlenorPower) {
      this.selectedPower = (this.selectedPower === power) ? null : power;
    },
  },
});