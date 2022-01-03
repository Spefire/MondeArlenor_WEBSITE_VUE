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
    const scrollValue = ref(0);
    const timeSub: Ref<number | null> = ref(null);

    return {
      pages,
      selection,
      scrollValue,
      timeSub
    };
  },

  mounted() {
    window.addEventListener("mousewheel", this.mouseWheelEvent.bind(this));
    window.addEventListener("DOMMouseScroll", this.mouseWheelEvent.bind(this));
    
    this.timeSub = setTimeout(()=>{
      this.changeSelection();
    }, 10000);
  },

  methods: {
    increaseSelection(): void {
      if (this.selection == 0) this.selection = 1;
      else if (this.selection == 1) this.selection = 2;
    },

    changeSelection(): void {
      if (this.selection == 0) this.selection = 2;
      else if (this.selection == 1) this.selection = 0;
      else if (this.selection == 2) this.selection = 1;
    },

    decreaseSelection(): void {
      if (this.selection == 1) this.selection = 0;
      else if (this.selection == 2) this.selection = 1;
    },

    setSelection(newSelection: number): void {
      this.selection = newSelection;
      this.launchTimeout();
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mouseWheelEvent(e: any) {
      this.scrollValue += e.wheelDelta ? e.wheelDelta : -e.detail;
      if (this.scrollValue >= 360) {
        this.scrollValue = -120;
        this.decreaseSelection();
        this.launchTimeout();
      } else if (this.scrollValue <= -360) {
        this.scrollValue = 120;
        this.increaseSelection();
        this.launchTimeout();
      }
    },

    launchTimeout(): void {
      if (this.timeSub) clearTimeout(this.timeSub);
      this.timeSub = setTimeout(()=>{
        this.changeSelection();
      }, 10000);
    }
  }
});
