/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const readAllQuizz = async() => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);

  try {
    return await fetch("https://ibq1mym018.execute-api.eu-west-3.amazonaws.com/production/quizz",
      {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
        // body: JSON.stringify(data),
        // method: "POST"
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

export default {
  readAllQuizz: readAllQuizz,
};