/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import supabase_requests from "./supabase_requests";

// --- QUIZZ ---------------------------------------------------------------------------
const getAllQuizz = async(): Promise<CelestiaQuizz[]>  => {
  return await supabase_requests.requestGet("quizz");
};

const postQuizz = async(quizz: CelestiaQuizz): Promise<number> => {
  quizz.initTime();
  return await supabase_requests.requestPost("quizz", quizz);
};

// --- CHARACTER ---------------------------------------------------------------------------
const getAllCharacter = async(): Promise<ArlenorCharacter[]>  => {
  return await supabase_requests.requestGet("character");
};

const postCharacter = async(character: ArlenorCharacter): Promise<number> => {
  character.initTime();
  return await supabase_requests.requestPost("character", character);
};

const putCharacter = async(character: ArlenorCharacter): Promise<boolean> => {
  character.initTime();
  return await supabase_requests.requestPut("character", character);
};

const deleteCharacter = async(character: ArlenorCharacter): Promise<boolean> => {
  return await supabase_requests.requestDelete("character", character.id);
};

// --- SKILL ---------------------------------------------------------------------------
const getAllSkill = async(): Promise<ArlenorSkill[]>  => {
  const result = await supabase_requests.requestGet("skill");
  return transformSkills(result);
};

const postSkill = async(skill: ArlenorSkill): Promise<number> => {
  skill.initTime();
  return await supabase_requests.requestPost("skill", skill);
};

const putSkill = async(skill: ArlenorSkill): Promise<boolean> => {
  skill.initTime();
  return await supabase_requests.requestPut("skill", skill);
};

const deleteSkill = async(skill: ArlenorSkill): Promise<boolean> => {
  return await supabase_requests.requestDelete("skill", skill.id);
};

const transformSkills = (skills: ArlenorSkill[]): ArlenorSkill[] => {
  const items: ArlenorSkill[] = [];
  skills.forEach(skill => {
    const item = new ArlenorSkill();
    Object.assign(item, skill);
    items.push(item);
  });
  return items;
};

// --- STUFF ---------------------------------------------------------------------------
const getAllStuff = async(): Promise<ArlenorStuff[]>  => {
  return await supabase_requests.requestGet("stuff");
};

const postStuff = async(stuff: ArlenorStuff): Promise<number> => {
  stuff.initTime();
  return await supabase_requests.requestPost("stuff", stuff);
};

const putStuff = async(stuff: ArlenorStuff): Promise<boolean> => {
  stuff.initTime();
  return await supabase_requests.requestPut("stuff", stuff);
};

const deleteStuff = async(stuff: ArlenorStuff): Promise<boolean> => {
  return await supabase_requests.requestDelete("stuff", stuff.id);
};

// --- POWER ---------------------------------------------------------------------------
const getAllPower = async(): Promise<ArlenorPower[]>  => {
  const result = await supabase_requests.requestGet("power");
  return transformPowers(result);
};

const postAllPower = async(powers: ArlenorPower[]): Promise<ArlenorPower[]> => {
  powers.forEach(power => power.initTime());
  const result: ArlenorPower[] = await supabase_requests.requestPostAll("power", powers);
  return transformPowers(result);
};

const postPower = async(power: ArlenorPower): Promise<number> => {
  power.initTime();
  return await supabase_requests.requestPost("power", power);
};

const putPower = async(power: ArlenorPower): Promise<boolean> => {
  power.initTime();
  return await supabase_requests.requestPut("power", power);
};

const deletePower = async(power: ArlenorPower): Promise<boolean> => {
  return await supabase_requests.requestDelete("power", power.id);
};

const transformPowers = (powers: ArlenorPower[]): ArlenorPower[] => {
  const items: ArlenorPower[] = [];
  powers.forEach(power => {
    const item = new ArlenorPower();
    Object.assign(item, power);
    items.push(item);
  });
  return items;
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