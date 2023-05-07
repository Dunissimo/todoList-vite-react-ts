import { createContext, FC, useEffect, useState } from "react";
import { ITodo, ITodosContext } from "../utils/interfaces";
import { validateTodo } from "../utils/helpers";

const initialCtx: ITodosContext = {
  todos: [],
  currentTodo: {
    checked: false,
    id: 0,
    title: "",
  },
  setCurrentTodo: () => {},
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
  const [currentTodo, setCurrent] = useState<ITodo | null>(null);

  const addTodo = (todo: ITodo) => {
    if (validateTodo(todo)) {
      setTodos((todos) => [todo, ...todos]);
    } else {
      return;
    }
  };
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const deleteCompletedTodos = () => {
    setTodos((todos) => todos.filter((todo) => !todo.checked));
  };

  const changeCheckedStatus = (id: number, checked: boolean) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = checked;
          return todo;
        }
        return todo;
      });
    });
  };

  const _updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => _updateLocalStorage(), [todos]);

  const ctx = {
    todos,
    currentTodo,
    setCurrentTodo: (todo: ITodo | null) => setCurrent(todo),
    filter,
    changeFilter: (string: string) => setFilter(string),
    addTodo,
    updateTodos: (todos: ITodo[]) => setTodos(todos),
    deleteTodo,
    changeCheckedStatus,
    deleteCompletedTodos,
  };

  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
