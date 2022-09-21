/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import { ResponseCharacter, ResponsePower, ResponseQuizz, ResponseSkill, ResponseStuff } from "./api_models";
import requests from "./requests";

// --- QUIZZ ---------------------------------------------------------------------------
const readAllQuizz = async(): Promise<CelestiaQuizz[]>  => {
  const results: ResponseQuizz[] = await requests.requestGet("quizz");

  const finalResults: CelestiaQuizz[] = [];
  results.forEach((obj: ResponseQuizz) => {
    const quizz = new CelestiaQuizz();
    quizz.id = obj.ref_quizz;
    quizz.initByJSON(obj.value_quizz);
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
    character.id = obj.ref_character;
    character.initByJSON(obj.value_character);
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
    skill.id = obj.ref_skill;
    skill.initByJSON(obj.value_skill);
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
    stuff.id = obj.ref_stuff;
    stuff.initByJSON(obj.value_stuff);
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

// --- POWER ---------------------------------------------------------------------------
const readAllPower = async(): Promise<ArlenorPower[]>  => {
  const results: ResponsePower[] = await requests.requestGet("power");

  const finalResults: ArlenorPower[] = [];
  results.forEach((obj: ResponsePower) => {
    const power = new ArlenorPower();
    power.id = obj.ref_power;
    power.initByJSON(obj.value_power);
    finalResults.push(power);
  });

  return finalResults;
};

const sendAllPower = async(powers: ArlenorPower[]): Promise<string> => {
  powers.forEach(power => power.initTime());

  let result = "";
  const chunkSize = 20;
  for (let i = 0; i < powers.length; i += chunkSize) {
    const chunk = powers.slice(i, i + chunkSize);
    result = await requests.requestPost("power/all", chunk);
  }

  return result;
};

const sendPower = async(power: ArlenorPower): Promise<string> => {
  power.initTime();
  const result: string = await requests.requestPost("power", power);
  return result;
};

const updatePower = async(power: ArlenorPower): Promise<string> => {
  power.initTime();
  const result: string = await requests.requestPut("power", power);
  return result;
};

const deletePower = async(power: ArlenorPower): Promise<string> => {
  const result: string = await requests.requestDelete("power", power.id);
  return result;
};

export default {
  readAllQuizz,
  readAllCharacter,
  readAllSkill,
  readAllStuff,
  readAllPower,
  sendQuizz,
  sendCharacter,
  sendSkill,
  sendStuff,
  sendPower,
  updateCharacter,
  updateSkill,
  updateStuff,
  updatePower,
  deleteCharacter,
  deleteSkill,
  deleteStuff,
  deletePower,
  sendAllPower,
};