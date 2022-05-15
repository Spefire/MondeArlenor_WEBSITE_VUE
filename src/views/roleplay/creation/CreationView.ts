import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import AbilitiesForm from "./AbilitiesForm.vue";
import CaractsForm from "./CaractsForm.vue";
import CrystalForm from "./CrystalForm.vue";
import IdentityForm from "./IdentityForm.vue";
import RaceForm from "./RaceForm.vue";

export default defineComponent({
  name: "CreationView",
  title: PageTitles.creation,
  components: {
    RaceForm,
    CaractsForm,
    AbilitiesForm,
    CrystalForm,
    IdentityForm,
  },

  setup() {
    const store = useStore();
    const selection = ref(0);
    const hasModification = ref(false);
    return { store, selection, hasModification };
  },
  
  methods: {
    decreaseSelection(): void {
      this.selection--;
    },
    increaseSelection(): void {
      this.selection++;
    },
    changeModifs(): void {
      this.hasModification = true;
    },
    setSelection(newSelection: number): void {
      this.selection = newSelection;
    },
  },

  unmounted() {
    this.store.commit("resetCharacter");
  }
});
