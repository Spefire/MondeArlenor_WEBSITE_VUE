import PopupBloc from "@/components/popup/PopupBloc.vue";
import PowersTable from "@/components/powers-table/PowersTable.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PowersSection",
  components: {
    PowersTable,
    PopupBloc,
  },
    
  setup() {
    const showPopup = ref(false);
    return { showPopup };
  },

  methods: {
    addPower() {
      this.showPopup = true;
    },
    closePower() {
      this.showPopup = false;
    }
  }
});
