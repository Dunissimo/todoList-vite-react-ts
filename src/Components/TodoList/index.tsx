import { FC, useContext } from "react";
import { Context } from "../../utils/Context";
import { ITodo } from "../../utils/interfaces";
import Tabs from "../Tabs";
import Todo from "../Todo";
import "./TodoList.scss";

const TodoList: FC = () => {
  const {
    view: { theme },
    todos: { list, deleteAllTodos, filter },
  } = useContext(Context);

  const noData = (
    <section className={`todo-list`}>
      <div className={`todo ${theme}`}>
        <p>There are no tasks yet</p>
      </div>
    </section>
  );

  const filterTodos = (todo: ITodo, sorting: string) => {};

  const haveData = list
    .filter((todo) => {
      switch (filter) {
        case "All":
          return todo;
        case "Active":
          return !todo.checked;
        case "Completed":
          return todo.checked;
        default:
          return todo;
      }
    })
    .map((todo) => <Todo key={todo.id} todo={todo} />);

  return (
    <section className={`todo-list`}>
      {list.length < 1 ? noData : haveData}
      <div className="params">
        <div className={`todo ${theme}`}>
          <p>{list.filter((todo) => !todo.checked).length} items left</p>
          <Tabs />
          <div className="clear" onClick={deleteAllTodos}>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
