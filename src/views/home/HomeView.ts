import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  title: PageTitles.home,
  components: {},

  // eslint-disable-next-line
  setup() {
    const pages = ref(PageTitles);
    const selection = ref(0);
    const timeSub: Ref<number | null> = ref(null);

    return {
      pages,
      selection,
      timeSub
    };
  },

  mounted() {
    this.launchTimeout();
  },

  methods: {
    changeSelection(): void {
      if (this.selection == 0) this.selection = 1;
      else if (this.selection == 1) this.selection = 2;
      else if (this.selection == 2) this.selection = 0;
      this.launchTimeout();
    },

    setSelection(newSelection: number): void {
      this.selection = newSelection;
      this.launchTimeout();
    },

    launchTimeout(): void {
      if (this.timeSub) clearTimeout(this.timeSub);
      this.timeSub = setTimeout(()=>{
        this.changeSelection();
      }, 12000);
    }
  }
});
