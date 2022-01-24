import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { ArlenorRace, getListRaces } from "@/models/ArlenorRace";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PopulationView",
  title: PageTitles.population,
  components: {
    HeadLayout,
  },

  setup() {
    const currentIndex = ref(0);
    const allRaces = ref(getListRaces());

    const previousImage = ref("");
    const currentImage = ref("");
    const nextImage = ref("");

    const title = PageTitles.population;
    return { title, allRaces, currentIndex, previousImage, currentImage, nextImage };
  },

  mounted() {
    this.updateRace();
  },

  computed: {
    imageLeft() {
      return require("./../../assets/images/population/adn_left.png");
    },
    imageRight() {
      return require("./../../assets/images/population/adn_right.png");
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
    }
  }
});
