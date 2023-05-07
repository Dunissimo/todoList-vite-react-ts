import { createContext, FC, useEffect, useState } from "react";
import { ITodo, ITodosContext } from "../utils/interfaces";

const initialCtx: ITodosContext = {
  todos: [],
  filter: "All",
  changeFilter: () => {},
  addTodo: () => {},
  updateTodos: () => {},
  deleteTodo: () => {},
  changeCheckedStatus: () => {},
  deleteCompletedTodos: () => {},
};

export const TodosContext = createContext(initialCtx);

interface IProps {
  children: React.ReactNode;
}

const TodosContextProvider: FC<IProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );
  const [filter, setFilter] = useState("All");

  const addTodo = (todo: ITodo) => {
    setTodos((todos) => [todo, ...todos]);
  };
  const updateTodos = (todos: ITodo[]) => {
    setTodos(todos);
  };
  const deleteTodo = (id: number) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  const deleteCompletedTodos = () => {
    setTodos((todos) => todos.filter((todo) => !todo.checked));
  };

  const changeFilter = (sort: string) => {
    setFilter(sort);
  };

  const changeCheckedStatus = (id: number, checked: boolean) => {
    setTodos((todos) => {
      const newArr = todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = checked;
          return todo;
        }
        return todo;
      });

      return newArr;
    });
  };

  const _updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => _updateLocalStorage(), [todos]);

  const ctx = {
    todos,
    filter,
    changeFilter,
    addTodo,
    updateTodos,
    deleteTodo,
    changeCheckedStatus,
    deleteCompletedTodos,
  };

  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
