import CharactersTable from "@/components/characters-table/CharactersTable.vue";
import PopupBloc from "@/components/popup/PopupBloc.vue";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CharactersSection",
  components: {
    CharactersTable,
    PopupBloc,
  },
    
  setup() {
    const store = useStore();
    const filteredCharacters: Ref<ArlenorCharacter[]> = ref([]);
    const currentCharacter: Ref<ArlenorCharacter | null> = ref(null);
    const showDeletePopup = ref(false);
    return {
      store,
      filteredCharacters, currentCharacter,
      showDeletePopup
    };
  },

  mounted() {
    this.store.commit("loadAllCharacters", true);
  },

  computed: {
    allCharacters(): ArlenorCharacter[] {
      return this.store.state.allCharacters || [];
    },
  },

  methods: {
    updateFilteredCharacters(characters: ArlenorCharacter[]) {
      this.filteredCharacters = characters;
    },
    downloadCharacter(character: ArlenorCharacter) {
      console.warn("downloadCharacter", character);
    },
    openDeleteCharacter(character: ArlenorCharacter) {
      this.showDeletePopup = true;
      this.currentCharacter = character;
    },
    async closeDeleteCharacter(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction && this.currentCharacter) {
        await api.deleteCharacter(this.currentCharacter);

        // On recharge le store
        const newCharacters = this.allCharacters.slice().filter(character => character.id !== this.currentCharacter?.id);
        this.store.commit("changeAllCharacters", newCharacters);
      }
      this.currentCharacter = null;
    },
  }
});
