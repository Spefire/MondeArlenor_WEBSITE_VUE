import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import CaractsForm from "./creation/CaractsForm.vue";
import Crystal01Form from "./creation/Crystal01Form.vue";
import Crystal02Form from "./creation/Crystal02Form.vue";
import IdentityForm from "./creation/IdentityForm.vue";
import RaceForm from "./creation/RaceForm.vue";

export default defineComponent({
  name: "CreationView",
  title: PageTitles.creation,
  components: {
    RaceForm,
    CaractsForm,
    Crystal01Form,
    Crystal02Form,
    IdentityForm,
  },

  setup() {
    const store = useStore();
    const selection = ref(0);
    return { selection, store };
  },
  
  methods: {
    increaseSelection(): void {
      this.selection++;
    },

    setSelection(newSelection: number): void {
      this.selection = newSelection;
    },
  },

  unmounted() {
    this.store.commit("resetCharacter");
  }
});
