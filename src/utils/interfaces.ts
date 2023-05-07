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
  filter: string;
  changeFilter: (sort: string) => void;
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
  changeCheckedStatus: (id: number, checked: boolean) => void;
  deleteAllTodos: () => void;
}
