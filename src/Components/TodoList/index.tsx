import { FC } from "react";
import Todo from "../Todo";
import { useTodos, useView } from "../../utils/hooks";

import "./TodoList.scss";

const TodoList: FC = () => {
  const { theme } = useView();
  const { todos, filter } = useTodos();

  const renderData = () => {
    const noData = (
      <section className={`todo-list`}>
        <div className={`todo ${theme}`}>
          <p>There are no tasks yet</p>
        </div>
      </section>
    );

    const haveData = todos
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

  return <div>{renderData()}</div>;
};

export default TodoList;
