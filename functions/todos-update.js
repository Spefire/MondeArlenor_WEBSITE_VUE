import faunadb from "faunadb";
import getId from "./utils/getId";
import dotenv from "dotenv";
dotenv.config({path: ".env.local"});

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.VUE_APP_FAUNADB,
  domain: "db.eu.fauna.com",
  scheme: "https",
});

exports.handler = async(event) => {
  const data = JSON.parse(event.body);
  const id = getId(event.path);
  
  return await client.query(q.Update(q.Ref(`classes/todos/${id}`), {data}))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      };
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};