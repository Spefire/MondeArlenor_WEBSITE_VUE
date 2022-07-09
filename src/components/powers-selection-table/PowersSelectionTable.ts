import { ArlenorEnum } from "@/models/ArlenorEnum";
import { ArlenorLevel } from "@/models/ArlenorLevel";
import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { defineComponent, PropType, ref, Ref } from "vue";

export default defineComponent({
  name: "PowersSelectionTable",
  props: {
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
  components: {},
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
        [PowerRanksEnum.Commun.Code]: { current: this.getNbRank(PowerRanksEnum.Commun.Code), max: this.level.maxRankC },
        [PowerRanksEnum.Rare.Code]: { current: this.getNbRank(PowerRanksEnum.Rare.Code), max: this.level.maxRankB },
        [PowerRanksEnum.TresRare.Code]: { current: this.getNbRank(PowerRanksEnum.TresRare.Code), max: this.level.maxRankA },
        [PowerRanksEnum.Unique.Code]: { current: this.getNbRank(PowerRanksEnum.Unique.Code), max: this.level.maxRankS },
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
    getNbRank(codeRank: string) {
      const powers: { [codeRank: string] : string[]; } = this.idsPowers;
      return powers[codeRank].length;
    },
    changePower(value: boolean, power: ArlenorPower) {
      if (value) this.$emit("add", power);
      else this.$emit("remove", power);
    },
    checkPower(power: ArlenorPower) {
      const powers: { [codeRank: string] : string[]; } = this.idsPowers;
      return powers[power.codeRank].find(idPower => idPower === power.id) ? true : false;
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