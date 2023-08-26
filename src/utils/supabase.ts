/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import { ResponsePower, ResponseSkill, ResponseStuff } from "./api_models";
import requests from "./requests";
import requests_supabase from "./requests_supabase";

// --- QUIZZ ---------------------------------------------------------------------------
const getAllQuizz = async(): Promise<CelestiaQuizz[]>  => {
  return await requests_supabase.requestGet("quizz");
};

const sendQuizz = async(quizz: CelestiaQuizz): Promise<string> => {
  quizz.initTime();
  const result: string = await requests.requestPost("quizz", quizz);
  return result;
};

// --- CHARACTER ---------------------------------------------------------------------------
const getAllCharacter = async(): Promise<ArlenorCharacter[]>  => {
  return await requests_supabase.requestGet("character");
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
const getAllSkill = async(): Promise<ArlenorSkill[]>  => {
  return await requests_supabase.requestGet("skill");
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
const getAllStuff = async(): Promise<ArlenorStuff[]>  => {
  return await requests_supabase.requestGet("stuff");
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
const getAllPower = async(): Promise<ArlenorPower[]>  => {
  return await requests_supabase.requestGet("power");
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
  getAllQuizz,
  getAllCharacter,
  getAllSkill,
  getAllStuff,
  getAllPower,
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