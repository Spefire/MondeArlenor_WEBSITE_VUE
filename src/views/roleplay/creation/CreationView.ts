import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { PageTitles } from "@/models/PagesTitles";
import downloads from "@/utils/downloads";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import CaractsForm from "./forms/CaractsForm.vue";
import CrystalForm from "./forms/CrystalForm.vue";
import IdentityForm from "./forms/IdentityForm.vue";
import RaceForm from "./forms/RaceForm.vue";
import SkillsForm from "./forms/SkillsForm.vue";

export default defineComponent({
  name: "CreationView",
  title: PageTitles.creation,
  components: {
    RaceForm,
    CaractsForm,
    SkillsForm,
    CrystalForm,
    IdentityForm,
  },

  setup() {
    const store = useStore();
    const selection = ref(0);
    const hasModification = ref(false);
    return { store, selection, hasModification };
  },
  
  computed: {
    character(): ArlenorCharacter {
      return this.store.state.character;
    },
  },

  methods: {
    decreaseSelection(): void {
      this.selection--;
      this.hasModification = false;
    },
    increaseSelection(): void {
      this.selection++;
      this.hasModification = false;
    },
    changeModifs(): void {
      this.hasModification = true;
    },
    setSelection(newSelection: number): void {
      this.selection = newSelection;
    },
    startCreation(): void {
      this.selection = 1;
    },
    passCreation(): void {
      this.store.commit("initCharacter");
      this.selection = 7;
    },
    restartCreation(): void {
      this.store.commit("resetCharacter");
      this.selection = 1;
    },
    downloadCharacter(): void {
      downloads.downloadPDF(this.character);
    }
  },

  unmounted() {
    this.store.commit("resetCharacter");
  }
});
