/* eslint-disable @typescript-eslint/no-explicit-any */
import { CelestiaQuizz } from "@/models/CelestiaQuizz";

const readAllQuizz = async(): Promise<CelestiaQuizz[]>  => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);
  
  const result: CelestiaQuizz[] = [];

  try {
    return await fetch("https://ibq1mym018.execute-api.eu-west-3.amazonaws.com/production/quizz",
      {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
      })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode === 200) {
          const objs = JSON.parse(data.body);
          objs.forEach((obj: any) => {
            const quizz = new CelestiaQuizz();
            quizz.initByJSON(obj.value_quizz);
            result.push(quizz);
          });
          return result;
        } else {
          console.error("Error:", data.body);
          return result;
        }
      });
  } catch (err) {
    console.error("Error:", err);
  }
  return result;
};

const sendQuizz = async(quizz: CelestiaQuizz): Promise<string> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);

  try {
    return await fetch("https://ibq1mym018.execute-api.eu-west-3.amazonaws.com/production/quizz",
      {
        method: "POST",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
        body: JSON.stringify(quizz),
      })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode === 200) {
          return JSON.parse(data.body);
        } else {
          console.error("Error:", data.body);
        }
      });
  } catch (err) {
    console.error("Error:", err);
  }
  return "";
};

export default {
  readAllQuizz: readAllQuizz,
  sendQuizz: sendQuizz,
};