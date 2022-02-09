import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { ArlenorMagic } from "@/models/ArlenorMagic";
import { getListMagics } from "@/models/data/ListMagics";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CelestiaView",
  title: PageTitles.celestia,
  components: {
    HeadLayout,
  },

  setup() {
    const title = PageTitles.celestia;
    const currentIndex = ref(0);
    const allMagics = ref(getListMagics());

    return { currentIndex, allMagics, title };
  },
  
  computed: {
    imageLeft() {
      return require("./../../assets/images/magic/magic_left.png");
    },
    imageRight() {
      return require("./../../assets/images/magic/magic_right.png");
    },
    previousIndex(): number {
      if (this.currentIndex === 0) return this.allMagics.length - 1;
      else return this.currentIndex - 1;
    },
    nextIndex(): number {
      if (this.currentIndex === this.allMagics.length - 1) return 0;
      else return this.currentIndex + 1;
    },
    currentMagic(): ArlenorMagic {
      return this.allMagics[this.currentIndex];
    }
  },

  methods: {    
    previousSelection() {
      if (this.currentIndex === 0) this.currentIndex = this.allMagics.length - 1;
      else this.currentIndex = this.currentIndex - 1;
    },
    
    nextSelection() {
      if (this.currentIndex === this.allMagics.length - 1) this.currentIndex = 0;
      else this.currentIndex = this.currentIndex + 1;
    }
  }
});
