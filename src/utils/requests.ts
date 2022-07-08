/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

const url = "https://ibq1mym018.execute-api.eu-west-3.amazonaws.com/production/";

const requestGet = async(target: string): Promise<any[]>  => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);
  
  const result: any[] = [];
  try {
    return await fetch(url + target,
      {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
      })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode === 200) {
          return JSON.parse(data.body);
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

const requestPost = async(target: string, item: any): Promise<string> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);

  try {
    return await fetch(url + target,
      {
        method: "POST",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
        body: JSON.stringify(item),
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


const requestPut = async(target: string, item: any): Promise<string> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);

  try {
    return await fetch(url + target,
      {
        method: "PUT",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
        body: JSON.stringify(item),
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

const requestDelete = async(target: string, id: string): Promise<string> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", process.env.VUE_APP_API_KEY);

  try {
    return await fetch(url + target,
      {
        method: "DELETE",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
        body: JSON.stringify(id),
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
  requestGet,
  requestPost,
  requestPut,
  requestDelete
};