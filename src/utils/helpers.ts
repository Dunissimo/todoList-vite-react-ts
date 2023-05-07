import { ITodo } from "./interfaces";

// Validation may become more complicated in the future
// so I created this function
export const validateTodo = (todo: ITodo) => {
  if (todo.title) return true;
  else return false;
};
