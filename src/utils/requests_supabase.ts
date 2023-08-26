/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@supabase/supabase-js";

const url = process.env.VUE_APP_SUPABASE_URL || "";
const key = process.env.VUE_APP_SUPABASE_ANON_KEY || "";
const supabase = createClient(url, key);

const requestGet = async(target: string): Promise<any[]>  => {
  const { data } = await supabase.from(target).select();
  return (data || []);
};

const requestPost = async(target: string, item: any): Promise<string> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", key);

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
  myHeaders.append("x-api-key", key);

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
  myHeaders.append("x-api-key", key);

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