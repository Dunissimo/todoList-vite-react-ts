export interface ITodo {
  checked: boolean;
  title: string;
  id: number;
}

export interface IViewContext {
  theme: string;
  toggleTheme: () => void;
}

export interface ITodosContext {
  todos: ITodo[];
  currentTodo: ITodo | null;
  setCurrentTodo: (todo: ITodo) => void;
  filter: string;
  changeFilter: (sort: string) => void;
  addTodo: (todo: ITodo) => void;
  updateTodos: (todos: ITodo[]) => void;
  deleteTodo: (id: number) => void;
  changeCheckedStatus: (id: number, checked: boolean) => void;
  deleteCompletedTodos: () => void;
}
