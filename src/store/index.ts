import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import { createStore } from "vuex";

export default createStore({
  state: {
    character: new ArlenorCharacter(),
    quizz: new CelestiaQuizz(),
    allPowers: null as ArlenorPower[] | null
  },
  mutations: {
    async loadAllPowers(state) {
      if (!state.allPowers) {
        const allPowers = await api.readAllPower();
        state.allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
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
    // Note : payload : { index, crystal }
    changeCharacterCrystal(state, payload) {
      state.character.crystals[payload.index] = payload.crystal;
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
