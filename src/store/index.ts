import { ArlenorCharacter } from "@/models/Character";
import { createStore } from "vuex";

export default createStore({
  state: {
    character: new ArlenorCharacter()
  },
  mutations: {
    changeCharacterIdentity(state, payload: ArlenorCharacter) {
      state.character.name = payload.name;
      state.character.description = payload.description;
      console.warn("state", state, payload);
    },
    resetCharacter(state) {
      state.character = new ArlenorCharacter();
    }
  },
  actions: {
  },
  modules: {
  }
});
