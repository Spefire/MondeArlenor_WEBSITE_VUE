import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { ArlenorRace } from "@/models/ArlenorRace";
import { getListRaceAbilities } from "@/models/data/ListAbilities";
import { getListRaces } from "@/models/data/ListRaces";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RacesView",
  title: PageTitles.races,
  components: {
    HeadLayout,
  },

  setup() {
    const currentIndex = ref(0);
    const allRaces = ref(getListRaces());
    const allAbilities = ref(getListRaceAbilities());

    const previousImage = ref("");
    const currentImage = ref("");
    const nextImage = ref("");

    const title = PageTitles.races;
    return { title, allRaces, allAbilities, currentIndex, previousImage, currentImage, nextImage };
  },

  mounted() {
    if (this.$route.query.selection) {
      this.currentIndex = parseInt(this.$route.query.selection.toString());
    }
    this.updateRace();
  },

  computed: {
    imageLeft() {
      return require("./../../../assets/images/races/adn_left.png");
    },
    imageRight() {
      return require("./../../../assets/images/races/adn_right.png");
    },
    previousIndex(): number {
      if (this.currentIndex === 0) return this.allRaces.length - 1;
      else return this.currentIndex - 1;
    },
    nextIndex(): number {
      if (this.currentIndex === this.allRaces.length - 1) return 0;
      else return this.currentIndex + 1;
    },
    currentRace(): ArlenorRace {
      return this.allRaces[this.currentIndex];
    }
  },

  methods: {
    updateRace() {
      this.previousImage = this.allRaces[this.previousIndex].image;
      this.currentImage = this.allRaces[this.currentIndex].image;
      this.nextImage = this.allRaces[this.nextIndex].image;
    },
    
    previousSelection() {
      if (this.currentIndex === 0) this.currentIndex = this.allRaces.length - 1;
      else this.currentIndex = this.currentIndex - 1;
      this.updateRace();
    },
    
    nextSelection() {
      if (this.currentIndex === this.allRaces.length - 1) this.currentIndex = 0;
      else this.currentIndex = this.currentIndex + 1;
      this.updateRace();
    },

    getAbilities(raceCode: string) {
      return this.allAbilities.filter(abl => abl.race && abl.race.code === raceCode);
    }
  }
});
