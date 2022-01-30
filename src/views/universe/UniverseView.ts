import { getListZones } from "@/models/data/ListZones";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UniverseView",
  title: PageTitles.worldmap,
  components: {},

  setup() {
    const allZones = ref(getListZones());
    const selectedZone = ref(getListZones()[0]);

    return { allZones, selectedZone };
  },

});
