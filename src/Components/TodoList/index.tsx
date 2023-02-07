import { FC } from "react";
import { useTodos, useView } from "../../utils/hooks";
import Tabs from "../Tabs";
import Todo from "../Todo";
import "./TodoList.scss";

const TodoList: FC = () => {
  const { theme } = useView();
  const { list, deleteAllTodos, filter } = useTodos();

  const renderData = () => {
    const noData = (
      <section className={`todo-list`}>
        <div className={`todo ${theme}`}>
          <p>There are no tasks yet</p>
        </div>
      </section>
    );

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

    if (haveData.length) {
      return haveData;
    } else {
      return noData;
    }
  };

  const media = document.body.clientWidth < 1024;

  return (
    <section className={`todo-list`}>
      {renderData()}
      <div className="params">
        <div className={`todo params ${theme}`}>
          <p>{list.filter((todo) => !todo.checked).length} items left</p>
          {media ? "" : <Tabs classname={`desktop ${theme}`} />}
          <div className="clear" onClick={deleteAllTodos}>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
