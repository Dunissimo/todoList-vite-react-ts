import { createContext, FC, useEffect, useState } from "react";
import { IContext, ITodo } from "./interfaces";

const initialCtx: IContext = {
  view: {
    theme: "dark",
    toggleTheme: () => {},
  },
  todos: {
    list: [],
    filter: "All",
    changeFilter: () => {},
    addTodo: () => {},
    deleteTodo: () => {},
    changeCheckedStatus: () => {},
    deleteAllTodos: () => {},
  },
};

export const Context = createContext(initialCtx);

interface IProps {
  children: React.ReactNode;
}

const ContextProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const [todos, setTodos] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );

  const [filter, setFilter] = useState("All");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const changeFilter = (sort: string) => {
    setFilter(sort);
  };

  const addTodo = async (todo: ITodo) => {
    setTodos((todos) => [todo, ...todos]);
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

  const deleteTodo = (id: number) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  const deleteCompletedTodos = () => {
    setTodos((todos) => todos.filter((todo) => !todo.checked));
  };

  const _updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => _updateLocalStorage(), [todos]);

  const ctx = {
    view: {
      theme,
      toggleTheme,
    },
    todos: {
      list: todos,
      filter,
      changeFilter,
      addTodo,
      deleteTodo,
      changeCheckedStatus,
      deleteAllTodos: deleteCompletedTodos,
    },
  };

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
};

export default ContextProvider;
