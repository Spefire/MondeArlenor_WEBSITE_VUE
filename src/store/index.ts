import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import { createStore } from "vuex";

export default createStore({
  state: {
    character: new ArlenorCharacter(),
    quizz: new CelestiaQuizz()
  },
  mutations: {
    changeCharacterRace(state, payload: ArlenorCharacter) {
      state.character.race = payload.race;
    },
    changeCharacterCaracts(state, payload: ArlenorCharacter) {
      state.character.caracts.for = payload.caracts.for;
      state.character.caracts.hab = payload.caracts.hab;
      state.character.caracts.int = payload.caracts.int;
      state.character.caracts.ten = payload.caracts.ten;
      state.character.caracts.cha = payload.caracts.cha;
      state.character.caracts.mag = payload.caracts.mag;
    },
    changeCharacterIdentity(state, payload: ArlenorCharacter) {
      state.character.avatar = payload.avatar;
      state.character.name = payload.name;
      state.character.age = payload.age;
      state.character.gender = payload.gender;
      state.character.story = payload.story;
      state.character.description = payload.description;
      state.character.traits = payload.traits;
      state.character.belives = payload.belives;
      state.character.importances = payload.importances;
    },
    initCharacter(state) {
      state.character = new ArlenorCharacter();
      state.character.init();
    },
    resetCharacter(state) {
      state.character = new ArlenorCharacter();
    },
    // Note : payload : { index, quizz }
    changeQuizz(state, payload) {
      state.quizz.questions[payload.index] = payload.quizz.questions[payload.index];
    }
  },
  actions: {
  },
  modules: {
  }
});
