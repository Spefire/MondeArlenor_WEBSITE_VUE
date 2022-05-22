import faunadb from "faunadb";
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
  const deleteAllCompletedTodoQuery = data.ids.map((id) => {
    return q.Delete(q.Ref(`classes/todos/${id}`));
  });
  
  return await client.query(deleteAllCompletedTodoQuery)
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