/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

import { ResponseCharacter, ResponseQuizz, ResponseStuff } from "./api_models";
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
  readAllStuff,
  sendQuizz,
  sendCharacter,
  sendStuff,
  updateCharacter,
  updateStuff,
  deleteCharacter,
  deleteStuff,
};