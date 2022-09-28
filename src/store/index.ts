import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorLevel } from "@/models/ArlenorLevel";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import { createStore } from "vuex";

export default createStore({
  state: {
    character: new ArlenorCharacter(),
    quizz: new CelestiaQuizz(),
    allCharacters: null as ArlenorCharacter[] | null,
    localCharacters: null as ArlenorCharacter[] | null,
    allPowers: null as ArlenorPower[] | null,
    allSkills: null as ArlenorSkill[] | null,
    allStuffs: null as ArlenorStuff[] | null
  },
  mutations: {
    async loadAllCharacters(state, payload = false) {
      if (!state.allCharacters || payload) {
        const allCharacters = await api.readAllCharacter();
        state.allCharacters = allCharacters.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async loadAllPowers(state, payload = false) {
      if (!state.allPowers || payload) {
        const allPowers = await api.readAllPower();
        state.allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async loadAllSkills(state, payload = false) {
      if (!state.allSkills || payload) {
        const allSkills = await api.readAllSkill();
        state.allSkills = allSkills.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async loadAllStuffs(state, payload = false) {
      if (!state.allStuffs || payload) {
        const allStuffs = await api.readAllStuff();
        state.allStuffs = allStuffs.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    changeAllCharacters(state, payload: ArlenorCharacter[]) {
      state.allCharacters = payload.sort((a, b) => a.name.localeCompare(b.name));
    },
    changeAllPowers(state, payload: ArlenorPower[]) {
      state.allPowers = payload.sort((a, b) => a.name.localeCompare(b.name));
    },
    changeAllSkills(state, payload: ArlenorSkill[]) {
      state.allSkills = payload.sort((a, b) => a.name.localeCompare(b.name));
    },
    changeAllStuffs(state, payload: ArlenorStuff[]) {
      state.allStuffs = payload.sort((a, b) => a.name.localeCompare(b.name));
    },
    changeCharacter(state, payload: ArlenorCharacter) {
      state.character = payload;
    },
    changeCharacterLevel(state, payload: ArlenorLevel) {
      state.character.level = payload;
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
    changeCharacterSkills(state, payload) {
      state.character.idsSkills = payload.idsSkills;
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
    },
    loadLocalCharacters(state) {
      const localCharactersString = localStorage.getItem("localCharacters");
      let localCharacters: ArlenorCharacter[];
      if (localCharactersString) localCharacters = JSON.parse(localCharactersString);
      else localCharacters = [];
      state.localCharacters = localCharacters;
    },
    saveLocalCharacter(state, payload: ArlenorCharacter) {
      let localCharactersString = localStorage.getItem("localCharacters");
      let localCharacters: ArlenorCharacter[];
      if (localCharactersString) localCharacters = JSON.parse(localCharactersString);
      else localCharacters = [];
      localCharacters.push(payload);
      state.localCharacters = localCharacters;
      localCharactersString = JSON.stringify(localCharacters);
      localStorage.setItem("localCharacters", localCharactersString);
    }
  },
  actions: {
  },
  modules: {
  }
});
