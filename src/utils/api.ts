/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { QuizzDB } from "@/models/CelestiaQuizz";

const testAWS = async() => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);

  try {
    return await fetch("https://ibq1mym018.execute-api.eu-west-3.amazonaws.com/production/quizz",
      {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default"
      })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        return JSON.parse(data.body);
      });
  } catch (err) {
    console.error("Error:", err);
  }
};

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
  testAWS: testAWS,
  create: create,
  readAll: readAll,
  read: read,
};