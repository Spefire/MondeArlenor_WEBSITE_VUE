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

exports.handler = async() => {
  return await client.query(q.Paginate(q.Match(q.Ref("indexes/all_quizz"))))
    .then((response) => {
      const todoRefs = response.data;
      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref);
      });
      return client.query(getAllTodoDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        };
      });
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};