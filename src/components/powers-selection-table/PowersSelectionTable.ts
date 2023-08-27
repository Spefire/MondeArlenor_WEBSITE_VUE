import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorLevel } from "@/models/ArlenorLevel";
import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { defineComponent, PropType, ref, Ref } from "vue";

import PowerImage from "../power-image/PowerImage.vue";
import PowersDescription from "../powers-table/PowersDescription.vue";

export default defineComponent({
  name: "PowersSelectionTable",
  props: {
    indexCrystal: {
      type: Number,
      required: true,
    },
    level: {
      type: ArlenorLevel,
      required: true
    },
    idsPowers: {
      type: Object,
      required: true
    },
    filteredPowers: {
      type: Array as PropType<ArlenorPower[]>,
      required: true
    },
  },
  components: { PowerImage, PowersDescription },
  emits: ["add", "remove"],

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

  computed: {
    currentRanks() {
      return {
        [PowerRanksEnum.Commun.Code]: { current: this.getNbRank(PowerRanksEnum.Commun.Code), max: this.level.maxRankC[this.indexCrystal] },
        [PowerRanksEnum.Rare.Code]: { current: this.getNbRank(PowerRanksEnum.Rare.Code), max: this.level.maxRankB[this.indexCrystal] },
        [PowerRanksEnum.TresRare.Code]: { current: this.getNbRank(PowerRanksEnum.TresRare.Code), max: this.level.maxRankA[this.indexCrystal] },
        [PowerRanksEnum.Unique.Code]: { current: this.getNbRank(PowerRanksEnum.Unique.Code), max: this.level.maxRankS[this.indexCrystal] },
      };
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
    getNbRank(rank: string) {
      return this.filteredPowers.filter(power => power.codeRank === rank && this.idsPowers.includes(power.id)).length;
    },
    changePower(value: boolean, power: ArlenorPower) {
      if (value) this.$emit("add", power);
      else this.$emit("remove", power);
    },
    checkPower(power: ArlenorPower) {
      return this.idsPowers.includes(power.id);
    },
    checkDisabled(codeRank: string, power: ArlenorPower) {
      if (this.checkPower(power)) return false;
      return this.currentRanks[codeRank].current >= this.currentRanks[codeRank].max;
    },
    seeMore(power: ArlenorPower) {
      this.selectedPower = (this.selectedPower === power) ? null : power;
    },
  },
});