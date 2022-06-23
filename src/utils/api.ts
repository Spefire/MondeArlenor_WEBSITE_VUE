/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import { ResponseQuizz } from "./api_models";
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
class ArlenorPower {}

const readAllPower = async(): Promise<ArlenorPower[]>  => {
  const result: ArlenorPower[] = await requests.requestGet("power");
  return result;
};

const sendPower = async(power: ArlenorPower): Promise<string> => {
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