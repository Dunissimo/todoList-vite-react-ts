export interface ITodo {
  checked: boolean;
  title: string;
  id: number;
}

export interface IContext {
  view: {
    theme: string;
    toggleTheme: () => void;
  };
  todos: {
    list: ITodo[];
    addTodo: (todo: ITodo) => void;
    deleteTodo: (id: number) => void;
    changeCheckedStatus: (id: number, checked: boolean) => void;
    deleteAllTodos: () => void;
  };
}
