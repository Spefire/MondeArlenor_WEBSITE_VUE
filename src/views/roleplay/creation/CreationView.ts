import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { PageTitles } from "@/models/PagesTitles";
import api from "@/utils/api";
import downloads from "@/utils/downloads";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import CaractsForm from "./forms/CaractsForm.vue";
import CrystalForm from "./forms/CrystalForm.vue";
import IdentityForm from "./forms/IdentityForm.vue";
import RaceForm from "./forms/RaceForm.vue";
import SkillsForm from "./forms/SkillsForm.vue";
import StuffForm from "./forms/StuffForm.vue";

export default defineComponent({
  name: "CreationView",
  title: PageTitles.creation,
  components: {
    RaceForm,
    CaractsForm,
    CrystalForm,
    SkillsForm,
    StuffForm,
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
      if (this.selection === 5 && this.character.level.numLevel < 5) this.selection -= 2;
      else if (this.selection === 7) this.selection -= 2;
      else this.selection--;
      this.hasModification = false;
    },
    increaseSelection(): void {
      if (this.selection === 3 && this.character.level.numLevel < 5) this.selection += 2;
      else if (this.selection === 5) this.selection += 2;
      else this.selection++;
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
      this.selection = 8;
    },
    restartCreation(): void {
      this.store.commit("resetCharacter");
      this.selection = 0;
    },
    async downloadCharacter() {
      let allPowers = await api.readAllPower();
      allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
      downloads.downloadPDF(this.character, allPowers);
    }
  },

  unmounted() {
    this.store.commit("resetCharacter");
  }
});
