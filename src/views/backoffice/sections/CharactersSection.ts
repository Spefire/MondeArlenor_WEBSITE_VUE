import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "CharactersSection",
  components: {},
    
  setup() {
    const allCharacters: Ref<ArlenorCharacter[]> = ref([]);
    return { allCharacters };
  },

  mounted() {
    this.loadCharacters();
  },

  methods: {
    async loadCharacters() {
      const allCharacters = await api.readAllCharacter();
      console.warn("allCharacters", allCharacters);
      this.allCharacters = allCharacters;
    },
  }
});
