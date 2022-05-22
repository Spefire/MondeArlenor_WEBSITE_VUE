import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { ArlenorZone } from "@/models/ArlenorZone";
import { QuizzDB } from "@/models/CelestiaQuizz";
import { getListZones } from "@/models/data/ListZones";
import { PageTitles } from "@/models/PagesTitles";
import api from "@/utils/api";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UniverseView",
  title: PageTitles.worldmap,
  components: {
    ToggleButton
  },

  setup() {
    const currentIndex = ref(0);
    const allZones = ref(getListZones());
    const showCities = ref(false);

    return { currentIndex, allZones, showCities };
  },

  computed: {
    previousIndex(): number {
      if (this.currentIndex === 0) return this.allZones.length - 1;
      else return this.currentIndex - 1;
    },
    nextIndex(): number {
      if (this.currentIndex === this.allZones.length - 1) return 0;
      else return this.currentIndex + 1;
    },
    currentZone(): ArlenorZone {
      return this.allZones[this.currentIndex];
    }
  },

  methods: {    
    previousSelection() {
      if (this.currentIndex === 0) this.currentIndex = this.allZones.length - 1;
      else this.currentIndex = this.currentIndex - 1;
    },
    
    nextSelection() {
      if (this.currentIndex === this.allZones.length - 1) this.currentIndex = 0;
      else this.currentIndex = this.currentIndex + 1;
    },

    toggleMap(value: boolean) {
      this.showCities = value;
      if (value) {
        api.readAll().then((response) => {
          console.log("Response", response);
        }).catch((e) => {
          console.error("An API error occurred : ", e);
        });
      } else {
        const quizz = new QuizzDB("22052022", "1900");
        api.create(quizz).then((response) => {
          console.log("Response", response);
        }).catch((e) => {
          console.error("An API error occurred : ", e);
        });
      }
    }
  }
});
