import { createContext, FC, useState } from "react";
import { IContext, ITodo } from "./interfaces";

const initialCtx: IContext = {
  view: {
    theme: "dark",
    toggleTheme: () => {},
  },
  todos: {
    list: [],
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

const initialTodoList = [
  { id: Math.random() * 100, title: "Learn Vite + React +TS", checked: false },
  { id: Math.random() * 100, title: "Go to college", checked: false },
  {
    id: Math.random() * 100,
    title: "Become Senior Frontend Dev",
    checked: false,
  },
];

const ContextProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState<ITodo[]>(initialTodoList);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const addTodo = (todo: ITodo) => {
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
  const deleteCompletedTodos = () =>
    setTodos((todos) => todos.filter((todo) => !todo.checked));

  const ctx = {
    view: {
      theme,
      toggleTheme,
    },
    todos: {
      list: todos,
      addTodo,
      deleteTodo,
      changeCheckedStatus,
      deleteAllTodos: deleteCompletedTodos,
    },
  };

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
};

export default ContextProvider;
