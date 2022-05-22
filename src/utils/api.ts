/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const create = async(data: any) => {
  return await fetch("/.netlify/functions/todos-create", {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const readAll = async() => {
  return await fetch("/.netlify/functions/todos-read-all").then((response) => {
    return response.json();
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const update = async(todoId: number, data: any) => {
  return await fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const deleteTodo = async(todoId: number) => {
  return await fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: "POST",
  }).then(response => {
    return response.json();
  });
};

const batchDeleteTodo = async(todoIds: number[]) => {
  return await fetch("/.netlify/functions/todos-delete-batch", {
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