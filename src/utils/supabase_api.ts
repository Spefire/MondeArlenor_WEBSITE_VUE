/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import requests from "./requests";
import supabase_requests from "./supabase_requests";

// --- QUIZZ ---------------------------------------------------------------------------
const getAllQuizz = async(): Promise<CelestiaQuizz[]>  => {
  return await supabase_requests.requestGet("quizz");
};

const postQuizz = async(quizz: CelestiaQuizz): Promise<string> => {
  quizz.initTime();
  const result: string = await requests.requestPost("quizz", quizz);
  return result;
};

// --- CHARACTER ---------------------------------------------------------------------------
const getAllCharacter = async(): Promise<ArlenorCharacter[]>  => {
  return await supabase_requests.requestGet("character");
};

const postCharacter = async(character: ArlenorCharacter): Promise<string> => {
  character.initTime();
  const result: string = await requests.requestPost("character", character);
  return result;
};

const putCharacter = async(character: ArlenorCharacter): Promise<string> => {
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
  return await supabase_requests.requestGet("skill");
};

const postSkill = async(skill: ArlenorSkill): Promise<string> => {
  skill.initTime();
  const result: string = await requests.requestPost("skill", skill);
  return result;
};

const putSkill = async(skill: ArlenorSkill): Promise<string> => {
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
  return await supabase_requests.requestGet("stuff");
};

const postStuff = async(stuff: ArlenorStuff): Promise<string> => {
  stuff.initTime();
  const result: string = await requests.requestPost("stuff", stuff);
  return result;
};

const putStuff = async(stuff: ArlenorStuff): Promise<string> => {
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
  return await supabase_requests.requestGet("power");
};

const postAllPower = async(powers: ArlenorPower[]): Promise<string> => {
  const result = "";
  powers.forEach(async(power) => {
    power.initTime();
    await requests.requestPost("power", power);
  });
  return result;
};

const postPower = async(power: ArlenorPower): Promise<string> => {
  power.initTime();
  const result: string = await requests.requestPost("power", power);
  return result;
};

const putPower = async(power: ArlenorPower): Promise<string> => {
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
  postQuizz,
  postCharacter,
  postSkill,
  postStuff,
  postPower,
  putCharacter,
  putSkill,
  putStuff,
  putPower,
  deleteCharacter,
  deleteSkill,
  deleteStuff,
  deletePower,
  postAllPower,
};