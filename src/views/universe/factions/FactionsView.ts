import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import InfoLayout from "@/components/info-layout/InfoLayout.vue";
import { ArlenorFaction } from "@/models/ArlenorFaction";
import { getListFactions } from "@/models/data/ListFactions";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FactionsView",
  title: PageTitles.factions,
  components: {
    HeadLayout,
    InfoLayout,
  },

  setup() {
    const allFactions = getListFactions();
    const factionsOfficielles = allFactions.filter((faction: ArlenorFaction) => faction.isOff);
    const factionsNonOfficielles = allFactions.filter((faction: ArlenorFaction) => !faction.isOff);
    const title = PageTitles.factions;
    return { factionsOfficielles, factionsNonOfficielles, title };
  },
  
  computed: {
    imageLeft() {
      return require("./../../../assets/images/religion/angel.png");
    },
    imageRight() {
      return require("./../../../assets/images/religion/demon.png");
    },
  },
});
