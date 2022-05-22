/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const create = (data: any) => {
  return fetch("/.netlify/functions/todos-create", {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const readAll = () => {
  return fetch("/.netlify/functions/todos-read-all").then((response) => {
    console.warn("response", response);
    return response.json();
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const update = (todoId: number, data: any) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const deleteTodo = (todoId: number) => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: "POST",
  }).then(response => {
    return response.json();
  });
};

const batchDeleteTodo = (todoIds: number[]) => {
  return fetch("/.netlify/functions/todos-delete-batch", {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

export default {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo
};