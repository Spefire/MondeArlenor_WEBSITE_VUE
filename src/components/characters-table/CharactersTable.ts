import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { getListRaces } from "@/models/data/ListRaces";
import { defineComponent, PropType, Ref, ref } from "vue";

export default defineComponent({
  name: "CharactersTable",
  props: {
    allCharacters: {
      type: Array as PropType<ArlenorCharacter[]>,
      required: true
    },
  },
  components: {},
  emits: ["download", "delete", "update"],

  setup() {
    const selectedCharacter: Ref<ArlenorCharacter | null> = ref(null);
    const filteredCharacters: Ref<ArlenorCharacter[]> = ref([]);
    
    const allRaces = ref(getListRaces().sort((a, b) => a.name.localeCompare(b.name)));
    const selectedRace: Ref<string | null> = ref(null);

    const searchName = ref("");

    return {
      selectedCharacter, filteredCharacters,
      allRaces, selectedRace,
      searchName
    };
  },
  
  watch: {
    allCharacters: function() {
      this.changeFilteredCharacters();
    }
  },
  
  mounted() {
    this.changeFilteredCharacters();
  },

  methods: {
    changeFilteredCharacters() {
      this.filteredCharacters = this.allCharacters;
      console.warn(this.selectedRace);
      if (this.selectedRace) this.filteredCharacters = this.filteredCharacters
        .filter(character => character.race?.code === this.selectedRace);
      if (this.searchName) this.filteredCharacters = this.filteredCharacters.filter(character => character.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
      this.filteredCharacters.sort((a, b) => a.name.localeCompare(b.name));
      this.$emit("update", this.filteredCharacters);
    },

    seeMore(character: ArlenorCharacter) {
      this.selectedCharacter = (this.selectedCharacter === character) ? null : character;
    },

    downloadCharacter(character: ArlenorCharacter) {
      this.$emit("download", character);
    },
    deleteCharacter(character: ArlenorCharacter) {
      this.$emit("delete", character);
    }
  },
});