import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PowerImage",
  props: {
    power: {
      type: ArlenorPower,
      required: true
    },
  },

  setup() {
    const powerRanksEnum = ref(PowerRanksEnum);

    return { powerRanksEnum };
  },
});