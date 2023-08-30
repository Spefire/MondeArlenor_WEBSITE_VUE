import PopupBloc from "@/components/popup/PopupBloc.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { PageTitles } from "@/models/PagesTitles";
import downloads from "@/utils/downloads";
import supabase_api from "@/utils/supabase_api";
import useVuelidate from "@vuelidate/core";
import { between, required } from "@vuelidate/validators";
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
    PopupBloc,
  },

  data () {
    const store = useStore();
    return {
      store,
      form: {
        guid: null,
        numLevel: 1,
      },
    };
  },

  setup() {
    const selection = ref(0);
    const isSaved = ref(false);
    const showDeletePopup = ref(false);
    const showSavePopup = ref(false);
    return {
      v$: useVuelidate(),
      selection,
      isSaved,
      showDeletePopup,
      showSavePopup
    };
  },

  mounted() {
    this.store.commit("loadAllCharacters");
    this.store.commit("loadLocalCharacters");
  },

  unmounted() {
    this.store.commit("resetCharacter");
  },

  computed: {
    character(): ArlenorCharacter {
      return this.store.state.character;
    },
    selectedCharacter(): ArlenorCharacter | null {
      if (this.form.guid) {
        const character = this.characters.find(charact => charact.guid === this.form.guid);
        return character ? character : null;
      } else return null;
    },
    characters(): ArlenorCharacter[] {
      const allCharacters = this.store.state.allCharacters || [];
      const localCharacters = this.store.state.localCharacters || [];
      return allCharacters.concat(localCharacters);
    },
  },

  validations: {
    form: {
      guid: {},
      numLevel: {
        required,
        between: between(1, 20),
      },
    },
  },

  methods: {
    getLibelleCharacter(character: ArlenorCharacter) {
      if (character.isVersionOK) {
        let libelle = character.name;
        libelle += " - " + character.race?.name;
        libelle += " - Niv " + character.numLevel;
        if (character.speciality01) libelle += " - " + character.speciality01.name;
        if (character.speciality02) libelle += "/" + character.speciality02.name;
        libelle += " (créé le " + character.date + " à " + character.hour + ")";
        return libelle;
      } else {
        let libelle = character.name;
        libelle += " - Niv " + character.numLevel;
        libelle += " (ancienne version : à supprimer)";
        return libelle;
      }
    },
    getSubLibelleCharacter(character: ArlenorCharacter) {
      let libelle = character.race?.name;
      libelle += " - Niv " + character.numLevel;
      if (character.speciality01) libelle += " - " + character.speciality01.name;
      if (character.speciality02) libelle += "/" + character.speciality02.name;
      return libelle;
    },
    changeCharacter() {
      if (this.form.guid) {
        if (this.selectedCharacter) this.form.numLevel = this.selectedCharacter.numLevel;
      } else this.form.numLevel = 1;
    },
    decreaseSelection(): void {
      if (this.selection === 5 && this.character.numLevel < 5) this.selection -= 2;
      else if (this.selection === 7) this.selection -= 2;
      else this.selection--;
    },
    increaseSelection(): void {
      if (this.selection === 3 && this.character.numLevel < 5) this.selection += 2;
      else if (this.selection === 5) this.selection += 2;
      else this.selection++;
    },
    setSelection(newSelection: number): void {
      this.selection = newSelection;
    },
    startCreation(withReset: boolean): void {
      if (this.form.guid) {
        this.store.commit("changeCharacter", this.selectedCharacter);
      } else if (withReset) {
        this.store.commit("resetCharacter");
      }
      this.store.commit("changeCharacterLevel", this.form.numLevel);
      this.selection = 1;
      this.isSaved = false;
    },
    restartCreation(): void {
      this.store.commit("resetCharacter");
      this.selection = 0;
      this.form.guid = null;
      this.form.numLevel = 1;
    },
    async downloadCharacter(isSelectedCharacter: boolean, isColored: boolean) {
      let allSkills = await supabase_api.getAllSkill();
      let allPowers = await supabase_api.getAllPower();
      allSkills = allSkills.sort((a, b) => a.name.localeCompare(b.name));
      allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
      if (isSelectedCharacter && this.selectedCharacter)
        downloads.downloadPDF(isColored, this.selectedCharacter, allSkills, allPowers);
      else
        downloads.downloadPDF(isColored, this.character, allSkills, allPowers);
    },
    openDeletePopup() {
      this.showDeletePopup = true;
    },
    closeDeletePopup(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction) {
        this.store.commit("deleteLocalCharacter",  this.form.guid);
        this.restartCreation();
      }
    },
    openSavePopup() {
      this.showSavePopup = true;
      this.isSaved = true;
      const character = this.character;
      character.initTime();
      this.store.commit("saveLocalCharacter", character);
    },
    closeSavePopup() {
      this.showSavePopup = false;
    },
  },
});
