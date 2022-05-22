import faunadb from "faunadb";
import dotenv from "dotenv";
dotenv.config({path: ".env.local"});

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.VUE_APP_FAUNADB,
  domain: "db.fauna.com",
  scheme: "https",
  keepAlive: false
});

exports.handler = async(event) => {
  const data = JSON.parse(event.body);
  const quizzItem = {
    data: data
  };

  return await client.query(q.Create(q.Ref("classes/quizz"), quizzItem))
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