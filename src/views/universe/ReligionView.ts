import HeadLayout from "@/components/head-layout/HeadLayout.vue";
import { ArlenorDivinity } from "@/models/ArlenorDivinity";
import { getListAngels, getListDemons } from "@/models/data/ListDivinities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ReligionView",
  title: PageTitles.religion,
  components: {
    HeadLayout,
  },

  setup() {
    const title = PageTitles.religion;
    const allAngels = ref(getListAngels());
    const allDemons = ref(getListDemons());

    const currentDivinity = ref(getListAngels()[0]);

    return { allAngels, allDemons, currentDivinity, title };
  },
  
  computed: {
    imageLeft() {
      return require("./../../assets/images/religion/angel.png");
    },
    imageRight() {
      return require("./../../assets/images/religion/demon.png");
    },
  },

  methods: {
    changeSelection(divinity: ArlenorDivinity) {
      this.currentDivinity = divinity;
    }
  }
});
