import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.VUE_APP_FAUNADB,
  domain: "db.eu.fauna.com",
  scheme: "https",
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log("data", data);
  console.log("Function `todo-delete-batch` invoked", data.ids);
  // construct batch query from IDs
  const deleteAllCompletedTodoQuery = data.ids.map((id) => {
    return q.Delete(q.Ref(`classes/todos/${id}`));
  });
  // Hit fauna with the query to delete the completed items
  return client.query(deleteAllCompletedTodoQuery)
    .then((response) => {
      console.log("success", response);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      });
    }).catch((error) => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });
};