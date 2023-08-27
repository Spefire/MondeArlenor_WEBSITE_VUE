import { ArlenorArchetype } from "@/models/ArlenorArchetype";
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import supabase_api from "@/utils/supabase_api";
import { createStore } from "vuex";

export default createStore({
  state: {
    character: new ArlenorCharacter(),
    quizz: new CelestiaQuizz(),
    allCharacters: null as ArlenorCharacter[] | null,
    localCharacters: null as ArlenorCharacter[] | null,
    allPowers: null as ArlenorPower[] | null,
    allSkills: null as ArlenorSkill[] | null,
    allStuffs: null as ArlenorStuff[] | null,
    allArchetypes: null as ArlenorArchetype[] | null,
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
        const allPowers = await supabase_api.getAllPower();
        state.allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async loadAllSkills(state, payload = false) {
      if (!state.allSkills || payload) {
        const allSkills = await supabase_api.getAllSkill();
        state.allSkills = allSkills.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async loadAllStuffs(state, payload = false) {
      if (!state.allStuffs || payload) {
        const allStuffs = await api.readAllStuff();
        state.allStuffs = allStuffs.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async loadAllArchetypes(state, payload = false) {
      if (!state.allArchetypes || payload) {
        const allArchetypes = await supabase_api.getAllArchetype();
        state.allArchetypes = allArchetypes.sort((a, b) => a.name.localeCompare(b.name));
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

    // --- Character ------------------------------------------------------------------------------
    changeCharacter(state, payload: ArlenorCharacter) {
      state.character = payload;
    },
    changeCharacterLevel(state, payload: number) {
      state.character.numLevel = payload;
    },
    changeCharacterRace(state, payload: ArlenorCharacter) {
      state.character.codeRace = payload.codeRace;
    },
    changeCharacterCaracts(state, payload: ArlenorCharacter) {
      state.character.caracts.for = payload.caracts.for;
      state.character.caracts.hab = payload.caracts.hab;
      state.character.caracts.int = payload.caracts.int;
      state.character.caracts.ten = payload.caracts.ten;
      state.character.caracts.cha = payload.caracts.cha;
      state.character.caracts.mag = payload.caracts.mag;
    },
    changeCharacterCrystal(state, payload /* Note : { index, crystal } */) {
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
    resetCharacter(state) {
      state.character = new ArlenorCharacter();
    },
    loadLocalCharacters(state) {
      state.localCharacters = instanceCharacters();
    },
    saveLocalCharacter(state, payload: ArlenorCharacter) {
      const characters = instanceCharacters();
      characters.push(payload);
      state.localCharacters = characters;

      const localCharactersString = JSON.stringify(characters);
      localStorage.setItem("localCharacters", localCharactersString);
    },
    deleteLocalCharacter(state, payload: number) {
      let characters = instanceCharacters();
      characters = characters.filter(charact => charact.id !== payload);
      state.localCharacters = characters;

      const localCharactersString = JSON.stringify(characters);
      localStorage.setItem("localCharacters", localCharactersString);
    },

    // --- Quizz ------------------------------------------------------------------------------
    changeQuizz(state, payload /* Note : { index, quizz } */) {
      state.quizz.questions[payload.index] = payload.quizz.questions[payload.index];
    },
  },
  actions: {
  },
  modules: {
  }
});

const instanceCharacters = ():ArlenorCharacter[] => {
  const localCharactersString = localStorage.getItem("localCharacters");

  let localCharacters: ArlenorCharacter[];
  if (localCharactersString) localCharacters = JSON.parse(localCharactersString);
  else localCharacters = [];

  /*
  TODO
    const finalCharacters: ArlenorCharacter[] = [];
    localCharacters.forEach((obj: ArlenorCharacter) => {
    const localCharacterString = JSON.stringify(obj);
    const character = new ArlenorCharacter();
    character.id = obj.id;
    character.initByJSON(localCharacterString);
    finalCharacters.push(character);
  });*/

  return localCharacters;
};
