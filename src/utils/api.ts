/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import { ResponsePower, ResponseQuizz } from "./api_models";
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
  const result: ArlenorCharacter[] = await requests.requestGet("character");
  return result;
};

const sendCharacter = async(character: ArlenorCharacter): Promise<string> => {
  const result: string = await requests.requestPost("character", character);
  return result;
};

// --- SKILL ---------------------------------------------------------------------------
const readAllSkill = async(): Promise<ArlenorSkill[]>  => {
  const result: ArlenorSkill[] = await requests.requestGet("skill");
  return result;
};

const sendSkill = async(skill: ArlenorSkill): Promise<string> => {
  const result: string = await requests.requestPost("skill", skill);
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

const sendPower = async(power: ArlenorPower): Promise<string> => {
  power.initTime();
  const result: string = await requests.requestPost("power", power);
  return result;
};

export default {
  readAllQuizz,
  readAllCharacter,
  readAllSkill,
  readAllPower,
  sendQuizz,
  sendCharacter,
  sendSkill,
  sendPower,
};