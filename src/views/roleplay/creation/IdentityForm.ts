import { ArlenorCharacter } from "@/models/Character";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "IdentityForm",
  components: {},

  setup() {
    const store = useStore();
    const name = store.state.character.name;

    return { name, store };
  },

  methods: {
    submitForm() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.name = this.name;
      this.store.commit("changeCharacterIdentity", newCharacter);
    }
  }
});
