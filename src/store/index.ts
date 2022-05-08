import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { createStore } from "vuex";

export default createStore({
  state: {
    character: new ArlenorCharacter()
  },
  mutations: {
    changeCharacterRace(state, payload: ArlenorCharacter) {
      state.character.race = payload.race;
      console.warn("state.character", state.character);
    },
    changeCharacterCaracts(state, payload: ArlenorCharacter) {
      state.character.caracts.vig = payload.caracts.vig;
      state.character.caracts.hab = payload.caracts.hab;
      state.character.caracts.int = payload.caracts.int;
      state.character.caracts.cha = payload.caracts.cha;
      state.character.caracts.pou = payload.caracts.pou;
      console.warn("state.character", state.character);
    },
    changeCharacterIdentity(state, payload: ArlenorCharacter) {
      state.character.name = payload.name;
      state.character.description = payload.description;
      state.character.avatar = payload.avatar;
      console.warn("state.character", state.character);
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
