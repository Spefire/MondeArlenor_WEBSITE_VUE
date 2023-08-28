import { ArlenorArchetype } from "@/models/ArlenorArchetype";
import { ArlenorCharacter, CURRENT_CHARACTER_VERSION } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";
import api from "@/utils/api";
import random from "@/utils/random";
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
      state.character.caractFor = payload.caractFor;
      state.character.caractHab = payload.caractHab;
      state.character.caractInt = payload.caractInt;
      state.character.caractTen = payload.caractTen;
      state.character.caractCha = payload.caractCha;
      state.character.caractMag = payload.caractMag;
    },
    changeCharacterCrystals(state, payload: ArlenorCharacter) {
      state.character.codeSpeciality01 = payload.codeSpeciality01;
      state.character.idsPowers01 = payload.idsPowers01;
      state.character.codeSpeciality02 = payload.codeSpeciality02;
      state.character.idsPowers02 = payload.idsPowers02;
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

      // Si c'est un nouveau personnage, on lui génère un guid et on l'ajoute
      if (!payload.guid) {
        console.warn("saveLocalCharacter : new character");
        payload.guid = random.generateID(20);
        characters.push(payload);
      }
      // Sinon, on récupère la version sauvegardée 
      else {
        const characterSaved = characters.find(character => character.guid === payload.guid);
        if (!characterSaved) {
          console.error("saveLocalCharacter : character not found");
          return;
        }
        // S'il a été trop modifié, on l'ajoute une nouvelle version
        if (characterSaved?.name !== payload.name
          || characterSaved?.codeRace !== payload.codeRace
          || characterSaved?.numLevel !== payload.numLevel) {
          console.warn("saveLocalCharacter : new character because modified");
          payload.guid = random.generateID(20);
          characters.push(payload);
        }
        // Sinon on remplace la version sauvegardée 
        else {
          console.warn("saveLocalCharacter : replace character");
          const index = characters.findIndex(character => character.guid === payload.guid);
          characters[index] = payload;
        }
      }

      state.localCharacters = characters;

      const localCharactersString = JSON.stringify(characters);
      localStorage.setItem("localCharacters", localCharactersString);
    },
    deleteLocalCharacter(state, payload: string) {
      let characters = instanceCharacters();
      characters = characters.filter(charact => charact.guid !== payload);
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

const instanceCharacters = (): ArlenorCharacter[] => {
  let localCharactersString = localStorage.getItem("localCharacters");

  let localCharacters: ArlenorCharacter[];
  if (localCharactersString) localCharacters = JSON.parse(localCharactersString);
  else localCharacters = [];

  const finalCharacters: ArlenorCharacter[] = [];
  localCharacters.forEach(character => {
    const item = new ArlenorCharacter();
    // Si la version sauvegardée est celle actuelle
    // Alors aucun soucis, on la prend !
    if (character.guid && character.version === CURRENT_CHARACTER_VERSION) {
      Object.assign(item, character);
      finalCharacters.push(item);
    }
    // Sinon, on prend juste son nom, son niveau
    // Ce sont des propriétés qui ne changeront pas...
    else if (character.guid) {
      item.version = character.version;
      item.numLevel = character.numLevel;
      item.guid = character.guid;
      item.name = character.name;
      finalCharacters.push(item);
    }
  });

  // On sauvegarde le nettoyage
  localCharactersString = JSON.stringify(finalCharacters);
  localStorage.setItem("localCharacters", localCharactersString);

  return finalCharacters;
};
