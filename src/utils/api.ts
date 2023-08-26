/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import { ResponseCharacter, ResponseQuizz, ResponseSkill, ResponseStuff } from "./api_models";
import requests from "./requests";

// --- QUIZZ ---------------------------------------------------------------------------
const readAllQuizz = async(): Promise<CelestiaQuizz[]>  => {
  const results: ResponseQuizz[] = await requests.requestGet("quizz");
  
  const finalResults: CelestiaQuizz[] = [];
  results.forEach((obj: ResponseQuizz) => {
    const quizz = new CelestiaQuizz();
    quizz.id = obj.ref_quizz ? 0 : 1;
    finalResults.push(quizz);
  });

  return finalResults;
};

const sendQuizz = async(quizz: CelestiaQuizz): Promise<string> => {
  quizz.initTime();
  const result: string = await requests.requestPost("quizz", quizz);
  return result;
};

// --- CHARACTER ---------------------------------------------------------------------------
const readAllCharacter = async(): Promise<ArlenorCharacter[]>  => {
  const results: ResponseCharacter[] = await requests.requestGet("character");
  
  const finalResults: ArlenorCharacter[] = [];
  results.forEach((obj: ResponseCharacter) => {
    const character = new ArlenorCharacter();
    character.id = obj.ref_character ? 0 : 1;
    finalResults.push(character);
  });

  return finalResults;
};

const sendCharacter = async(character: ArlenorCharacter): Promise<string> => {
  character.initTime();
  const result: string = await requests.requestPost("character", character);
  return result;
};

const updateCharacter = async(character: ArlenorCharacter): Promise<string> => {
  character.initTime();
  const result: string = await requests.requestPut("character", character);
  return result;
};

const deleteCharacter = async(character: ArlenorCharacter): Promise<string> => {
  const result: string = await requests.requestDelete("character", character.id);
  return result;
};

// --- SKILL ---------------------------------------------------------------------------
const readAllSkill = async(): Promise<ArlenorSkill[]>  => {
  const results: ResponseSkill[] = await requests.requestGet("skill");

  const finalResults: ArlenorSkill[] = [];
  results.forEach((obj: ResponseSkill) => {
    const skill = new ArlenorSkill();
    skill.id = obj.ref_skill ? 0 : 1;
    finalResults.push(skill);
  });

  return finalResults;
};

const sendSkill = async(skill: ArlenorSkill): Promise<string> => {
  skill.initTime();
  const result: string = await requests.requestPost("skill", skill);
  return result;
};

const updateSkill = async(skill: ArlenorSkill): Promise<string> => {
  skill.initTime();
  const result: string = await requests.requestPut("skill", skill);
  return result;
};

const deleteSkill = async(skill: ArlenorSkill): Promise<string> => {
  const result: string = await requests.requestDelete("skill", skill.id);
  return result;
};

// --- STUFF ---------------------------------------------------------------------------
const readAllStuff = async(): Promise<ArlenorStuff[]>  => {
  const results: ResponseStuff[] = await requests.requestGet("stuff");

  const finalResults: ArlenorStuff[] = [];
  results.forEach((obj: ResponseStuff) => {
    const stuff = new ArlenorStuff();
    stuff.id = obj.ref_stuff ? 0 : 1;
    finalResults.push(stuff);
  });

  return finalResults;
};

const sendStuff = async(stuff: ArlenorStuff): Promise<string> => {
  stuff.initTime();
  const result: string = await requests.requestPost("stuff", stuff);
  return result;
};

const updateStuff = async(stuff: ArlenorStuff): Promise<string> => {
  stuff.initTime();
  const result: string = await requests.requestPut("stuff", stuff);
  return result;
};

const deleteStuff = async(stuff: ArlenorStuff): Promise<string> => {
  const result: string = await requests.requestDelete("stuff", stuff.id);
  return result;
};

export default {
  readAllQuizz,
  readAllCharacter,
  readAllSkill,
  readAllStuff,
  sendQuizz,
  sendCharacter,
  sendSkill,
  sendStuff,
  updateCharacter,
  updateSkill,
  updateStuff,
  deleteCharacter,
  deleteSkill,
  deleteStuff,
};