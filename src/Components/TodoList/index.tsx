import { FC, useContext } from "react";
import { Context } from "../../utils/Context";
import Tabs from "../Tabs";
import Todo from "../Todo";
import "./TodoList.scss";

const TodoList: FC = () => {
  const {
    view: { theme },
    todos: { list, deleteAllTodos, filter },
  } = useContext(Context);

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
      .map((todo, _, arr) => {
        console.log(arr.length);

        return <Todo key={todo.id} todo={todo} />;
      });

    if (haveData.length) {
      return haveData;
    } else {
      return noData;
    }
  };

  return (
    <section className={`todo-list`}>
      {renderData()}
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
