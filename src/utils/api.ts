/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { QuizzDB } from "@/models/CelestiaQuizz";

const create = async(data: QuizzDB) => {
  return await fetch("/.netlify/functions/quizz-create", {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const readAll = async() => {
  return await fetch("/.netlify/functions/quizz-read-all").then((response) => {
    return response.json();
  });
};

const read = async(id: number) => {
  return await fetch(`/.netlify/functions/quizz-read/${id}`, {
    method: "POST",
  }).then(response => {
    return response.json();
  });
};

export default {
  create: create,
  readAll: readAll,
  read: read,
};